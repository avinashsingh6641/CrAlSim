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
    for (let i = 0; i < 8; i++) {
        let block = xored.substring(i * 6, i * 6 + 6);
        let row = parseInt(block[0] + block[5], 2);
        let col = parseInt(block.substring(1, 5), 2);
        let val = S_BOX[i][row][col];
        let valBin = val.toString(2).padStart(4, '0');
        sboxResult += valBin;
    }
    
    let pboxResult = permute(sboxResult, P_BOX);
    return pboxResult;
}

function desEncryptBlock(plainText64Bit, subkeys) {
    let ip = permute(plainText64Bit, IP);
    let L = ip.substring(0, 32);
    let R = ip.substring(32, 64);
    
    let roundsData = [];

    for (let i = 0; i < 16; i++) {
        let prevL = L;
        let prevR = R;
        let fResult = feistelFunction(prevR, subkeys[i]);
        L = prevR;
        R = xorBinStrings(prevL, fResult);
        
        roundsData.push({
            round: i + 1,
            L: L,
            R: R,
            subkey: subkeys[i],
            fResult: fResult
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
        let fResult = feistelFunction(prevR, subkeys[i]);
        L = prevR;
        R = xorBinStrings(prevL, fResult);
        
        roundsData.push({
            round: 16 - i,
            L: L,
            R: R,
            subkey: subkeys[i],
            fResult: fResult
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
    
    populateSimulator(plainBin, keyBin, subkeys, result, true);
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
    
    populateSimulator(cipherBin, keyBin, subkeys, result, false);
}

function populateSimulator(inputBin, keyBin, subkeys, result, isEncrypt) {
    let simulatorDiv = document.getElementById("desSimulatorContainer");
    if(!simulatorDiv) return;
    
    simulatorDiv.innerHTML = "";
    
    // Input Block
    let inputCard = document.createElement("div");
    inputCard.className = "desRoundValue des-theory-card";
    inputCard.innerHTML = `
        <h3 style="color: #6b21a8; font-size: 1.1rem; margin-bottom: 0.8rem;">Initial Values</h3>
        <p><strong>Input Block (64-bit):</strong> <br><span class="hex-badge green-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all;">${inputBin.match(/.{1,8}/g).join(' ')}</span></p>
        <p style="margin-top: 10px;"><strong>Key (64-bit):</strong> <br><span class="hex-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all;">${keyBin.match(/.{1,8}/g).join(' ')}</span></p>
        <p style="margin-top: 10px;"><strong>Initial Permutation (IP):</strong> <br><span class="hex-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all;">${result.ip.match(/.{1,8}/g).join(' ')}</span></p>
    `;
    simulatorDiv.appendChild(inputCard);
    
    // 16 Rounds
    for (let i = 0; i < 16; i++) {
        let rd = result.roundsData[i];
        let roundCard = document.createElement("div");
        roundCard.className = "desRoundValue des-theory-card";
        roundCard.innerHTML = `
            <h3 style="color: #3b0764; font-size: 1.1rem; margin-bottom: 0.8rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Round ${rd.round}</h3>
            <p><strong>Subkey (48-bit):</strong> <br><span class="hex-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all; background-color: #f1f5f9; color: #475569;">${rd.subkey.match(/.{1,6}/g).join(' ')}</span></p>
            <p style="margin-top: 10px;"><strong>f-Function Output (32-bit):</strong> <br><span class="hex-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all; background-color: #f3e8ff; color: #6b21a8;">${rd.fResult.match(/.{1,8}/g).join(' ')}</span></p>
            
            <div style="display: flex; gap: 10px; margin-top: 10px;">
                <div style="flex: 1;">
                    <p><strong>Left Half (32-bit):</strong> <br><span class="hex-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all;">${rd.L.match(/.{1,8}/g).join(' ')}</span></p>
                </div>
                <div style="flex: 1;">
                    <p><strong>Right Half (32-bit):</strong> <br><span class="hex-badge green-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all;">${rd.R.match(/.{1,8}/g).join(' ')}</span></p>
                </div>
            </div>
        `;
        simulatorDiv.appendChild(roundCard);
    }
    
    // Final Block
    let finalCard = document.createElement("div");
    finalCard.className = "desRoundValue des-theory-card";
    
    let finalLabel = isEncrypt ? "Ciphertext" : "Plaintext";
    let finalVal = isEncrypt ? result.cipherText : result.plainText;
    let finalStr = isEncrypt ? binStringToHex(finalVal) : binStringToText(finalVal);
    
    finalCard.innerHTML = `
        <h3 style="color: #6b21a8; font-size: 1.1rem; margin-bottom: 0.8rem;">Final Permutation (IP Inverse)</h3>
        <p><strong>Final Output (64-bit):</strong> <br><span class="hex-badge green-badge" style="font-family: monospace; display: block; margin-top: 4px; word-break: break-all;">${finalVal.match(/.{1,8}/g).join(' ')}</span></p>
        <p style="margin-top: 10px;"><strong>As ${isEncrypt ? 'Hexadecimal' : 'Text'}:</strong> <br><span class="hex-badge" style="font-family: monospace; display: block; margin-top: 4px; background-color: #dcfce7; color: #15803d; font-weight: bold; font-size: 1rem;">${finalStr}</span></p>
    `;
    simulatorDiv.appendChild(finalCard);
}

function resetDesSimulator() {
    document.getElementById("deskey").value = "";
    document.getElementById("desplaintext").value = "";
    document.getElementById("desciphertext").value = "";
    
    let simulatorDiv = document.getElementById("desSimulatorContainer");
    if(simulatorDiv) {
        simulatorDiv.innerHTML = "<p style='color: #64748b; font-style: italic;'>Run the cipher or decipher function to generate the simulation.</p>";
    }
}
