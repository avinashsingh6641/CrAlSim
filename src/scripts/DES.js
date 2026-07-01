// DES Configuration Tables

const IP = [
    58, 50, 42, 34, 26, 18, 10, 2,
    60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6,
    64, 56, 48, 40, 32, 24, 16, 8,
    57, 49, 41, 33, 25, 17, 9,  1,
    59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5,
    63, 55, 47, 39, 31, 23, 15, 7
];

const IP_INV = [
    40, 8, 48, 16, 56, 24, 64, 32,
    39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30,
    37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28,
    35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26,
    33, 1, 41, 9,  49, 17, 57, 25
];

const E_BOX = [
    32, 1,  2,  3,  4,  5,
    4,  5,  6,  7,  8,  9,
    8,  9,  10, 11, 12, 13,
    12, 13, 14, 15, 16, 17,
    16, 17, 18, 19, 20, 21,
    20, 21, 22, 23, 24, 25,
    24, 25, 26, 27, 28, 29,
    28, 29, 30, 31, 32, 1
];

const P_BOX = [
    16, 7,  20, 21,
    29, 12, 28, 17,
    1,  15, 23, 26,
    5,  18, 31, 10,
    2,  8,  24, 14,
    32, 27, 3,  9,
    19, 13, 30, 6,
    22, 11, 4,  25
];

const PC_1 = [
    57, 49, 41, 33, 25, 17, 9,
    1,  58, 50, 42, 34, 26, 18,
    10, 2,  59, 51, 43, 35, 27,
    19, 11, 3,  60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15,
    7,  62, 54, 46, 38, 30, 22,
    14, 6,  61, 53, 45, 37, 29,
    21, 13, 5,  28, 20, 12, 4
];

const PC_2 = [
    14, 17, 11, 24, 1,  5,
    3,  28, 15, 6,  21, 10,
    23, 19, 12, 4,  26, 8,
    16, 7,  27, 20, 13, 2,
    41, 52, 31, 37, 47, 55,
    30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53,
    46, 42, 50, 36, 29, 32
];

const SHIFT_SCHEDULE = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

