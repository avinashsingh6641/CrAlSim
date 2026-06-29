const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const https = require("https");

const sesClient = new SESClient({ region: process.env.AWS_REGION || "us-east-1" });

exports.handler = async (event) => {
    // 1. CORS headers
    const headers = {
        "Access-Control-Allow-Origin": "*", // Configure this to your domain in production
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
    };

    if (event.requestContext && event.requestContext.http && event.requestContext.http.method === "OPTIONS") {
        return { statusCode: 200, headers, body: "" };
    }

    try {
        let body;
        if (typeof event.body === "string") {
            body = JSON.parse(event.body);
        } else {
            body = event.body || {};
        }

        const { name, email, suggestions, recaptchaToken } = body;

        // 2. Validate inputs
        if (!name || !email || !suggestions || !recaptchaToken) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Missing required fields (name, email, suggestions, or recaptchaToken)" }),
            };
        }

        // 3. Word Limit Validation (Strict 500-word limit)
        const wordCount = suggestions.trim().split(/\s+/).filter(word => word.length > 0).length;
        if (wordCount > 500) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Suggestions must be 500 words or less." }),
            };
        }

        // 4. Verify Google reCAPTCHA
        const isHuman = await verifyRecaptcha(recaptchaToken);
        if (!isHuman) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Failed anti-automation verification (reCAPTCHA v2)." }),
            };
        }

        // 5. Send email via SES
        const toEmail = process.env.TO_EMAIL;
        if (!toEmail) {
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: "SES Destination email (TO_EMAIL) is not configured in environment variables." }),
            };
        }

        const emailParams = {
            Source: toEmail, // Must be verified identity in SES
            Destination: {
                ToAddresses: [toEmail]
            },
            Message: {
                Subject: {
                    Data: `New Feedback from ${name} (${email})`
                },
                Body: {
                    Text: {
                        Data: `Name: ${name}\nEmail: ${email}\n\nFeedback:\n${suggestions}`
                    }
                }
            },
            ReplyToAddresses: [email]
        };

        const command = new SendEmailCommand(emailParams);
        await sesClient.send(command);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: "Feedback sent successfully!" }),
        };

    } catch (error) {
        console.error("Error processing request:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Internal server error occurred." }),
        };
    }
};

function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.warn("RECAPTCHA_SECRET_KEY is not set. Skipping verification for testing.");
        return Promise.resolve(true);
    }

    return new Promise((resolve) => {
        const postData = `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`;

        const options = {
            hostname: "www.google.com",
            path: "/recaptcha/api/siteverify",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => data += chunk);
            res.on("end", () => {
                try {
                    const parsed = JSON.parse(data);
                    resolve(!!parsed.success);
                } catch (e) {
                    console.error("reCAPTCHA response parse error:", e);
                    resolve(false);
                }
            });
        });

        req.on("error", (e) => {
            console.error("reCAPTCHA HTTP error:", e);
            resolve(false);
        });

        req.write(postData);
        req.end();
    });
}