const S_BOX = [
    // S1
    [
        [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
        [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
        [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
        [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
    ],
    // S2
    [
        [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
        [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
        [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
        [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
    ],
    // S3
    [
        [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
        [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
        [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
        [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
    ],
    // S4
    [
        [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
        [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
        [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
        [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
    ],
    // S5
    [
        [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
        [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
        [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
        [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
    ],
    // S6
    [
        [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
        [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
        [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
        [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
    ],
    // S7
    [
        [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
        [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
        [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
        [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
    ],
    // S8
    [
        [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
        [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
        [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
        [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
    ]
];

// Helper functions for Strings as Bit Arrays
function textToBinString(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let bin = text.charCodeAt(i).toString(2);
        result += bin.padStart(8, '0');
    }
    // Pad to 64 if it's less
    while (result.length < 64) {
        result += '0';
    }
    // Truncate to 64 if it's more
    return result.substring(0, 64);
}

function binStringToText(binStr) {
    let result = "";
    for (let i = 0; i < binStr.length; i += 8) {
        let byteStr = binStr.substring(i, i + 8);
        result += String.fromCharCode(parseInt(byteStr, 2));
    }
    return result;
}

function hexToBinString(hex) {
    let result = "";
    for (let i = 0; i < hex.length; i++) {
        let bin = parseInt(hex[i], 16).toString(2);
        result += bin.padStart(4, '0');
    }
    return result;
}

function binStringToHex(binStr) {
    let result = "";
    for (let i = 0; i < binStr.length; i += 4) {
        let nibbleStr = binStr.substring(i, i + 4);
        result += parseInt(nibbleStr, 2).toString(16).toUpperCase();
    }
    return result;
}

function xorBinStrings(str1, str2) {
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        result += (str1[i] === str2[i]) ? "0" : "1";
    }
    return result;
}

function permute(binStr, table) {
    let result = "";
    for (let i = 0; i < table.length; i++) {
        // Table is 1-indexed
        result += binStr[table[i] - 1];
    }
    return result;
}

function leftCircularShift(binStr, shiftAmount) {
    return binStr.substring(shiftAmount) + binStr.substring(0, shiftAmount);
}

function generateSubkeys(key64Bit) {
    let subkeys = [];
    let pc1Key = permute(key64Bit, PC_1);
    let C = pc1Key.substring(0, 28);
    let D = pc1Key.substring(28, 56);

    for (let i = 0; i < 16; i++) {
        C = leftCircularShift(C, SHIFT_SCHEDULE[i]);
        D = leftCircularShift(D, SHIFT_SCHEDULE[i]);
        let combined = C + D;
        let subkey = permute(combined, PC_2);
        subkeys.push(subkey);
    }
    return subkeys;
}

function feistelFunction(R, subkey) {
    let expandedR = permute(R, E_BOX);
    let xored = xorBinStrings(expandedR, subkey);
    
    let sboxResult = "";
    let sboxesDetails = [];
    for (let i = 0; i < 8; i++) {
        let block = xored.substring(i * 6, i * 6 + 6);
        let row = parseInt(block[0] + block[5], 2);
        let col = parseInt(block.substring(1, 5), 2);
        let val = S_BOX[i][row][col];
        let valBin = val.toString(2).padStart(4, '0');
        sboxResult += valBin;
        sboxesDetails.push({
            sbox: i + 1,
            input: block,
            row: row,
            col: col,
            val: val,
            output: valBin
        });
    }
    
    let pboxResult = permute(sboxResult, P_BOX);
    return {
        expandedR: expandedR,
        xored: xored,
        sboxResult: sboxResult,
        sboxesDetails: sboxesDetails,
        pboxResult: pboxResult
    };
}

function desEncryptBlock(plainText64Bit, subkeys) {
    let ip = permute(plainText64Bit, IP);
    let L = ip.substring(0, 32);
    let R = ip.substring(32, 64);
    
    let roundsData = [];

    for (let i = 0; i < 16; i++) {
        let prevL = L;
        let prevR = R;
        let fDetails = feistelFunction(prevR, subkeys[i]);
        L = prevR;
        R = xorBinStrings(prevL, fDetails.pboxResult);
        
        roundsData.push({
            round: i + 1,
            L_prev: prevL,
            R_prev: prevR,
            L: L,
            R: R,
            subkey: subkeys[i],
            expandedR: fDetails.expandedR,
            xored: fDetails.xored,
            sboxResult: fDetails.sboxResult,
            sboxesDetails: fDetails.sboxesDetails,
            pboxResult: fDetails.pboxResult,
            fResult: fDetails.pboxResult
        });
    }
    
    // Final Swap
    let combined = R + L;
    let cipherText64Bit = permute(combined, IP_INV);
    
    return {
        cipherText: cipherText64Bit,
        roundsData: roundsData,
        ip: ip
    };
}

function desDecryptBlock(cipherText64Bit, subkeys) {
    let ip = permute(cipherText64Bit, IP);
    let L = ip.substring(0, 32);
    let R = ip.substring(32, 64);
    
    let roundsData = [];
    
    // Reverse subkeys
    for (let i = 15; i >= 0; i--) {
        let prevL = L;
        let prevR = R;
        let fDetails = feistelFunction(prevR, subkeys[i]);
        L = prevR;
        R = xorBinStrings(prevL, fDetails.pboxResult);
        
        roundsData.push({
            round: 16 - i,
            L_prev: prevL,
            R_prev: prevR,
            L: L,
            R: R,
            subkey: subkeys[i],
            expandedR: fDetails.expandedR,
            xored: fDetails.xored,
            sboxResult: fDetails.sboxResult,
            sboxesDetails: fDetails.sboxesDetails,
            pboxResult: fDetails.pboxResult,
            fResult: fDetails.pboxResult
        });
    }
    
    let combined = R + L;
    let plainText64Bit = permute(combined, IP_INV);
    
    return {
        plainText: plainText64Bit,
        roundsData: roundsData,
        ip: ip
    };
}

function execDesEncrypt() {
    let keyInput = document.getElementById("deskey").value;
    let plainInput = document.getElementById("desplaintext").value;
    
    if (keyInput.length !== 8) {
        alert("DES Key must be exactly 8 characters long.");
        return;
    }
    if (plainInput.length !== 8) {
        alert("For this simulator, Plaintext must be exactly 8 characters long.");
        return;
    }
    
    let keyBin = textToBinString(keyInput);
    let plainBin = textToBinString(plainInput);
    
    let subkeys = generateSubkeys(keyBin);
    let result = desEncryptBlock(plainBin, subkeys);
    
    let cipherHex = binStringToHex(result.cipherText);
    document.getElementById("desciphertext").value = cipherHex;
    
    populateSimulator(plainBin, keyBin, subkeys, result, true, plainInput);
}

function execDesDecrypt() {
    let keyInput = document.getElementById("deskey").value;
    let cipherInput = document.getElementById("desciphertext").value;
    
    if (keyInput.length !== 8) {
        alert("DES Key must be exactly 8 characters long.");
        return;
    }
    if (cipherInput.length !== 16) {
        alert("For this simulator, Ciphertext must be exactly 16 Hex characters long.");
        return;
    }
    
    let keyBin = textToBinString(keyInput);
    let cipherBin = hexToBinString(cipherInput);
    
    let subkeys = generateSubkeys(keyBin);
    let result = desDecryptBlock(cipherBin, subkeys);
    
    let plainText = binStringToText(result.plainText);
    document.getElementById("desplaintext").value = plainText;
    
    populateSimulator(cipherBin, keyBin, subkeys, result, false, cipherInput);
}

// Simulator State
let desSimState = {
    inputBin: "",
    keyBin: "",
    subkeys: [],
    result: null,
    isEncrypt: true,
    currentRound: 0,
    currentStep: 0,
    origInputText: ""
};

function formatBinString(str, groupSize) {
    if (!str) return "";
    let regex = new RegExp(`.{1,${groupSize}}`, "g");
    let match = str.match(regex);
    return match ? match.join(' ') : str;
}

function desGoToRound(roundIdx) {
    desSimState.currentRound = roundIdx;
    desSimState.currentStep = 0;
    renderDESRound();
}

function desGoToStep(stepIdx) {
    desSimState.currentStep = stepIdx;
    renderDESRound();
}

function desNextStep() {
    if (desSimState.currentRound === 0) {
        desSimState.currentRound = 1;
        desSimState.currentStep = 0;
    } else if (desSimState.currentRound >= 1 && desSimState.currentRound <= 16) {
        if (desSimState.currentStep < 5) {
            desSimState.currentStep++;
        } else {
            if (desSimState.currentRound === 16) {
                desSimState.currentRound = 17;
                desSimState.currentStep = 0;
            } else {
                desSimState.currentRound++;
                desSimState.currentStep = 0;
            }
        }
    } else if (desSimState.currentRound === 17) {
        return;
    }
    renderDESRound();
}

function desPrevStep() {
    if (desSimState.currentRound === 0) {
        return;
    } else if (desSimState.currentRound >= 1 && desSimState.currentRound <= 16) {
        if (desSimState.currentStep > 0) {
            desSimState.currentStep--;
        } else {
            desSimState.currentRound--;
            if (desSimState.currentRound === 0) {
                desSimState.currentStep = 0;
            } else {
                desSimState.currentStep = 5;
            }
        }
    } else if (desSimState.currentRound === 17) {
        desSimState.currentRound = 16;
        desSimState.currentStep = 5;
    }
    renderDESRound();
}

function desSkipSteps() {
    desSimState.currentRound = 17;
    desSimState.currentStep = 0;
    renderDESRound();
}

function desResetSimulation() {
    desSimState.currentRound = 0;
    desSimState.currentStep = 0;
    renderDESRound();
}

function desHighlightSbox(sboxIdx) {
    document.querySelectorAll(".des-sbox-card").forEach(card => {
        card.classList.remove("active-sbox");
    });
    let card = document.getElementById("des-sbox-card-" + sboxIdx);
    if(card) {
        card.classList.add("active-sbox");
    }
}

function populateSimulator(inputBin, keyBin, subkeys, result, isEncrypt, origInputText) {
    desSimState = {
        inputBin: inputBin,
        keyBin: keyBin,
        subkeys: subkeys,
        result: result,
        isEncrypt: isEncrypt,
        currentRound: 0,
        currentStep: 0,
        origInputText: origInputText || ""
    };
    renderDESRound();
}

function resetDesSimulator() {
    document.getElementById("deskey").value = "";
    document.getElementById("desplaintext").value = "";
    document.getElementById("desciphertext").value = "";
    
    desSimState = {
        inputBin: "",
        keyBin: "",
        subkeys: [],
        result: null,
        isEncrypt: true,
        currentRound: 0,
        currentStep: 0,
        origInputText: ""
    };
    
    let simulatorDiv = document.getElementById("desSimulatorContainer");
    if(simulatorDiv) {
        simulatorDiv.innerHTML = `
            <div class="des-simulator-placeholder">
                <i class="fa fa-info-circle fa-3x"></i>
                <h3 style="color: #3b0764; font-weight: 700; margin-top: 0.5rem;">Simulation Idle</h3>
                <p style="max-width: 32rem; line-height: 1.5;">Please enter an 8-character Key and Plaintext (or 16-character Hex Ciphertext) on the **Cipher/Decipher** tab, and click **Encrypt** or **Decrypt** to start the interactive simulation.</p>
            </div>
        `;
    }
}

function renderDESRound() {
    let simulatorDiv = document.getElementById("desSimulatorContainer");
    if (!simulatorDiv || !desSimState.result) return;
    
    let layout = simulatorDiv.querySelector(".des-simulator-layout");
    if (!layout) {
        simulatorDiv.innerHTML = `
            <div class="des-simulator-layout">
                <div class="des-navigator-pane"></div>
                <div class="des-main-pane"></div>
            </div>
        `;
        layout = simulatorDiv.querySelector(".des-simulator-layout");
    }
    
    let navPane = layout.querySelector(".des-navigator-pane");
    let mainPane = layout.querySelector(".des-main-pane");
    
    let navHTML = `
        <div class="des-nav-header">Pre-Round</div>
        <div class="des-nav-item ${desSimState.currentRound === -1 ? 'active' : ''}" onclick="desGoToRound(-1)">
            <span>Key Schedule (Subkeys)</span>
        </div>
        <div class="des-nav-item ${desSimState.currentRound === 0 ? 'active' : ''}" onclick="desGoToRound(0)">
            <span>Initial Permutation (IP)</span>
        </div>
        
        <div class="des-nav-header">Feistel Rounds</div>
    `;
    for (let r = 1; r <= 16; r++) {
        navHTML += `
            <div class="des-nav-item ${desSimState.currentRound === r ? 'active' : ''}" onclick="desGoToRound(${r})">
                <span>Round ${r}</span>
                <span class="des-nav-badge">${r}</span>
            </div>
        `;
    }
    navHTML += `
        <div class="des-nav-header">Post-Round</div>
        <div class="des-nav-item ${desSimState.currentRound === 17 ? 'active' : ''}" onclick="desGoToRound(17)">
            <span>Final Permutation & Out</span>
        </div>
    `;
    navPane.innerHTML = navHTML;
    
    let currentRound = desSimState.currentRound;
    let step = desSimState.currentStep;
    let res = desSimState.result;
    
    if (currentRound === -1) {
        let formattedKey = formatBinString(desSimState.keyBin, 8);
        let pc1Key = permute(desSimState.keyBin, PC_1);
        let c0 = pc1Key.substring(0, 28);
        let d0 = pc1Key.substring(28, 56);
        
        mainPane.innerHTML = `
            <div class="des-feistel-container">
                <div class="des-round-header-bar">
                    <span class="des-round-title">Key Schedule & Subkey Generation</span>
                    <div class="des-step-navigation">
                        <button class="des-step-btn" disabled>Back</button>
                        <button class="des-step-btn primary-btn" onclick="desGoToRound(0)">Next (IP)</button>
                    </div>
                </div>
                
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.5; margin-bottom: 1rem;">
                    The original 64-bit key undergoes Permuted Choice 1 (PC-1), dropping 8 parity bits and dividing the remaining 56 bits into Left (C<sub>0</sub>) and Right (D<sub>0</sub>) halves. Circular left shifts are applied to both halves round-by-round, and Permuted Choice 2 (PC-2) extracts a 48-bit subkey K<sub>i</sub> for each round.
                </div>
                
                <div class="des-diagram-flow">
                    <div class="des-diagram-block" style="max-width: 24rem;">
                        <h4>64-bit Original Key</h4>
                        <p>${formattedKey}</p>
                    </div>
                    <div class="des-diagram-arrow-down"></div>
                    <div class="des-diagram-block active-step" style="max-width: 24rem; cursor: pointer;" onclick="showPc1Explanation()">
                        <h4>PC-1 Permutation Block</h4>
                        <p>Drops parity bits & shuffles into 56 bits (Click to explain)</p>
                        <p style="font-family: monospace; font-size: 0.7rem; font-weight: bold; margin-top: 4px; color: #1e1b4b; background: #faf5ff; padding: 2px 4px; border-radius: 4px; word-break: break-all;">C<sub>0</sub>: ${c0}<br>D<sub>0</sub>: ${d0}</p>
                    </div>
                </div>
                
                <div style="margin-top: 1.5rem; width: 100%;">
                    <h4 style="color: #3b0764; font-size: 1rem; margin-bottom: 0.5rem; font-weight: 700;">Subkey Round-by-Round Generation</h4>
                    ${generateKeyScheduleTableHTML()}
                </div>
            </div>
        `;
    } else if (currentRound === 0) {
        let formattedInput = formatBinString(desSimState.inputBin, 8);
        let l0 = res.ip.substring(0, 32);
        let r0 = res.ip.substring(32, 64);
        
        mainPane.innerHTML = `
            <div class="des-feistel-container">
                <div class="des-round-header-bar">
                    <span class="des-round-title">Initial Permutation (IP)</span>
                    <div class="des-step-navigation">
                        <button class="des-step-btn" onclick="desGoToRound(-1)">Back</button>
                        <button class="des-step-btn primary-btn" onclick="desNextStep()">Next Step</button>
                        <button class="des-step-btn" onclick="desSkipSteps()">Skip to End</button>
                    </div>
                </div>
                
                <div class="des-diagram-flow">
                    <div class="des-diagram-block active-step" style="max-width: 24rem; cursor: pointer;" onclick="showInputTextExplanation()">
                        <h4>${desSimState.isEncrypt ? 'Original Plaintext Input' : 'Original Ciphertext Input'}</h4>
                        <p>${desSimState.isEncrypt ? `"${desSimState.origInputText}" (8 chars)` : `0x${desSimState.origInputText} (16 Hex)`}</p>
                        <span style="font-size: 0.62rem; color: #6d28d9; font-weight: 600; display: block; margin-top: 2px;">(Click to explain bit conversion)</span>
                    </div>
                    <div class="des-diagram-arrow-down"></div>
                    
                    <div class="des-diagram-block" style="max-width: 24rem;">
                        <h4>64-bit Input Block</h4>
                        <p>${formattedInput}</p>
                    </div>
                    <div class="des-diagram-arrow-down"></div>
                    <div class="des-diagram-block active-step" style="max-width: 24rem; cursor: pointer;" onclick="showIpExplanation()">
                        <h4>IP Permutation Block</h4>
                        <p>Rearranging bits using IP table (Click to explain)</p>
                        <p style="font-family: monospace; font-size: 0.72rem; font-weight: bold; margin-top: 4px; color: #1e1b4b; background: #faf5ff; padding: 2px 4px; border-radius: 4px; word-break: break-all;">Out: ${formatBinString(res.ip, 8)}</p>
                    </div>
                    <div class="des-diagram-arrow-down"></div>
                    <div class="des-diagram-row" style="max-width: 24rem;">
                        <div class="des-diagram-block" style="flex: 1;">
                            <h4>L<sub>0</sub> (Left Half)</h4>
                            <p>${formatBinString(l0, 8)}</p>
                        </div>
                        <div class="des-diagram-block" style="flex: 1;">
                            <h4>R<sub>0</sub> (Right Half)</h4>
                            <p>${formatBinString(r0, 8)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (currentRound >= 1 && currentRound <= 16) {
        let rd = res.roundsData[currentRound - 1];
        let subkey = rd.subkey;
        let l_prev = rd.L_prev;
        let r_prev = rd.R_prev;
        let l_curr = rd.L;
        let r_curr = rd.R;
        
        mainPane.innerHTML = `
            <div class="des-feistel-container">
                <div class="des-round-header-bar">
                    <span class="des-round-title">Round ${currentRound} - Feistel Structure</span>
                    <div class="des-step-navigation">
                        <button class="des-step-btn" onclick="desPrevStep()">Back</button>
                        <button class="des-step-btn primary-btn" onclick="desNextStep()">Next Step</button>
                        <button class="des-step-btn" onclick="desSkipSteps()">Skip to End</button>
                        <button class="des-step-btn" onclick="desResetSimulation()">Reset</button>
                    </div>
                </div>
                
                <div class="des-diagram-flow">
                    <div class="des-diagram-row">
                        <div class="des-diagram-block ${step === 0 ? 'active-step' : ''}" onclick="desGoToStep(0)" style="flex: 1;">
                            <h4>L<sub>${currentRound - 1}</sub></h4>
                            <p>${formatBinString(l_prev, 8)}</p>
                        </div>
                        <div class="des-diagram-block ${step === 0 ? 'active-step' : ''}" onclick="desGoToStep(0)" style="flex: 1;">
                            <h4>R<sub>${currentRound - 1}</sub></h4>
                            <p>${formatBinString(r_prev, 8)}</p>
                        </div>
                    </div>
                    
                    <div class="des-diagram-row" style="margin-top: 0.2rem;">
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                            <div class="des-diagram-arrow-down" style="height: 90px;"></div>
                        </div>
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; border: 1px dashed #c084fc; border-radius: 8px; padding: 0.5rem; background-color: #faf5ff;">
                            <span style="font-size: 0.7rem; font-weight: 700; color: #6d28d9; text-transform: uppercase; margin-bottom: 0.4rem;">Feistel Function F</span>
                            
                            <div class="des-diagram-block ${step === 1 ? 'active-step' : ''}" onclick="${step === 1 ? 'showEBoxExplanation()' : 'desGoToStep(1)'}" style="width: 100%; cursor: pointer;">
                                <h4>1. E-Box Expansion (32 to 48 bit)</h4>
                                <p style="font-size: 0.72rem;">${formatBinString(rd.expandedR, 6)}</p>
                                ${step === 1 ? '<span style="font-size: 0.62rem; color: #6d28d9; font-weight: 600; display: block; margin-top: 2px;">(Click to explain)</span>' : ''}
                            </div>
                            <div class="des-diagram-arrow-down" style="height: 10px;"></div>
                            
                            <div class="des-diagram-block ${step === 2 ? 'active-step' : ''}" onclick="${step === 2 ? 'showXorExplanation()' : 'desGoToStep(2)'}" style="width: 100%; cursor: pointer;">
                                <h4>2. XOR Subkey K<sub>${currentRound}</sub></h4>
                                <p style="font-size: 0.72rem; color: #6d28d9;">K: ${formatBinString(subkey, 6)}</p>
                                <p style="font-size: 0.72rem; font-weight: 600;">Out: ${formatBinString(rd.xored, 6)}</p>
                                ${step === 2 ? '<span style="font-size: 0.62rem; color: #6d28d9; font-weight: 600; display: block; margin-top: 2px;">(Click to explain)</span>' : ''}
                            </div>
                            <div class="des-diagram-arrow-down" style="height: 10px;"></div>
                            
                            <div class="des-diagram-block ${step === 3 ? 'active-step' : ''}" onclick="${step === 3 ? 'showSboxExplanation()' : 'desGoToStep(3)'}" style="width: 100%; cursor: pointer;">
                                <h4>3. S-Box Substitution (48 to 32 bit)</h4>
                                <p style="font-size: 0.72rem;">${formatBinString(rd.sboxResult, 4)}</p>
                                ${step === 3 ? '<span style="font-size: 0.62rem; color: #6d28d9; font-weight: 600; display: block; margin-top: 2px;">(Click to explain)</span>' : ''}
                            </div>
                            <div class="des-diagram-arrow-down" style="height: 10px;"></div>
                            
                            <div class="des-diagram-block ${step === 4 ? 'active-step' : ''}" onclick="${step === 4 ? 'showPBoxExplanation()' : 'desGoToStep(4)'}" style="width: 100%; cursor: pointer;">
                                <h4>4. P-Box Permutation (32 bit)</h4>
                                <p style="font-size: 0.72rem;">${formatBinString(rd.pboxResult, 8)}</p>
                                ${step === 4 ? '<span style="font-size: 0.62rem; color: #6d28d9; font-weight: 600; display: block; margin-top: 2px;">(Click to explain)</span>' : ''}
                            </div>
                        </div>
                    </div>
                    
                    <div class="des-diagram-arrow-down" style="height: 12px;"></div>
                    <div class="des-diagram-block ${step === 5 ? 'active-step' : ''}" onclick="${step === 5 ? 'showXorLPrevExplanation()' : 'desGoToStep(5)'}" style="max-width: 18rem; cursor: pointer;">
                        <h4>5. XOR L<sub>${currentRound - 1}</sub> & Swap</h4>
                        <p style="font-size: 0.72rem;">L<sub>${currentRound - 1}</sub> &oplus; F(R<sub>${currentRound - 1}</sub>) = R<sub>${currentRound}</sub></p>
                        ${step === 5 ? '<span style="font-size: 0.62rem; color: #6d28d9; font-weight: 600; display: block; margin-top: 2px;">(Click to explain)</span>' : ''}
                    </div>
                    
                    <div class="des-diagram-arrow-down" style="height: 12px;"></div>
                    <div class="des-diagram-row">
                        <div class="des-diagram-block" style="flex: 1;">
                            <h4>L<sub>${currentRound}</sub> (= R<sub>${currentRound-1}</sub>)</h4>
                            <p>${formatBinString(l_curr, 8)}</p>
                        </div>
                        <div class="des-diagram-block" style="flex: 1;">
                            <h4>R<sub>${currentRound}</sub></h4>
                            <p>${formatBinString(r_curr, 8)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (currentRound === 17) {
        let finalL = res.roundsData[15].L;
        let finalR = res.roundsData[15].R;
        let swappedCombined = finalR + finalL;
        let outputBin = desSimState.isEncrypt ? res.cipherText : res.plainText;
        let outputVal = desSimState.isEncrypt ? binStringToHex(outputBin) : binStringToText(outputBin);
        
        mainPane.innerHTML = `
            <div class="des-feistel-container">
                <div class="des-round-header-bar">
                    <span class="des-round-title">Final Block Swap & IP Inverse (IP<sup>-1</sup>)</span>
                    <div class="des-step-navigation">
                        <button class="des-step-btn" onclick="desPrevStep()">Back</button>
                        <button class="des-step-btn primary-btn" disabled>Next Step</button>
                        <button class="des-step-btn" onclick="desResetSimulation()">Reset</button>
                    </div>
                </div>
                
                <div class="des-diagram-flow">
                    <div class="des-diagram-row" style="max-width: 24rem;">
                        <div class="des-diagram-block" style="flex: 1;">
                            <h4>R<sub>16</sub></h4>
                            <p>${formatBinString(finalR, 8)}</p>
                        </div>
                        <div class="des-diagram-block" style="flex: 1;">
                            <h4>L<sub>16</sub></h4>
                            <p>${formatBinString(finalL, 8)}</p>
                        </div>
                    </div>
                    <div class="des-diagram-arrow-down"></div>
                    <div class="des-diagram-block" style="max-width: 24rem;">
                        <h4>Swapped Combined (64-bit)</h4>
                        <p>${formatBinString(swappedCombined, 8)}</p>
                    </div>
                    <div class="des-diagram-arrow-down"></div>
                    <div class="des-diagram-block active-step" style="max-width: 24rem; cursor: pointer;" onclick="showIpInvExplanation()">
                        <h4>IP Inverse Permutation Block</h4>
                        <p>Mapping to final output bits (Click to explain)</p>
                        <p style="font-family: monospace; font-size: 0.72rem; font-weight: bold; margin-top: 4px; color: #1e1b4b; background: #faf5ff; padding: 2px 4px; border-radius: 4px; word-break: break-all;">Out: ${formatBinString(outputBin, 8)}</p>
                    </div>
                    <div class="des-diagram-arrow-down"></div>
                    <div class="des-diagram-block" style="max-width: 24rem; background: #dcfce7; border-color: #22c55e;">
                        <h4>Final output (${desSimState.isEncrypt ? 'Hexadecimal' : 'Text'})</h4>
                        <p style="font-size: 1.1rem; color: #15803d; font-weight: bold;">${outputVal}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

function generatePermutationGridHTML(inputBin, table) {
    let html = `<table class="des-bit-table">`;
    html += `<thead><tr>`;
    for (let c = 0; c < 8; c++) {
        html += `<th>Col ${c+1}</th>`;
    }
    html += `</tr></thead><tbody>`;
    
    for (let r = 0; r < 8; r++) {
        html += `<tr>`;
        for (let c = 0; c < 8; c++) {
            let tableIndex = r * 8 + c;
            let originalPos = table[tableIndex];
            let bit = inputBin[originalPos - 1];
            html += `
                <td class="highlight-bit">
                    <span style="display: block; font-size: 0.65rem; color: #64748b;">Bit ${originalPos}</span>
                    <span style="font-size: 0.95rem; font-weight: 700; color: #6d28d9;">${bit}</span>
                    <span style="display: block; font-size: 0.58rem; color: #94a3b8; margin-top: 2px;">#${tableIndex + 1}</span>
                </td>
            `;
        }
        html += `</tr>`;
    }
    html += `</tbody></table>`;
    return html;
}

function renderStepDetailsHTML(rd, step, roundNum) {
    if (step === 0) {
        let l_prev = rd.L_prev;
        let r_prev = rd.R_prev;
        return `
            <div class="des-detail-header">
                <span>Round ${roundNum} Overview</span>
                <span class="badge">Feistel Start</span>
            </div>
            <p>At the start of Round ${roundNum}, the 64-bit block is split into Left (L<sub>${roundNum-1}</sub>) and Right (R<sub>${roundNum-1}</sub>) halves, each 32 bits. The Right half is passed into the Feistel function <strong>F(R, K)</strong> alongside the 48-bit subkey K<sub>${roundNum}</sub>. The output of F is XORed with L<sub>${roundNum-1}</sub> to form the new Right half R<sub>${roundNum}</sub>, while the old Right half becomes the new Left half L<sub>${roundNum}</sub>.</p>
            <div style="display: flex; gap: 20px; margin-top: 0.5rem;">
                <div style="flex: 1;">
                    <strong>L<sub>${roundNum - 1}</sub> (Hex):</strong> <code>${binStringToHex(l_prev)}</code>
                </div>
                <div style="flex: 1;">
                    <strong>R<sub>${roundNum - 1}</sub> (Hex):</strong> <code>${binStringToHex(r_prev)}</code>
                </div>
            </div>
        `;
    } else if (step === 1) {
        return `
            <div class="des-detail-header">
                <span>Step 1: Expansion Permutation (E-Box)</span>
                <span class="badge">E-Box</span>
            </div>
            <p>The 32-bit Right half R<sub>${roundNum-1}</sub> is expanded to 48 bits using the E-Box table. The table duplicates 16 bits (mostly border bits of 4-bit sections) to create 8 sections of 6 bits. Duplicated bits provide avalanche effects. <a href="#" onclick="showEBoxExplanation(); return false;" style="color: #6d28d9; font-weight: 600; text-decoration: underline;">How is this calculated?</a></p>
            <div style="overflow-x: auto; margin-top: 0.5rem;">
                ${generateEBoxGridHTML(rd.R_prev, rd.expandedR)}
            </div>
        `;
    } else if (step === 2) {
        let keyShiftDetails = getCircularShiftDetailsHTML(roundNum);
        return `
            <div class="des-detail-header">
                <span>Step 2: Subkey K<sub>${roundNum}</sub> Circular Shift & XOR</span>
                <span class="badge">Key Schedule & XOR</span>
            </div>
            <p>The expanded 48-bit Right register is bitwise XORed (&oplus;) with the 48-bit round subkey K<sub>${roundNum}</sub>. <a href="#" onclick="showXorExplanation(); return false;" style="color: #6d28d9; font-weight: 600; text-decoration: underline;">How is this calculated?</a></p>
            ${keyShiftDetails}
            <div style="overflow-x: auto; margin-top: 0.8rem;">
                ${generateXORTableHTML(rd.expandedR, rd.subkey, rd.xored)}
            </div>
        `;
    } else if (step === 3) {
        return `
            <div class="des-detail-header">
                <span>Step 3: S-Box Substitution (48-bit to 32-bit)</span>
                <span class="badge">Non-linear substitution</span>
            </div>
            <p>The 48-bit XOR output is split into 8 chunks of 6 bits. Each chunk is processed by a dedicated S-Box (S1 to S8). The first and last bits of the 6-bit chunk select the <strong>Row</strong> (0 to 3), and the middle four bits select the <strong>Column</strong> (0 to 15). The decimal value found is converted to a 4-bit binary output. Click on any card below to highlight its S-Box details. <a href="#" onclick="showSboxExplanation(); return false;" style="color: #6d28d9; font-weight: 600; text-decoration: underline;">How is this calculated?</a></p>
            <div class="des-sboxes-grid">
                ${generateSBoxesGridHTML(rd.sboxesDetails)}
            </div>
        `;
    } else if (step === 4) {
        return `
            <div class="des-detail-header">
                <span>Step 4: Straight Permutation (P-Box)</span>
                <span class="badge">P-Box</span>
            </div>
            <p>The 32-bit S-Box output is shuffled using the standard P-Box table to disperse the S-Box outputs across different positions for the next round's XOR. <a href="#" onclick="showPBoxExplanation(); return false;" style="color: #6d28d9; font-weight: 600; text-decoration: underline;">How is this calculated?</a></p>
            <div style="overflow-x: auto; margin-top: 0.5rem;">
                ${generatePBoxGridHTML(rd.sboxResult, rd.pboxResult)}
            </div>
        `;
    } else if (step === 5) {
        return `
            <div class="des-detail-header">
                <span>Step 5: XOR with L<sub>${roundNum-1}</sub> & Register Swap</span>
                <span class="badge">Feistel XOR</span>
            </div>
            <p>The 32-bit output of the Feistel function F (the P-Box result) is bitwise XORed with the original Left half L<sub>${roundNum-1}</sub>. The registers are then swapped: the new Left half becomes L<sub>${roundNum}</sub> = R<sub>${roundNum-1}</sub>, and the new Right half becomes R<sub>${roundNum}</sub> = L<sub>${roundNum-1}</sub> &oplus; F. <a href="#" onclick="showXorLPrevExplanation(); return false;" style="color: #6d28d9; font-weight: 600; text-decoration: underline;">How is this calculated?</a></p>
            <div style="overflow-x: auto; margin-top: 0.5rem;">
                ${generateXORTableHTML(rd.L_prev, rd.pboxResult, rd.R, "L<sub>" + (roundNum-1) + "</sub>", "P-Box Output", "New R<sub>" + roundNum + "</sub>")}
            </div>
            <div style="margin-top: 0.8rem; background-color: #f8fafc; border: 1px dashed #e2e8f0; border-radius: 8px; padding: 0.8rem; font-size: 0.88rem; color: #475569;">
                <strong>Next Round States:</strong><br>
                • L<sub>${roundNum}</sub> = R<sub>${roundNum-1}</sub> = <code>${binStringToHex(rd.L)}</code><br>
                • R<sub>${roundNum}</sub> = L<sub>${roundNum-1}</sub> &oplus; F(R<sub>${roundNum-1}</sub>, K<sub>${roundNum}</sub>) = <code>${binStringToHex(rd.R)}</code>
            </div>
        `;
    }
}

function generateEBoxGridHTML(rPrev, expandedR) {
    let html = `<table class="des-bit-table"><thead><tr>`;
    for (let i = 1; i <= 6; i++) {
        html += `<th>Bit ${i}</th>`;
    }
    html += `</tr></thead><tbody>`;
    
    for (let g = 0; g < 8; g++) {
        html += `<tr>`;
        for (let b = 0; b < 6; b++) {
            let expandedIndex = g * 6 + b;
            let originalPos = E_BOX[expandedIndex];
            let bit = rPrev[originalPos - 1];
            
            let isDuplicated = (b === 0 || b === 5);
            let cls = isDuplicated ? "changed-bit" : "highlight-bit";
            html += `
                <td class="${cls}">
                    <span style="display: block; font-size: 0.65rem; color: #64748b;">Source #${originalPos}</span>
                    <span style="font-size: 0.95rem; font-weight: 700;">${bit}</span>
                    <span style="display: block; font-size: 0.58rem; color: #94a3b8; margin-top: 1px;">Exp #${expandedIndex + 1}</span>
                </td>
            `;
        }
        html += `</tr>`;
    }
    html += `</tbody></table>`;
    return html;
}

function generateXORTableHTML(str1, str2, outStr, label1 = "Expanded R", label2 = "Subkey K", labelOut = "XOR Output") {
    let html = `<table class="des-bit-table">`;
    let row1 = `<tr><th style="text-align: left;">${label1}</th>`;
    let row2 = `<tr><th style="text-align: left;">${label2}</th>`;
    let rowOut = `<tr><th style="text-align: left;">${labelOut}</th>`;
    
    for (let i = 0; i < str1.length; i++) {
        row1 += `<td>${str1[i]}</td>`;
        row2 += `<td style="color: #6d28d9; background-color: rgba(109, 40, 217, 0.02);">${str2[i]}</td>`;
        let isXorOne = (outStr[i] === '1');
        rowOut += `<td style="font-weight: 700; ${isXorOne ? 'background-color: rgba(22, 163, 74, 0.05); color: #16a34a;' : ''}">${outStr[i]}</td>`;
    }
    
    row1 += `</tr>`;
    row2 += `</tr>`;
    rowOut += `</tr>`;
    
    html += row1 + row2 + rowOut + `</table>`;
    return html;
}

function getCircularShiftDetailsHTML(roundNum) {
    let shiftAmount = SHIFT_SCHEDULE[roundNum - 1];
    return `
        <div style="background-color: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.85rem; color: #581c87; margin-top: 0.3rem;">
            <strong>Circular Key Shift:</strong> Round subkey is generated by left shifting C and D registers by <strong>${shiftAmount} bit(s)</strong> (Circular Left Shift Schedule), then selecting 48 bits using the Permuted Choice 2 (PC-2) table.
        </div>
    `;
}

function generateSBoxesGridHTML(details) {
    let html = "";
    for (let i = 0; i < 8; i++) {
        let det = details[i];
        let sBoxIndex = det.sbox - 1;
        let sboxTable = S_BOX[sBoxIndex];
        
        let rowLabel = det.input[0] + det.input[5];
        let colLabel = det.input.substring(1, 5);
        
        let tableHTML = `<table class="des-sbox-table-view"><thead><tr><th>R\\C</th>`;
        for (let col = 0; col < 16; col++) {
            tableHTML += `<th>${col.toString(16).toUpperCase()}</th>`;
        }
        tableHTML += `</tr></thead><tbody>`;
        
        for (let r = 0; r < 4; r++) {
            let isRowMatch = (r === det.row);
            tableHTML += `<tr class="${isRowMatch ? 'highlight-sbox-row' : ''}">`;
            tableHTML += `<th style="background-color: #f1f5f9; padding: 2px;">${r}</th>`;
            for (let c = 0; c < 16; c++) {
                let val = sboxTable[r][c];
                let isCellMatch = (isRowMatch && c === det.col);
                let colCls = (c === det.col) ? 'highlight-sbox-col' : '';
                tableHTML += `<td class="${isCellMatch ? 'highlight-sbox-cell' : colCls}" style="padding: 2px;">${val}</td>`;
            }
            tableHTML += `</tr>`;
        }
        tableHTML += `</tbody></table>`;
        
        html += `
            <div class="des-sbox-card ${det.sbox === 1 ? 'active-sbox' : ''}" id="des-sbox-card-${det.sbox}" onclick="desHighlightSbox(${det.sbox})">
                <h5>S-Box ${det.sbox}</h5>
                <p><strong>6-bit Input:</strong> <code style="font-size: 0.82rem; font-weight: 700; color: #1e1b4b;">${det.input[0]}<span style="color: #6d28d9;">${det.input.substring(1,5)}</span>${det.input[5]}</code></p>
                <p><strong>Row Lookup:</strong> <code>${rowLabel}</code> (Row ${det.row})</p>
                <p><strong>Col Lookup:</strong> <code>${colLabel}</code> (Col ${det.col})</p>
                <p><strong>Decimal Output:</strong> <strong style="color: #16a34a; font-size: 0.88rem;">${det.val}</strong> (Binary: <code>${det.output}</code>)</p>
                <div style="overflow-x: auto; max-width: 100%;">
                    ${tableHTML}
                </div>
            </div>
        `;
    }
    return html;
}

function generatePBoxGridHTML(sboxResult, pboxResult) {
    let html = `<table class="des-bit-table"><thead><tr>`;
    for (let c = 1; c <= 8; c++) {
        html += `<th>Bit ${c}</th>`;
    }
    html += `</tr></thead><tbody>`;
    
    for (let r = 0; r < 4; r++) {
        html += `<tr>`;
        for (let c = 0; c < 8; c++) {
            let pboxIndex = r * 8 + c;
            let originalPos = P_BOX[pboxIndex];
            let bit = sboxResult[originalPos - 1];
            html += `
                <td class="highlight-bit">
                    <span style="display: block; font-size: 0.65rem; color: #64748b;">Source #${originalPos}</span>
                    <span style="font-size: 0.95rem; font-weight: 700;">${bit}</span>
                    <span style="display: block; font-size: 0.58rem; color: #94a3b8; margin-top: 1px;">Dest #${pboxIndex + 1}</span>
                </td>
            `;
        }
        html += `</tr>`;
    }
    html += `</tbody></table>`;
    return html;
}

// Modal Explanation Functions
function openDesExplanationModal(title, bodyHTML) {
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    let bodyEl = document.getElementById("desModalBody");
    
    if (backdrop && titleEl && bodyEl) {
        titleEl.innerText = title;
        bodyEl.innerHTML = bodyHTML;
        backdrop.style.display = "flex";
    }
}

function closeDesExplanationModal(event) {
    desPermStopPlay();
    desXorStopPlay();
    desSboxStopPlay();
    let backdrop = document.getElementById("desModalBackdrop");
    if (backdrop) {
        backdrop.style.display = "none";
    }
}

let desPermVisualizerState = {
    inputBin: "",
    table: [],
    tableName: "",
    currentStep: 0,
    timerId: null,
    isPlaying: false,
    inputSize: 64,
    outputSize: 64,
    inputCols: 8,
    outputCols: 8
};

function drawInteractivePermutation() {
    let container = document.getElementById("desModalBody");
    if (!container) return;
    
    let step = desPermVisualizerState.currentStep;
    let inputBin = desPermVisualizerState.inputBin;
    let table = desPermVisualizerState.table;
    let tableName = desPermVisualizerState.tableName;
    
    let inputSize = desPermVisualizerState.inputSize || 64;
    let outputSize = desPermVisualizerState.outputSize || 64;
    let inputCols = desPermVisualizerState.inputCols || 8;
    let outputCols = desPermVisualizerState.outputCols || 8;
    
    let html = `
        <div class="des-modal-visualizer-container">
            <p style="font-size: 0.85rem; margin-bottom: 0.5rem; color: #475569; text-align: center;">
                Click <strong>Next</strong> or <strong>Auto-Play</strong> to fill the output block bit-by-bit using the lookup index value.
            </p>
            
            <div class="des-modal-grids-row">
                <!-- Input Grid -->
                <div class="des-modal-grid-box">
                    <h5>1. ${inputSize}-bit Input Grid</h5>
                    <div class="des-interactive-grid" style="grid-template-columns: repeat(${inputCols}, 1.6rem);">
    `;
    
    let sourceIdx = (step > 0 && step <= outputSize) ? table[step - 1] : null;
    for (let i = 1; i <= inputSize; i++) {
        let bit = inputBin[i - 1] || "0";
        let isActive = (i === sourceIdx);
        html += `
            <div class="des-interactive-grid-cell ${isActive ? 'active-input-highlight' : ''}" title="Input position ${i}">
                <span class="cell-index">${i}</span>
                <span class="cell-value">${bit}</span>
            </div>
        `;
    }
    html += `
                    </div>
                </div>
                
                <!-- Table Grid -->
                <div class="des-modal-grid-box">
                    <h5>2. ${tableName}</h5>
                    <div class="des-interactive-grid" style="grid-template-columns: repeat(${outputCols}, 1.6rem);">
    `;
    
    for (let i = 1; i <= outputSize; i++) {
        let val = table[i - 1];
        let isActive = (i === step);
        html += `
            <div class="des-interactive-grid-cell ${isActive ? 'active-table-highlight' : ''}" title="Table position ${i}">
                <span class="cell-index">#${i}</span>
                <span class="cell-value" style="font-size: 0.72rem;">${val}</span>
            </div>
        `;
    }
    html += `
                    </div>
                </div>
                
                <!-- Output Grid -->
                <div class="des-modal-grid-box">
                    <h5>3. ${outputSize}-bit Output Grid</h5>
                    <div class="des-interactive-grid" style="grid-template-columns: repeat(${outputCols}, 1.6rem);">
    `;
    
    for (let i = 1; i <= outputSize; i++) {
        let isFilled = (i < step);
        let isActive = (i === step);
        let bitVal = isFilled ? (inputBin[table[i - 1] - 1] || "0") : (isActive ? "" : "-");
        
        let cellClass = "";
        if (isActive) {
            cellClass = "active-output-highlight";
        } else if (isFilled) {
            cellClass = "filled-output";
        }
        
        html += `
            <div class="des-interactive-grid-cell ${cellClass}" title="Output position ${i}">
                <span class="cell-index">${i}</span>
                <span class="cell-value">${bitVal}</span>
            </div>
        `;
    }
    html += `
                    </div>
                </div>
            </div>
            
            <!-- Explanation Panel -->
            <div class="des-visualizer-explanation">
                <span>${getStepExplanationText(step, sourceIdx)}</span>
            </div>
            
            <!-- Controls -->
            <div class="des-visualizer-controls">
                <button class="des-visualizer-btn" onclick="desPermPrev()" ${step === 0 ? 'disabled' : ''}>Prev</button>
                <button class="des-visualizer-btn primary" onclick="desPermNext()" ${step === outputSize ? 'disabled' : ''}>Next</button>
                <button class="des-visualizer-btn" onclick="desPermTogglePlay()">
                    ${desPermVisualizerState.isPlaying ? '<i class="fa fa-pause"></i> Pause' : '<i class="fa fa-play"></i> Auto-Play'}
                </button>
                <button class="des-visualizer-btn" onclick="desPermReset()">Reset</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function getStepExplanationText(step, sourceIdx) {
    let outputSize = desPermVisualizerState.outputSize || 64;
    if (step === 0) {
        return "Click <strong>Next</strong> or <strong>Auto-Play</strong> to start the permutation calculation.";
    }
    if (step > outputSize) {
        return `Permutation complete! All ${outputSize} bits have been copied to their respective destination offsets.`;
    }
    
    let table = desPermVisualizerState.table;
    let inputBin = desPermVisualizerState.inputBin;
    let sourceBit = inputBin[sourceIdx - 1] || "0";
    
    return `Output Grid Cell <strong>#${step}</strong> looks at index #${step} of the permutation table, finding value <strong>${sourceIdx}</strong>. It copies bit value (<strong>${sourceBit}</strong>) from Input Grid Cell <strong>#${sourceIdx}</strong>.`;
}

function desPermNext() {
    let outputSize = desPermVisualizerState.outputSize || 64;
    if (desPermVisualizerState.currentStep < outputSize) {
        desPermVisualizerState.currentStep++;
        drawInteractivePermutation();
    } else {
        desPermStopPlay();
    }
}

function desPermPrev() {
    if (desPermVisualizerState.currentStep > 0) {
        desPermVisualizerState.currentStep--;
        drawInteractivePermutation();
    }
}

function desPermReset() {
    desPermStopPlay();
    desPermVisualizerState.currentStep = 0;
    drawInteractivePermutation();
}

function desPermTogglePlay() {
    if (desPermVisualizerState.isPlaying) {
        desPermStopPlay();
    } else {
        desPermStartPlay();
    }
}

function desPermStartPlay() {
    let outputSize = desPermVisualizerState.outputSize || 64;
    desPermVisualizerState.isPlaying = true;
    drawInteractivePermutation();
    desPermVisualizerState.timerId = setInterval(() => {
        let currentOutputSize = desPermVisualizerState.outputSize || 64;
        if (desPermVisualizerState.currentStep < currentOutputSize) {
            desPermNext();
        } else {
            desPermStopPlay();
        }
    }, 350);
}

function desPermStopPlay() {
    desPermVisualizerState.isPlaying = false;
    if (desPermVisualizerState.timerId) {
        clearInterval(desPermVisualizerState.timerId);
        desPermVisualizerState.timerId = null;
    }
    drawInteractivePermutation();
}

function showIpExplanation() {
    let title = "Initial Permutation (IP) Interactive Visualizer";
    let fallbackInput = "0110000101110110011010010110111001100001011100110110100000110001";
    desPermVisualizerState = {
        inputBin: desSimState.inputBin || fallbackInput,
        table: IP,
        tableName: "IP Table",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        inputSize: 64,
        outputSize: 64,
        inputCols: 8,
        outputCols: 8
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractivePermutation();
    }
}

function showIpInvExplanation() {
    let title = "IP Inverse (IP-Inv) Interactive Visualizer";
    let finalL = desSimState.result ? desSimState.result.roundsData[15].L : "00000000000000000000000000000000";
    let finalR = desSimState.result ? desSimState.result.roundsData[15].R : "00000000000000000000000000000000";
    let swappedCombined = finalR + finalL;
    
    desPermVisualizerState = {
        inputBin: swappedCombined,
        table: IP_INV,
        tableName: "IP-Inv Table",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        inputSize: 64,
        outputSize: 64,
        inputCols: 8,
        outputCols: 8
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractivePermutation();
    }
}

function showEBoxExplanation() {
    let title = "E-Box Expansion (32 to 48 bit) Interactive Visualizer";
    let fallbackInput = "11110000101001011100001110100101";
    
    let inputBin = fallbackInput;
    if (desSimState.result && desSimState.currentRound >= 1 && desSimState.currentRound <= 16) {
        let rd = desSimState.result.roundsData[desSimState.currentRound - 1];
        inputBin = rd.R_prev;
    }
    
    desPermVisualizerState = {
        inputBin: inputBin,
        table: E_BOX,
        tableName: "E-Box Expansion Table",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        inputSize: 32,
        outputSize: 48,
        inputCols: 8,
        outputCols: 6
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractivePermutation();
    }
}

let desXorVisualizerState = {
    input1Bin: "",
    input2Bin: "",
    outputBin: "",
    input1Name: "",
    input2Name: "",
    outputName: "",
    currentStep: 0,
    timerId: null,
    isPlaying: false,
    size: 48,
    cols: 6
};

function drawInteractiveXor() {
    let container = document.getElementById("desModalBody");
    if (!container) return;
    
    let step = desXorVisualizerState.currentStep;
    let input1Bin = desXorVisualizerState.input1Bin;
    let input2Bin = desXorVisualizerState.input2Bin;
    let outputBin = desXorVisualizerState.outputBin;
    let size = desXorVisualizerState.size || 48;
    let cols = desXorVisualizerState.cols || 6;
    
    let html = `
        <div class="des-modal-visualizer-container">
            <p style="font-size: 0.85rem; margin-bottom: 0.5rem; color: #475569; text-align: center;">
                Click <strong>Next</strong> or <strong>Auto-Play</strong> to compute the XOR bit-by-bit.
            </p>
            
            <div class="des-modal-grids-row">
                <!-- Input 1 Grid -->
                <div class="des-modal-grid-box">
                    <h5>1. ${desXorVisualizerState.input1Name}</h5>
                    <div class="des-interactive-grid" style="grid-template-columns: repeat(${cols}, 1.6rem);">
    `;
    
    for (let i = 1; i <= size; i++) {
        let bit = input1Bin[i - 1] || "0";
        let isActive = (i === step);
        html += `
            <div class="des-interactive-grid-cell ${isActive ? 'active-input-highlight' : ''}" title="Position ${i}">
                <span class="cell-index">${i}</span>
                <span class="cell-value">${bit}</span>
            </div>
        `;
    }
    html += `
                    </div>
                </div>
                
                <!-- Input 2 Grid -->
                <div class="des-modal-grid-box">
                    <h5>2. ${desXorVisualizerState.input2Name}</h5>
                    <div class="des-interactive-grid" style="grid-template-columns: repeat(${cols}, 1.6rem);">
    `;
    
    for (let i = 1; i <= size; i++) {
        let bit = input2Bin[i - 1] || "0";
        let isActive = (i === step);
        html += `
            <div class="des-interactive-grid-cell ${isActive ? 'active-table-highlight' : ''}" title="Position ${i}">
                <span class="cell-index">${i}</span>
                <span class="cell-value">${bit}</span>
            </div>
        `;
    }
    html += `
                    </div>
                </div>
                
                <!-- Output Grid -->
                <div class="des-modal-grid-box">
                    <h5>3. ${desXorVisualizerState.outputName}</h5>
                    <div class="des-interactive-grid" style="grid-template-columns: repeat(${cols}, 1.6rem);">
    `;
    
    for (let i = 1; i <= size; i++) {
        let isFilled = (i < step);
        let isActive = (i === step);
        let bitVal = isFilled ? (outputBin[i - 1] || "0") : (isActive ? "" : "-");
        
        let cellClass = "";
        if (isActive) {
            cellClass = "active-output-highlight";
        } else if (isFilled) {
            cellClass = "filled-output";
        }
        
        html += `
            <div class="des-interactive-grid-cell ${cellClass}" title="Position ${i}">
                <span class="cell-index">${i}</span>
                <span class="cell-value">${bitVal}</span>
            </div>
        `;
    }
    html += `
                    </div>
                </div>
            </div>
            
            <!-- Explanation Panel -->
            <div class="des-visualizer-explanation">
                <span>${getXorStepExplanationText(step)}</span>
            </div>
            
            <!-- Controls -->
            <div class="des-visualizer-controls">
                <button class="des-visualizer-btn" onclick="desXorPrev()" ${step === 0 ? 'disabled' : ''}>Prev</button>
                <button class="des-visualizer-btn primary" onclick="desXorNext()" ${step === size ? 'disabled' : ''}>Next</button>
                <button class="des-visualizer-btn" onclick="desXorTogglePlay()">
                    ${desXorVisualizerState.isPlaying ? '<i class="fa fa-pause"></i> Pause' : '<i class="fa fa-play"></i> Auto-Play'}
                </button>
                <button class="des-visualizer-btn" onclick="desXorReset()">Reset</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function getXorStepExplanationText(step) {
    let size = desXorVisualizerState.size || 48;
    if (step === 0) {
        return "Click <strong>Next</strong> or <strong>Auto-Play</strong> to start the XOR calculation.";
    }
    if (step > size) {
        return `XOR calculation complete! All ${size} bits have been processed.`;
    }
    
    let bit1 = desXorVisualizerState.input1Bin[step - 1] || "0";
    let bit2 = desXorVisualizerState.input2Bin[step - 1] || "0";
    let bitOut = desXorVisualizerState.outputBin[step - 1] || "0";
    
    return `XOR Cell <strong>#${step}</strong>: Bit <strong>${bit1}</strong> from ${desXorVisualizerState.input1Name} &oplus; Bit <strong>${bit2}</strong> from ${desXorVisualizerState.input2Name} = <strong>${bitOut}</strong>.`;
}

function desXorNext() {
    let size = desXorVisualizerState.size || 48;
    if (desXorVisualizerState.currentStep < size) {
        desXorVisualizerState.currentStep++;
        drawInteractiveXor();
    } else {
        desXorStopPlay();
    }
}

function desXorPrev() {
    if (desXorVisualizerState.currentStep > 0) {
        desXorVisualizerState.currentStep--;
        drawInteractiveXor();
    }
}

function desXorReset() {
    desXorStopPlay();
    desXorVisualizerState.currentStep = 0;
    drawInteractiveXor();
}

function desXorTogglePlay() {
    if (desXorVisualizerState.isPlaying) {
        desXorStopPlay();
    } else {
        desXorStartPlay();
    }
}

function desXorStartPlay() {
    let size = desXorVisualizerState.size || 48;
    desXorVisualizerState.isPlaying = true;
    drawInteractiveXor();
    desXorVisualizerState.timerId = setInterval(() => {
        let currentSize = desXorVisualizerState.size || 48;
        if (desXorVisualizerState.currentStep < currentSize) {
            desXorNext();
        } else {
            desXorStopPlay();
        }
    }, 350);
}

function desXorStopPlay() {
    desXorVisualizerState.isPlaying = false;
    if (desXorVisualizerState.timerId) {
        clearInterval(desXorVisualizerState.timerId);
        desXorVisualizerState.timerId = null;
    }
    drawInteractiveXor();
}

function showXorExplanation() {
    let title = "Subkey XOR (48-bit) Interactive Visualizer";
    
    let fallbackInput1 = "111100001111000011110000111100001111000011110000";
    let fallbackInput2 = "101010101010101010101010101010101010101010101010";
    let fallbackOutput = xorBinStrings(fallbackInput1, fallbackInput2);
    
    let input1Bin = fallbackInput1;
    let input2Bin = fallbackInput2;
    let outputBin = fallbackOutput;
    
    if (desSimState.result && desSimState.currentRound >= 1 && desSimState.currentRound <= 16) {
        let rd = desSimState.result.roundsData[desSimState.currentRound - 1];
        input1Bin = rd.expandedR;
        input2Bin = rd.subkey;
        outputBin = rd.xored;
    }
    
    desXorVisualizerState = {
        input1Bin: input1Bin,
        input2Bin: input2Bin,
        outputBin: outputBin,
        input1Name: "Expanded R (48-bit)",
        input2Name: "Subkey K (48-bit)",
        outputName: "XOR Output (48-bit)",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        size: 48,
        cols: 6
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractiveXor();
    }
}

function showXorLPrevExplanation() {
    let title = "Feistel XOR & Swap (32-bit) Interactive Visualizer";
    
    let fallbackInput1 = "11110000111100001111000011110000";
    let fallbackInput2 = "10101010101010101010101010101010";
    let fallbackOutput = xorBinStrings(fallbackInput1, fallbackInput2);
    
    let input1Bin = fallbackInput1;
    let input2Bin = fallbackInput2;
    let outputBin = fallbackOutput;
    
    if (desSimState.result && desSimState.currentRound >= 1 && desSimState.currentRound <= 16) {
        let rd = desSimState.result.roundsData[desSimState.currentRound - 1];
        input1Bin = rd.L_prev;
        input2Bin = rd.pboxResult;
        outputBin = rd.R;
    }
    
    desXorVisualizerState = {
        input1Bin: input1Bin,
        input2Bin: input2Bin,
        outputBin: outputBin,
        input1Name: "L half (32-bit)",
        input2Name: "P-Box Output (32-bit)",
        outputName: "New R half (32-bit)",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        size: 32,
        cols: 8
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractiveXor();
    }
}

let desSboxVisualizerState = {
    inputBin: "",
    sboxesDetails: [],
    currentStep: 0,
    timerId: null,
    isPlaying: false
};

function drawInteractiveSbox() {
    let container = document.getElementById("desModalBody");
    if (!container) return;
    
    let step = desSboxVisualizerState.currentStep;
    let inputBin = desSboxVisualizerState.inputBin;
    let details = desSboxVisualizerState.sboxesDetails;
    
    // Build 48-bit input blocks HTML (8 groups of 6)
    let inputBlocksHTML = `<div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 0.5rem; width: 100%;">`;
    for (let s = 1; s <= 8; s++) {
        let isActive = (step >= 1 && step <= 8 && s === step);
        inputBlocksHTML += `
            <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px; background: #f8fafc; transition: all 0.2s ease; ${isActive ? 'border-color: #6d28d9; background: #faf5ff; box-shadow: 0 0 6px rgba(109,40,217,0.15); transform: scale(1.03);' : ''}">
                <span style="display: block; text-align: center; font-size: 0.6rem; color: #64748b; font-weight: bold; margin-bottom: 2px;">S${s}</span>
                <div style="display: flex; gap: 2px;">
        `;
        for (let b = 0; b < 6; b++) {
            let bitIdx = (s - 1) * 6 + b;
            let bit = inputBin[bitIdx] || "0";
            let isRowBit = isActive && (b === 0 || b === 5);
            let isColBit = isActive && (b >= 1 && b <= 4);
            
            let cellBg = "white";
            let cellBorder = "#e2e8f0";
            let cellColor = "#334155";
            if (isRowBit) {
                cellBg = "#fee2e2";
                cellBorder = "#ef4444";
                cellColor = "#991b1b";
            } else if (isColBit) {
                cellBg = "#dbeafe";
                cellBorder = "#3b82f6";
                cellColor = "#1e40af";
            }
            
            inputBlocksHTML += `
                <div style="width: 1.25rem; height: 1.25rem; display: flex; justify-content: center; align-items: center; font-size: 0.72rem; font-weight: 700; background: ${cellBg}; border-radius: 2px; border: 1px solid ${cellBorder}; color: ${cellColor};" title="Bit ${bitIdx + 1}">
                    ${bit}
                </div>
            `;
        }
        inputBlocksHTML += `
                </div>
            </div>
        `;
    }
    inputBlocksHTML += `</div>`;
    
    // Build 32-bit output blocks HTML (8 groups of 4)
    let outputBlocksHTML = `<div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 0.5rem; width: 100%;">`;
    for (let s = 1; s <= 8; s++) {
        let isFilled = (s < step) || (step === 9);
        let isActive = (step >= 1 && step <= 8 && s === step);
        let det = details[s - 1];
        
        outputBlocksHTML += `
            <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px; background: #f8fafc; transition: all 0.2s ease; ${isActive ? 'border-color: #3b82f6; background: #eff6ff; box-shadow: 0 0 6px rgba(59,130,246,0.15); transform: scale(1.03);' : ''}">
                <span style="display: block; text-align: center; font-size: 0.6rem; color: #64748b; font-weight: bold; margin-bottom: 2px;">Out ${s}</span>
                <div style="display: flex; gap: 2px;">
        `;
        
        for (let b = 0; b < 4; b++) {
            let bitIdx = (s - 1) * 4 + b;
            let bitVal = isFilled ? det.output[b] : (isActive ? "" : "-");
            
            let cellBg = "white";
            let cellBorder = "#e2e8f0";
            let cellColor = "#94a3b8";
            if (isActive) {
                cellBg = "#dbeafe";
                cellBorder = "#3b82f6";
                cellColor = "#1d4ed8";
            } else if (isFilled) {
                cellBg = "#f1f5f9";
                cellBorder = "#cbd5e1";
                cellColor = "#334155";
            }
            
            outputBlocksHTML += `
                <div style="width: 1.25rem; height: 1.25rem; display: flex; justify-content: center; align-items: center; font-size: 0.72rem; font-weight: 700; background: ${cellBg}; border-radius: 2px; border: 1px solid ${cellBorder}; color: ${cellColor};" title="Bit ${bitIdx + 1}">
                    ${bitVal}
                </div>
            `;
        }
        outputBlocksHTML += `
                </div>
            </div>
        `;
    }
    outputBlocksHTML += `</div>`;
    
    // Build Middle Lookup HTML
    let lookupHTML = "";
    if (step === 0) {
        lookupHTML = `
            <div style="text-align: center; padding: 1.5rem; font-size: 0.95rem; color: #475569; width: 100%;">
                <strong>Substitution Box Lookup Details</strong><br>
                Click <strong>Next</strong> or <strong>Auto-Play</strong> to step through each S-Box (S1 to S8) lookup process.
            </div>
        `;
    } else if (step >= 1 && step <= 8) {
        let det = details[step - 1];
        let sBoxIndex = det.sbox - 1;
        let sboxTable = S_BOX[sBoxIndex];
        
        let rowLabel = det.input[0] + det.input[5];
        let colLabel = det.input.substring(1, 5);
        
        // Build table html
        let tableHTML = `<table class="des-sbox-table-view" style="margin: 0 auto; width: 100%; border-collapse: collapse; font-size: 0.75rem;"><thead><tr><th style="padding: 2px;">R\\C</th>`;
        for (let col = 0; col < 16; col++) {
            tableHTML += `<th style="padding: 2px; text-align: center;">${col.toString(16).toUpperCase()}</th>`;
        }
        tableHTML += `</tr></thead><tbody>`;
        
        for (let r = 0; r < 4; r++) {
            let isRowMatch = (r === det.row);
            tableHTML += `<tr class="${isRowMatch ? 'highlight-sbox-row' : ''}">`;
            tableHTML += `<th style="background-color: #f1f5f9; padding: 2px; font-weight: bold; text-align: center;">${r}</th>`;
            for (let c = 0; c < 16; c++) {
                let val = sboxTable[r][c];
                let isCellMatch = (isRowMatch && c === det.col);
                let colCls = (c === det.col) ? 'highlight-sbox-col' : '';
                
                let cellBgStyle = "";
                let cellColorStyle = "";
                if (isCellMatch) {
                    cellBgStyle = "background-color: #22c55e !important; color: white !important; font-weight: bold; border-radius: 3px;";
                } else if (isRowMatch) {
                    cellBgStyle = "background-color: #fee2e2;";
                } else if (c === det.col) {
                    cellBgStyle = "background-color: #dbeafe;";
                }
                
                tableHTML += `<td class="${isCellMatch ? 'highlight-sbox-cell' : colCls}" style="padding: 2px; text-align: center; ${cellBgStyle} ${cellColorStyle}">${val}</td>`;
            }
            tableHTML += `</tr>`;
        }
        tableHTML += `</tbody></table>`;
        
        lookupHTML = `
            <div style="display: flex; gap: 20px; align-items: center; justify-content: center; flex-wrap: wrap; width: 100%;">
                <!-- Left Details -->
                <div style="flex: 1; min-width: 18rem; background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 0.5rem 0; color: #3b0764; font-size: 1.1rem; display: flex; align-items: center; gap: 6px;">
                        S-Box ${det.sbox} Substitution
                        <span style="font-size: 0.7rem; background: #6d28d9; color: white; padding: 2px 6px; border-radius: 9999px; font-weight: bold; text-transform: uppercase;">Active</span>
                    </h4>
                    <p style="margin: 0 0 0.6rem 0; font-size: 0.82rem; color: #475569; line-height: 1.4;">
                        Select row and column indexes from the 6-bit input block:
                    </p>
                    <ul style="margin: 0; padding-left: 1.1rem; font-size: 0.8rem; color: #334155; display: flex; flex-direction: column; gap: 6px;">
                        <li><strong>6-bit Input Chunk:</strong> <code style="font-size: 0.85rem; font-weight: 700; color: #1e1b4b; background: #f1f5f9; padding: 2px 4px; border-radius: 4px; border: 1px solid #cbd5e1;">${det.input[0]}<span style="color: #6d28d9;">${det.input.substring(1,5)}</span>${det.input[5]}</code></li>
                        <li><strong>Row Bits (1st & 6th):</strong> <code style="font-size: 0.85rem; font-weight: 700; color: #b91c1c; background: #fef2f2; padding: 1px 3px; border-radius: 3px; border: 1px solid #fee2e2;">${det.input[0]}${det.input[5]}</code> &rarr; Row <strong>${det.row}</strong> (decimal)</li>
                        <li><strong>Column Bits (2nd to 5th):</strong> <code style="font-size: 0.85rem; font-weight: 700; color: #1d4ed8; background: #eff6ff; padding: 1px 3px; border-radius: 3px; border: 1px solid #dbeafe;">${det.input.substring(1,5)}</code> &rarr; Column <strong>${det.col}</strong> (decimal)</li>
                        <li><strong>Retrieved decimal:</strong> Table[Row ${det.row}][Col ${det.col}] = <strong style="color: #16a34a; font-size: 0.9rem;">${det.val}</strong></li>
                        <li><strong>4-bit Output value:</strong> <code style="font-size: 0.85rem; font-weight: 700; color: #16a34a; background: #f0fdf4; padding: 2px 4px; border-radius: 4px; border: 1px solid #bbf7d0;">${det.output}</code></li>
                    </ul>
                </div>
                
                <!-- Right Table View -->
                <div style="flex: 1.2; min-width: 22rem; max-width: 100%; overflow-x: auto; background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <h5 style="margin: 0 0 0.4rem 0; color: #3b0764; font-size: 0.8rem; font-weight: bold; text-align: center;">S-Box ${det.sbox} Lookup Grid</h5>
                    ${tableHTML}
                </div>
            </div>
        `;
    } else if (step === 9) {
        lookupHTML = `
            <div style="text-align: center; padding: 1.5rem; font-size: 0.95rem; color: #15803d; width: 100%; font-weight: 600; background: #f0fdf4; border: 1px dashed #bbf7d0; border-radius: 8px;">
                <i class="fa fa-check-circle fa-2x" style="vertical-align: middle; margin-right: 6px; color: #22c55e;"></i>
                Substitution Complete! All 8 S-Boxes have been processed. 48-bit input register is substituted into a 32-bit output.
            </div>
        `;
    }
    
    let html = `
        <div class="des-modal-visualizer-container">
            <p style="font-size: 0.85rem; margin-bottom: 0.5rem; color: #475569; text-align: center;">
                S-Box Substitution: The 48-bit register is split into 8 chunks. Each S-Box (S1 to S8) maps 6 bits to 4 bits.
            </p>
            
            <!-- 48-bit input grid -->
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                <h5 style="margin: 0 0 0.3rem 0; font-size: 0.82rem; color: #3b0764; font-weight: bold;">48-bit XOR Output (Input Blocks)</h5>
                ${inputBlocksHTML}
            </div>
            
            <!-- Middle lookup area -->
            <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 12px; padding: 1rem; width: 100%; box-sizing: border-box; min-height: 12rem; display: flex; align-items: center; justify-content: center;">
                ${lookupHTML}
            </div>
            
            <!-- 32-bit output grid -->
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                <h5 style="margin: 0 0 0.3rem 0; font-size: 0.82rem; color: #3b0764; font-weight: bold;">32-bit S-Box Output (S-Box Results)</h5>
                ${outputBlocksHTML}
            </div>
            
            <!-- Controls -->
            <div class="des-visualizer-controls" style="margin-top: 0.5rem;">
                <button class="des-visualizer-btn" onclick="desSboxPrev()" ${step === 0 ? 'disabled' : ''}>Prev</button>
                <button class="des-visualizer-btn primary" onclick="desSboxNext()" ${step === 9 ? 'disabled' : ''}>Next</button>
                <button class="des-visualizer-btn" onclick="desSboxTogglePlay()">
                    ${desSboxVisualizerState.isPlaying ? '<i class="fa fa-pause"></i> Pause' : '<i class="fa fa-play"></i> Auto-Play'}
                </button>
                <button class="des-visualizer-btn" onclick="desSboxReset()">Reset</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function desSboxNext() {
    if (desSboxVisualizerState.currentStep < 9) {
        desSboxVisualizerState.currentStep++;
        drawInteractiveSbox();
    } else {
        desSboxStopPlay();
    }
}

function desSboxPrev() {
    if (desSboxVisualizerState.currentStep > 0) {
        desSboxVisualizerState.currentStep--;
        drawInteractiveSbox();
    }
}

function desSboxReset() {
    desSboxStopPlay();
    desSboxVisualizerState.currentStep = 0;
    drawInteractiveSbox();
}

function desSboxTogglePlay() {
    if (desSboxVisualizerState.isPlaying) {
        desSboxStopPlay();
    } else {
        desSboxStartPlay();
    }
}

function desSboxStartPlay() {
    desSboxVisualizerState.isPlaying = true;
    drawInteractiveSbox();
    desSboxVisualizerState.timerId = setInterval(() => {
        if (desSboxVisualizerState.currentStep < 9) {
            desSboxNext();
        } else {
            desSboxStopPlay();
        }
    }, 1500);
}

function desSboxStopPlay() {
    desSboxVisualizerState.isPlaying = false;
    if (desSboxVisualizerState.timerId) {
        clearInterval(desSboxVisualizerState.timerId);
        desSboxVisualizerState.timerId = null;
    }
    drawInteractiveSbox();
}

function showSboxExplanation() {
    let title = "S-Box Substitution (48 to 32 bit) Interactive Visualizer";
    
    let fallbackInput = "111100001010010111000011101001011100001110100101";
    let fallbackDetails = [];
    for (let i = 0; i < 8; i++) {
        let block = fallbackInput.substring(i * 6, i * 6 + 6);
        let row = parseInt(block[0] + block[5], 2);
        let col = parseInt(block.substring(1, 5), 2);
        let val = S_BOX[i][row][col];
        let valBin = val.toString(2).padStart(4, '0');
        fallbackDetails.push({
            sbox: i + 1,
            input: block,
            row: row,
            col: col,
            val: val,
            output: valBin
        });
    }
    
    let inputBin = fallbackInput;
    let sboxesDetails = fallbackDetails;
    
    if (desSimState.result && desSimState.currentRound >= 1 && desSimState.currentRound <= 16) {
        let rd = desSimState.result.roundsData[desSimState.currentRound - 1];
        inputBin = rd.xored;
        sboxesDetails = rd.sboxesDetails;
    }
    
    desSboxVisualizerState = {
        inputBin: inputBin,
        sboxesDetails: sboxesDetails,
        currentStep: 0,
        timerId: null,
        isPlaying: false
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractiveSbox();
    }
}

function showPBoxExplanation() {
    let title = "P-Box Permutation (32-bit) Interactive Visualizer";
    let fallbackInput = "11110000101001011100001110100101";
    
    let inputBin = fallbackInput;
    if (desSimState.result && desSimState.currentRound >= 1 && desSimState.currentRound <= 16) {
        let rd = desSimState.result.roundsData[desSimState.currentRound - 1];
        inputBin = rd.sboxResult;
    }
    
    desPermVisualizerState = {
        inputBin: inputBin,
        table: P_BOX,
        tableName: "P-Box Table",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        inputSize: 32,
        outputSize: 32,
        inputCols: 8,
        outputCols: 8
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractivePermutation();
    }
}

function generateKeyScheduleTableHTML() {
    let keyBin = desSimState.keyBin || "0110000101110110011010010110111001100001011100110110100000110001";
    let pc1Key = permute(keyBin, PC_1);
    let C = pc1Key.substring(0, 28);
    let D = pc1Key.substring(28, 56);
    
    let html = `
        <table class="des-bit-table" style="font-size: 0.75rem; text-align: left; width: 100%; border-collapse: collapse; margin-top: 1rem; box-sizing: border-box;">
            <thead>
                <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                    <th style="padding: 6px;">Round</th>
                    <th style="padding: 6px;">Shift</th>
                    <th style="padding: 6px;">C<sub>i</sub> (28-bit)</th>
                    <th style="padding: 6px;">D<sub>i</sub> (28-bit)</th>
                    <th style="padding: 6px;">Subkey K<sub>i</sub> (48-bit Hex)</th>
                    <th style="padding: 6px; text-align: center;">Action</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    for (let r = 1; r <= 16; r++) {
        let shift = SHIFT_SCHEDULE[r - 1];
        C = leftCircularShift(C, shift);
        D = leftCircularShift(D, shift);
        let combined = C + D;
        let subkey = permute(combined, PC_2);
        let subkeyHex = binStringToHex(subkey);
        
        html += `
            <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 6px; font-weight: bold; color: #3b0764;">Round ${r}</td>
                <td style="padding: 6px;">&larr; ${shift} bit(s)</td>
                <td style="padding: 6px; font-family: monospace; font-size: 0.68rem; letter-spacing: -0.5px;">${C}</td>
                <td style="padding: 6px; font-family: monospace; font-size: 0.68rem; letter-spacing: -0.5px;">${D}</td>
                <td style="padding: 6px; font-family: monospace; font-weight: bold; color: #16a34a; font-size: 0.8rem;">${subkeyHex}</td>
                <td style="padding: 6px; text-align: center;">
                    <button class="des-visualizer-btn" style="padding: 2px 6px; font-size: 0.68rem;" onclick="showPc2Explanation(${r})">
                        <i class="fa fa-eye"></i> PC-2
                    </button>
                </td>
            </tr>
        `;
    }
    html += `</tbody></table>`;
    return html;
}

function showPc1Explanation() {
    let title = "PC-1 Permuted Choice (64 to 56 bit) Interactive Visualizer";
    let fallbackInput = "0110000101110110011010010110111001100001011100110110100000110001";
    
    let inputBin = desSimState.keyBin || fallbackInput;
    
    desPermVisualizerState = {
        inputBin: inputBin,
        table: PC_1,
        tableName: "PC-1 Table",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        inputSize: 64,
        outputSize: 56,
        inputCols: 8,
        outputCols: 8
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractivePermutation();
    }
}

function showPc2Explanation(roundIdx) {
    let title = `PC-2 Permuted Choice (56 to 48 bit) - Round ${roundIdx}`;
    
    let keyBin = desSimState.keyBin || "0110000101110110011010010110111001100001011100110110100000110001";
    let pc1Key = permute(keyBin, PC_1);
    let C = pc1Key.substring(0, 28);
    let D = pc1Key.substring(28, 56);
    
    let C_curr = C;
    let D_curr = D;
    for (let r = 0; r < roundIdx; r++) {
        C_curr = leftCircularShift(C_curr, SHIFT_SCHEDULE[r]);
        D_curr = leftCircularShift(D_curr, SHIFT_SCHEDULE[r]);
    }
    
    let inputBin = C_curr + D_curr;
    
    desPermVisualizerState = {
        inputBin: inputBin,
        table: PC_2,
        tableName: "PC-2 Table",
        currentStep: 0,
        timerId: null,
        isPlaying: false,
        inputSize: 56,
        outputSize: 48,
        inputCols: 8,
        outputCols: 6
    };
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    if (backdrop && titleEl) {
        titleEl.innerText = title;
        backdrop.style.display = "flex";
        drawInteractivePermutation();
    }
}

// Dynamic Selection Bit Counter Tooltip
document.addEventListener('selectionchange', () => {
    let selection = window.getSelection();
    if (!selection) return;
    let selectedText = selection.toString().trim();
    if (!selectedText) {
        hideSelectionTooltip();
        return;
    }
    
    let selectedClean = selectedText.replace(/\s+/g, '');
    if (/^[01]+$/.test(selectedClean)) {
        let count = selectedClean.length;
        showSelectionTooltip(selection, count);
    } else {
        hideSelectionTooltip();
    }
});

function showSelectionTooltip(selection, count) {
    if (selection.rangeCount === 0) return;
    let range = selection.getRangeAt(0);
    let rect = range.getBoundingClientRect();
    
    // Check if selection rect is valid
    if (rect.width === 0 || rect.height === 0) {
        hideSelectionTooltip();
        return;
    }
    
    let tooltip = document.getElementById("desSelectionTooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "desSelectionTooltip";
        tooltip.style.position = "fixed";
        tooltip.style.background = "#1e1b4b";
        tooltip.style.color = "#f3e8ff";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "6px";
        tooltip.style.fontSize = "0.75rem";
        tooltip.style.fontWeight = "bold";
        tooltip.style.pointerEvents = "none";
        tooltip.style.zIndex = "9999";
        tooltip.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        tooltip.style.border = "1px solid #c084fc";
        tooltip.style.transition = "opacity 0.1s ease";
        document.body.appendChild(tooltip);
    }
    
    tooltip.innerText = `${count} bit${count > 1 ? 's' : ''} selected`;
    tooltip.style.display = "block";
    tooltip.style.opacity = "1";
    
    // Position above selection rect
    let left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;
    let top = rect.top - tooltip.offsetHeight - 8;
    
    // Boundary checks for screen edges
    if (left < 10) left = 10;
    if (left + tooltip.offsetWidth > window.innerWidth - 10) {
        left = window.innerWidth - tooltip.offsetWidth - 10;
    }
    if (top < 10) {
        top = rect.bottom + 8; // display below selection if it overflows top of screen
    }
    
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
}

function hideSelectionTooltip() {
    let tooltip = document.getElementById("desSelectionTooltip");
    if (tooltip) {
        tooltip.style.opacity = "0";
        tooltip.style.display = "none";
    }
}

function showInputTextExplanation() {
    let title = desSimState.isEncrypt ? "Plaintext Character to Binary Conversion" : "Ciphertext Hex to Binary Conversion";
    let isEncrypt = desSimState.isEncrypt;
    let text = desSimState.origInputText || (isEncrypt ? "avinash1" : "01a2b3c4d5e6f788");
    
    let html = `
        <div style="font-size: 0.88rem; color: #475569; margin-bottom: 1.2rem; line-height: 1.5;">
            ${isEncrypt ? 
                `Each of the 8 characters of the plaintext string is converted to its 8-bit ASCII binary representation to form the combined 64-bit input block.` : 
                `Each of the 16 Hex characters of the ciphertext string is converted to its 4-bit binary representation to form the combined 64-bit input block.`
            }
        </div>
        <div style="overflow-x: auto; background: white; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 1.2rem;">
            <table class="des-bit-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.8rem;">
                <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                        <th style="padding: 8px;">Index</th>
                        <th style="padding: 8px;">${isEncrypt ? 'Character' : 'Hex Char'}</th>
                        <th style="padding: 8px;">${isEncrypt ? 'ASCII Decimal' : 'Decimal Value'}</th>
                        <th style="padding: 8px;">${isEncrypt ? 'ASCII Hex' : 'Hex Value'}</th>
                        <th style="padding: 8px; font-family: monospace;">Binary Output</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    let combinedBin = "";
    if (isEncrypt) {
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            let dec = char.charCodeAt(0);
            let hex = dec.toString(16).toUpperCase().padStart(2, '0');
            let bin = dec.toString(2).padStart(8, '0');
            combinedBin += bin;
            
            html += `
                <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 8px; font-weight: bold; color: #64748b;">#${i + 1}</td>
                    <td style="padding: 8px; font-weight: bold; color: #6d28d9; font-size: 0.95rem;">'${char}'</td>
                    <td style="padding: 8px; color: #1e293b;">${dec}</td>
                    <td style="padding: 8px; color: #1e293b; font-family: monospace;">0x${hex}</td>
                    <td style="padding: 8px; font-family: monospace; font-weight: bold; color: #16a34a; font-size: 0.9rem;">${bin}</td>
                </tr>
            `;
        }
    } else {
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            let dec = parseInt(char, 16);
            if (isNaN(dec)) dec = 0;
            let hex = dec.toString(16).toUpperCase();
            let bin = dec.toString(2).padStart(4, '0');
            combinedBin += bin;
            
            html += `
                <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 8px; font-weight: bold; color: #64748b;">#${i + 1}</td>
                    <td style="padding: 8px; font-weight: bold; color: #6d28d9; font-size: 0.95rem;">'${char}'</td>
                    <td style="padding: 8px; color: #1e293b;">${dec}</td>
                    <td style="padding: 8px; color: #1e293b; font-family: monospace;">0x${hex}</td>
                    <td style="padding: 8px; font-family: monospace; font-weight: bold; color: #16a34a; font-size: 0.9rem;">${bin}</td>
                </tr>
            `;
        }
    }
    
    html += `
                </tbody>
            </table>
        </div>
        
        <div style="margin-top: 1rem;">
            <h4 style="color: #3b0764; font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem;">Combined 64-bit Input Block:</h4>
            <p style="font-family: monospace; font-size: 0.85rem; background: #faf5ff; border: 1px solid #c084fc; border-radius: 6px; padding: 10px; word-break: break-all; color: #1e1b4b; font-weight: 600; line-height: 1.6;">
                ${formatBinString(combinedBin, isEncrypt ? 8 : 4)}
            </p>
        </div>
    `;
    
    let backdrop = document.getElementById("desModalBackdrop");
    let titleEl = document.getElementById("desModalTitle");
    let contentEl = document.getElementById("desModalBody");
    
    if (backdrop && titleEl && contentEl) {
        titleEl.innerText = title;
        contentEl.innerHTML = html;
        backdrop.style.display = "flex";
    }
}
