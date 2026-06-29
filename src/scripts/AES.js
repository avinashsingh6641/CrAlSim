//key expansion
const aesSBox = [
  [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118],
  [
    202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114,
    192,
  ],
  [183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21],
  [4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117],
  [9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132],
  [83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207],
  [208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168],
  [81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210],
  [205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115],
  [96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219],
  [224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121],
  [231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8],
  [186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138],
  [112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158],
  [225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223],
  [140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
];

const aesInvSBox = [
  [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251],
  [124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203],
  [84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78],
  [8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37],
  [114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146],
  [108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132],
  [144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6],
  [208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107],
  [58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115],
  [150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110],
  [71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27],
  [252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244],
  [31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95],
  [96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239],
  [160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97],
  [23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
];

const roundConstant = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
const mixColConstArr = [
  [02, 03, 01, 01],
  [01, 02, 03, 01],
  [01, 01, 02, 03],
  [03, 01, 01, 02],
];

const invMixColConstArr = [
  ["0e", "0b", "0d", "09"],
  ["09", "0e", "0b", "0d"],
  ["0d", "09", "0e", "0b"],
  ["0b", "0d", "09", "0e"],
];

const aes_G_Calculation_Arr = [];
let keyArrays = {
  rKA0: [],
  rKA1: [],
  rKA2: [],
  rKA3: [],
  rKA4: [],
  rKA5: [],
  rKA6: [],
  rKA7: [],
  rKA8: [],
  rKA9: [],
  rKA10: [],
};

const Base64 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/",
  "=",
];

function leftShift(arr) {
  let firstVal = arr[0];
  for (let i = 1; i < 4; i++) {
    aes_G_Calculation_Arr[i - 1] = arr[i];
  }
  aes_G_Calculation_Arr[3] = firstVal;
}

function sBoxByteSubstitution(row) {
  row.forEach((elem, index) => {
    if (elem.length == 1) {
      let sValue = aesSBox[0][parseInt(elem.charAt(0), 16)];
      row.splice(index, 1, sValue.toString(16));
    } else {
      let sValue =
        aesSBox[parseInt(elem.charAt(0), 16)][parseInt(elem.charAt(1), 16)];
      row.splice(index, 1, sValue.toString(16));
    }
  });
}

function subWordRoundConstant(row, rCIndex) {
  let changedVal = parseInt(row[0], 16) ^ parseInt(roundConstant[rCIndex]);
  row.splice(0, 1, changedVal.toString(16));
}

function g(count) {
  for (let i = 0; i < 4; i++) {
    aes_G_Calculation_Arr[i] = aesKeyHexArr[3][i];
  }
  leftShift(aes_G_Calculation_Arr);
  sBoxByteSubstitution(aes_G_Calculation_Arr);
  subWordRoundConstant(aes_G_Calculation_Arr, count);
}

function aesGenerateRoundKey() {
  let count = 1;
  //print(aesKeyHexArr);
  for (let k = 1; k <= 10; k++) {
    g(k - 1);
    keyArrays["rKA" + count][0] = [];
    for (let i = 0; i < 4; i++) {
      keyArrays["rKA" + count][0][i] = (
        parseInt(aesKeyHexArr[0][i], 16) ^
        parseInt(aes_G_Calculation_Arr[i], 16)
      ).toString(16);
      aesKeyHexArr[0][i] = (
        parseInt(aesKeyHexArr[0][i], 16) ^
        parseInt(aes_G_Calculation_Arr[i], 16)
      ).toString(16);
    }
    for (let i = 1; i < 4; i++) {
      keyArrays["rKA" + count][i] = [];
      for (let j = 0; j < 4; j++) {
        keyArrays["rKA" + count][i][j] = (
          parseInt(aesKeyHexArr[i][j], 16) ^
          parseInt(aesKeyHexArr[i - 1][j], 16)
        ).toString(16);
        aesKeyHexArr[i][j] = (
          parseInt(aesKeyHexArr[i][j], 16) ^
          parseInt(aesKeyHexArr[i - 1][j], 16)
        ).toString(16);
      }
    }
    count++;
  }
}

//pre round transformation
let aesPlaintext;
let aesAnimationStateArr = [];
let aesPlainHexArr = [];
let aesCiphertext;

let aesKey;
let aesKeyArr = [];
let aesKeyHexArr = [];
let transformedValueTable;
let transformedSpan;
let simulationStringDiv;
let aesSimulationString;

function setAesDocument() {
  aesPlaintext = document.getElementById("aesplaintext").value;
  aesCiphertext = document.getElementById("aesciphertext").value;
  aesKey = document.getElementById("aeskey").value;

  aesStateArray = document.getElementsByClassName("aesStateArray")[0];
  stateTable = aesStateArray.getElementsByTagName("table")[0];

  roundKeyOne = document.getElementsByClassName("firstRoundKey")[0];
  roundOneKeyTable = roundKeyOne.getElementsByTagName("table")[0];

  theRoundKey = document.getElementsByClassName("roundKey")[0];
  theRoundKeyTable = theRoundKey.getElementsByTagName("table")[0];

  roundKeyLast = document.getElementsByClassName("lastRoundKey")[0];
  roundKeyLastTable = roundKeyLast.getElementsByTagName("table")[0];

  counter = document.getElementsByClassName("counter")[0];
  ch3 = counter.getElementsByTagName("h3")[0];

  transformedValueTable = document.getElementsByClassName(
    "aesTransformedTable",
  )[0];
  transformedSpan = transformedValueTable.getElementsByTagName("span")[0];

  simulationStringDiv = document.getElementsByClassName(
    "simulationStringDiv",
  )[0];
  aesSimulationString = simulationStringDiv.getElementsByTagName("p")[0];
}
function print(arr) {
  arr.forEach((rows) => {
    console.log(rows);
  });
}
function clear() {
  for (let i = 3; i >= 0; i--) {
    for (let j = 3; j >= 0; j--) {
      aesAnimationStateArr[i].splice(j, 1);
      aesPlainHexArr[i].splice(j, 1);
    }
  }
}

function createAesKey2DArray() {
  let k = 0;
  for (let i = 0; i < 4; i++) {
    aesKeyArr[i] = [];
    aesKeyHexArr[i] = [];
    keyArrays["rKA0"][i] = [];
    for (let j = 0; j < 4; j++) {
      aesKeyArr[i][j] = aesKey.charAt(k);
      aesKeyHexArr[i][j] = aesKey.charCodeAt(k).toString(16);
      keyArrays["rKA0"][i][j] = aesKey.charCodeAt(k).toString(16);

      //let stateTd = document.createElement('td');
      //stateTr.appendChild(stateTd).innerHTML=`${aesKey.charCodeAt(k).toString(16)}`;
      k++;
    }
  }
}
function createAesPlain2DArray(str) {
  let k = 0;
  for (let i = 0; i < 4; i++) {
    aesAnimationStateArr[i] = [];
    aesPlainHexArr[i] = [];
    // const stateTr = stateTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      aesAnimationStateArr[i][j] = str.charCodeAt(k).toString(16);
      aesPlainHexArr[i][j] = str.charCodeAt(k).toString(16);
      let stateTd = document.createElement("td");
      // stateTr.appendChild(stateTd).innerHTML = `${str
      //   .charCodeAt(k)
      //   .toString(16)}`;
      k++;
    }
  }
  aesRound0To10();
  //clear();
}
function splitAesPlaintext() {
  let subStringCounter = 0;
  while (subStringCounter < aesPlaintext.length) {
    let sixteenCharText = aesPlaintext.substring(
      subStringCounter,
      +subStringCounter + +16,
    );
    if (+subStringCounter + +16 > aesPlaintext.length) {
      for (let i = 0; i < +subStringCounter + +16 - aesPlaintext.length; i++) {
        sixteenCharText += ".";
      }
    }
    subStringCounter += 16;
    //console.log(sixteenCharText);
    createAesPlain2DArray(sixteenCharText);
  }
}

function generateAesCipherText() {
  let str = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      str += String.fromCharCode(parseInt(aesPlainHexArr[i][j], 16));
    }
  }
  return str;
}

//let cipherWholeString ="";
function resetSimulationInitialConfiguration() {
  resetStateArrayPosition();

  roundOneKeyTable.classList.remove("aesKeyMoveAnimation");
  theRoundKeyTable.classList.remove("aesKeyMoveAnimation");
  roundKeyLastTable.classList.remove("aesKeyMoveAnimation");

  roundOneKeyTable.style.opacity = '1';
  theRoundKeyTable.style.opacity = '1';
  roundKeyLastTable.style.opacity = '1';

  aesRoundCounter = 1;
  aesFunctionCount = 0;
  theRoundSubCount = 1;
  aesLastRoundSubRound = 1;
  ch3.innerHTML = 0;

  let Plaintext = document.getElementById("aesplaintext");
  let Ciphertext = document.getElementById("aesciphertext");
  let Key = document.getElementById("aeskey");

  Plaintext.value = "";
  Ciphertext.value = "";
  Key.value = "";
  transformedSpan.innerHTML = initialTableHTML;

  for (let i = 0; i < 4; i++) {
    let statetr = stateTable.rows[i];
    let firstKeytr = roundOneKeyTable.rows[i];
    let roundKeytr = theRoundKeyTable.rows[i];
    let lastKeytr = roundKeyLastTable.rows[i];

    for (let j = 0; j < 4; j++) {
      statetr.deleteCell(0);
      firstKeytr.deleteCell(0);
      roundKeytr.deleteCell(0);
      lastKeytr.deleteCell(0);
    }
  }
  for (let i = 0; i <= 10; i++) {
    let Round = document.getElementsByClassName("aesRoundValue")[i];
    for (let j = 0; j < 5; j++) {
      let tablePerRound = Round.getElementsByTagName("table")[j];
      while (tablePerRound.rows[0]) {
        tablePerRound.deleteRow(0);
      }
    }
  }
  const lastRound = document.getElementsByClassName("finalOutputValue")[0];
  const LastRoundTable = lastRound.getElementsByTagName("table")[0];
  while (LastRoundTable.rows[0]) {
    LastRoundTable.deleteRow(0);
  }
  // aesAnimationReset();
}
function simulationInitialConfiguration() {
  for (let i = 0; i < 4; i++) {
    const initialRoundTr = roundOneKeyTable.getElementsByTagName("tr")[i];
    const theRoundTr = theRoundKeyTable.getElementsByTagName("tr")[i];
    const lastRoundTr = roundKeyLastTable.getElementsByTagName("tr")[i];
    const stateTr = stateTable.getElementsByTagName("tr")[i];
    interchangeRowAndColumnForKey(keyArrays["rKA0"]);
    interchangeRowAndColumnForKey(keyArrays["rKA1"]);
    interchangeRowAndColumnForKey(keyArrays["rKA10"]);
    for (let j = 0; j < 4; j++) {
      let initialRoundTd = document.createElement("td");
      let theRoundTd = document.createElement("td");
      let lastRoundTd = document.createElement("td");
      let stateTd = document.createElement("td");
      initialRoundTr.appendChild(initialRoundTd).innerHTML =
        `${keyArrays["rKA0"][i][j]}`;

      theRoundTr.appendChild(theRoundTd).innerHTML =
        `${keyArrays["rKA1"][i][j]}`;
      lastRoundTr.appendChild(lastRoundTd).innerHTML =
        `${keyArrays["rKA10"][i][j]}`;

      stateTr.appendChild(stateTd).innerHTML = `${aesAnimationStateArr[j][i]}`;
    }
    interchangeRowAndColumnForKey(keyArrays["rKA0"]);
    interchangeRowAndColumnForKey(keyArrays["rKA1"]);
    interchangeRowAndColumnForKey(keyArrays["rKA10"]);
  }
}
function aesFillTableValue(arr, round, tableNo) {
  const Round1 = document.getElementsByClassName("aesRoundValue")[round];
  // console.log(Round1);
  const Round1Table1 = Round1.getElementsByTagName("table")[tableNo];
  // console.log(Round1Table1);
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    let appendedTr = Round1Table1.appendChild(tr);
    for (let j = 0; j < 4; j++) {
      // console.log('here');
      const td = document.createElement("td");
      const tdVal = (td.innerHTML = `${arr[i][j]}`);
      appendedTr.appendChild(td);
    }
  }
}
function aesROFillTableValue(round, tableNo) {
  const Round1 = document.getElementsByClassName("aesRoundValue")[round];
  // console.log(Round1);
  const Round1Table1 = Round1.getElementsByTagName("table")[tableNo];
  // console.log(Round1Table1);
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    let appendedTr = Round1Table1.appendChild(tr);
    for (let j = 0; j < 4; j++) {
      // console.log('here');
      const td = document.createElement("td");
      const tdVal = (td.innerHTML = "xx");
      appendedTr.appendChild(td);
    }
  }
}
function aesFillTableLastValue(arr) {
  const Round1 = document.getElementsByClassName("finalOutputValue")[0];
  // console.log(Round1);
  const Round1Table1 = Round1.getElementsByTagName("table")[0];
  // console.log(Round1Table1);
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    let appendedTr = Round1Table1.appendChild(tr);
    for (let j = 0; j < 4; j++) {
      // console.log('here');
      const td = document.createElement("td");
      const tdVal = (td.innerHTML = `${arr[i][j]}`);
      appendedTr.appendChild(td);
    }
  }
}

const initialTableHTML = `
  <div class="transformed-table-title">Final Output Conversion Table</div>
  <div class="block-container">
    <table class="aes-trans-table byte-table">
      <tr><th>Hex</th></tr>
      <tr><th>Binary</th></tr>
    </table>
    
    <div class="split-indicator">
      <span>Split into 6-bit chunks</span>
      <i class="fa fa-arrow-down"></i>
    </div>
    
    <table class="aes-trans-table b64-table">
      <tr><th>6-Bit Binary</th></tr>
      <tr><th>Base64 Char</th></tr>
    </table>
  </div>
`;

function aesRound0To10() {
  interchangeRowAndColumn(aesPlainHexArr);
  aesFillTableValue(aesPlainHexArr, 0, 0);
  aesROFillTableValue(0, 1);
  aesROFillTableValue(0, 2);
  aesROFillTableValue(0, 3);
  interchangeRowAndColumnForKey(keyArrays["rKA0"]);
  aesFillTableValue(keyArrays["rKA0"], 0, 4);
  xorTextAndKey(aesPlainHexArr, keyArrays["rKA0"]);
  interchangeRowAndColumnForKey(keyArrays["rKA0"]);
  aesFillTableValue(aesPlainHexArr, 1, 0);
  for (let i = 1; i < 10; i++) {
    aesTheRounds(keyArrays["rKA" + i], i);
  }
  interchangeRowAndColumn(aesPlainHexArr);
  lastRound(keyArrays["rKA" + 10]);
  
  let str = convertStringOfBits();
  
  let base64Str = convertIntoBase64(str);
  aesCiphertext += base64Str;

  // Extract the 16 bytes in order
  let bytes = [];
  aesPlainHexArr.forEach((row) => {
    row.forEach((elem) => {
      bytes.push(elem);
    });
  });

  // Table 1 (Byte-level): Hex and Binary
  let rowHex = '<tr><th>Hex</th>';
  bytes.forEach((hex) => {
    rowHex += `<td>${hex.toUpperCase()}</td>`;
  });
  rowHex += '</tr>';

  let rowBin = '<tr><th>Binary</th>';
  bytes.forEach((hex) => {
    let bin = parseInt(hex, 16).toString(2).padStart(8, '0');
    rowBin += `<td>${bin}</td>`;
  });
  rowBin += '</tr>';

  // Table 2 (6-bit groups): split 128-bit string into chunks of 6 bits
  let chunks = [];
  let base64Chars = [];
  for (let i = 0; i < str.length; i += 6) {
    let chunk = "";
    for (let j = i; j < i + 6; j++) {
      if (j < str.length) {
        chunk += str.charAt(j);
      }
    }
    chunks.push(chunk);
    base64Chars.push(Base64[parseInt(chunk, 2)]);
  }

  let row6Bit = '<tr><th>6-Bit Binary</th>';
  chunks.forEach((chunk) => {
    row6Bit += `<td>${chunk}</td>`;
  });
  row6Bit += '</tr>';

  let rowB64 = '<tr><th>Base64 Char</th>';
  base64Chars.forEach((char) => {
    let displayChar = char;
    if (char === ' ') displayChar = '&nbsp;';
    rowB64 += `<td>${displayChar}</td>`;
  });
  rowB64 += '</tr>';

  let prevCipherLength = aesCiphertext.length - base64Str.length;
  let blockNum = Math.floor(prevCipherLength / 22) + 1;

  let htmlBlock = `
    <div class="block-container">
      <div class="block-title">Block ${blockNum}</div>
      
      <table class="aes-trans-table byte-table">
        ${rowHex}
        ${rowBin}
      </table>
      
      <div class="split-indicator">
        <span>Split into 6-bit chunks</span>
        <i class="fa fa-arrow-down"></i>
      </div>
      
      <table class="aes-trans-table b64-table">
        ${row6Bit}
        ${rowB64}
      </table>
    </div>
  `;

  if (prevCipherLength === 0) {
    transformedSpan.innerHTML = `<div class="transformed-table-title">Final Output Conversion Table</div>` + htmlBlock;
  } else {
    transformedSpan.innerHTML += htmlBlock;
  }

  attachTracingEventListeners();
}

function attachTracingEventListeners() {
  document.querySelectorAll('.aes-trans-table td').forEach(td => {
    td.removeEventListener('mouseenter', onCellMouseEnter);
    td.removeEventListener('mouseleave', onCellMouseLeave);
    td.addEventListener('mouseenter', onCellMouseEnter);
    td.addEventListener('mouseleave', onCellMouseLeave);
  });
}

function onCellMouseEnter() {
  let index = this.cellIndex;
  if (index === 0) return; // Skip header column
  let table = this.closest('table');
  table.querySelectorAll('tr').forEach(tr => {
    let cell = tr.cells[index];
    if (cell) cell.classList.add('highlight-col');
  });
}

function onCellMouseLeave() {
  let table = this.closest('table');
  if (table) {
    table.querySelectorAll('.highlight-col').forEach(cell => {
      cell.classList.remove('highlight-col');
    });
  }
}
let resetCounter = 0;
function aesEncrypt() {
  const aescipher = document.getElementById("aesciphertext");
  aescipher.value = "";
  aesCiphertext = "";
  // aesAnimationReset();
  // if(resetCounter == 1){
  //   clear();
  //   // aesAnimationReset();
  //   resetSimulationInitialConfiguration();
  // }

  setAesDocument();
  aesSimulationString.innerHTML = `${aesPlaintext}`;
  try {
    if (aesKey.length != 16) {
      throw new Error(alert("Key length should be exact 16 Character"));
    }
    if (aesPlaintext.length == 0) {
      throw new Error(alert("Please Provide Message to Encrypt"));
    }

    createAesKey2DArray();
    aesGenerateRoundKey();
    splitAesPlaintext();
    simulationInitialConfiguration();
    aescipher.value = aesCiphertext;
    resetCounter = 1;
  } catch (err) {
    console.log(err);
  }

  //console.log(aesCiphertext);
}

function xorTextAndKey(state, keyArr) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let intVal = parseInt(state[i][j], 16) ^ parseInt(keyArr[i][j], 16);
      state[i][j] = intVal.toString(16);
    }
  }
}

function interchangeRowAndColumn(state) {
  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < i; j++) {
      let temp = state[i][j];
      state[i][j] = state[j][i];
      state[j][i] = temp;
    }
  }
}
function interchangeRowAndColumnForKey(arr) {
  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
}

function shiftRow(row, count) {
  for (let i = 0; i < count; i++) {
    let temp = row[0];
    row.splice(0, 1);
    row.splice(3, 0, temp);
  }
}
function generateHexaNumber(hex1, hex2) {
  let b1arr = [];
  let b2arr = [];
  const combined = {};
  let b1 = parseInt(hex1, 16).toString(2);
  let b2 = parseInt(hex2, 16).toString(2);
  for (let i = b1.length - 1; i >= 0; i--) {
    if (b1.charAt(i) == 1) {
      b1arr.push(b1.length - 1 - i);
    }
  }
  for (let j = b2.length - 1; j >= 0; j--) {
    if (b2.charAt(j) == 1) {
      b2arr.push(b2.length - 1 - j);
    }
  }
  b1arr.forEach((elem) => {
    b2arr.forEach((b2elem) => {
      let sum = elem + b2elem;
      if (combined[sum] > 0) {
        combined[sum] = combined[sum] + 1;
      } else {
        combined[sum] = 1;
      }
    });
  });
  let binary = 0;
  let num = Object.keys(combined)[Object.keys(combined).length - 1];
  for (let i = num; i >= 0; i--) {
    if (combined[i] == undefined) {
      //continue;
      binary += "0";
    } else if (combined[i] % 2 != 0) {
      binary += "1";
    } else {
      binary += "0";
    }
  }
  return parseInt(binary, 2);
}
function mixColumns(state, row, c) {
  for (let i = 0; i < 4; i++) {
    let multipliedInt;
    let irreducable = 283; //11b;
    let xorSum = 0;
    for (let j = 0; j < 4; j++) {
      multipliedFunctionVal = generateHexaNumber(mixColConstArr[i][j], row[j]);
      if (multipliedFunctionVal <= 255) {
        xorSum = xorSum ^ multipliedFunctionVal;
      } else {
        multipliedInt = multipliedFunctionVal ^ irreducable;
        xorSum = xorSum ^ multipliedInt;
      }
    }
    state[i][c] = xorSum.toString(16);
  }
}

function aesTheRounds(keyArr, roundNumber) {
  aesPlainHexArr.forEach((rows) => {
    sBoxByteSubstitution(rows);
  });
  // print(aesPlainHexArr);
  aesFillTableValue(aesPlainHexArr, roundNumber, 1);

  // interchangeRowAndColumn(aesPlainHexArr);
  //let count = 0;
  aesPlainHexArr.forEach((row, index) => {
    shiftRow(row, index);
  });
  // print(aesPlainHexArr);
  // interchangeRowAndColumn(aesPlainHexArr);
  aesFillTableValue(aesPlainHexArr, roundNumber, 2);
  // interchangeRowAndColumn(aesPlainHexArr);
  for (let i = 0; i < 4; i++) {
    let arr = [];
    for (let j = 0; j < 4; j++) {
      arr[j] = aesPlainHexArr[j][i];
    }
    mixColumns(aesPlainHexArr, arr, i);
  }
  aesFillTableValue(aesPlainHexArr, roundNumber, 3);
  interchangeRowAndColumnForKey(keyArr);
  aesFillTableValue(keyArr, roundNumber, 4);
  xorTextAndKey(aesPlainHexArr, keyArr);
  aesFillTableValue(aesPlainHexArr, roundNumber + 1, 0);
  // interchangeRowAndColumn(aesPlainHexArr);
  interchangeRowAndColumnForKey(keyArr);
}
function lastRound(keyArr) {
  aesPlainHexArr.forEach((rows) => {
    sBoxByteSubstitution(rows);
  });
  aesFillTableValue(aesPlainHexArr, 10, 1);

  interchangeRowAndColumn(aesPlainHexArr);

  aesPlainHexArr.forEach((row, index) => {
    shiftRow(row, index);
  });
  aesFillTableValue(aesPlainHexArr, 10, 2);
  interchangeRowAndColumnForKey(keyArr);
  aesROFillTableValue(10, 3);
  aesFillTableValue(keyArr, 10, 4);
  xorTextAndKey(aesPlainHexArr, keyArr);
  aesFillTableLastValue(aesPlainHexArr);
  interchangeRowAndColumnForKey(keyArr);
  interchangeRowAndColumn(aesPlainHexArr);
}

//decryption ___________________________________________________________________________________________________

function sInvBoxByteSubstitution(row) {
  row.forEach((elem, index) => {
    if (elem.length == 1) {
      let sValue = aesInvSBox[0][parseInt(elem.charAt(0), 16)];
      row.splice(index, 1, sValue.toString(16));
    } else {
      let sValue =
        aesInvSBox[parseInt(elem.charAt(0), 16)][parseInt(elem.charAt(1), 16)];
      row.splice(index, 1, sValue.toString(16));
    }
  });
}

function reduceIntoDegreeEight(val) {
  let binary = val.toString(2);
  let arr8 = [4, 3, 1, 0];
  let arr9 = [5, 4, 2, 1];
  let arr10 = [6, 5, 3, 2];
  let str = "";
  if (binary.length <= 8) {
    str = binary;
  } else if (binary.length == 9) {
    str = (val ^ 283).toString(2);
  } else if (binary.length == 10) {
    if (binary.charAt(1) == 1) {
      arr8.forEach((elem) => {
        let index = arr9.indexOf(elem);
        if (arr9.indexOf(elem) >= 0) {
          arr9.splice(index, 1);
        } else {
          arr9.splice(arr9.length, 0, elem);
        }
      });
    }
    for (let i = 2; i < binary.length; i++) {
      let num = binary.length - 1 - i;
      let index = arr9.indexOf(num);
      if (binary.charAt(i) == 1) {
        if (arr9.indexOf(num) >= 0) {
          arr9.splice(index, 1);
        } else {
          arr9.splice(arr9.length, 0, num);
        }
      } else {
        continue;
      }
    }
    for (let i = 7; i >= 0; i--) {
      if (arr9.indexOf(i) >= 0) {
        str += 1;
      } else {
        str += 0;
      }
    }
  } else if (binary.length == 11) {
    if (binary.charAt(1) == 1) {
      arr9.forEach((elem) => {
        let index = arr10.indexOf(elem);
        if (arr10.indexOf(elem) >= 0) {
          arr10.splice(index, 1);
        } else {
          arr10.splice(arr10.length, 0, elem);
        }
      });
    }
    if (binary.charAt(2) == 1) {
      arr8.forEach((elem) => {
        let index = arr10.indexOf(elem);
        if (arr10.indexOf(elem) >= 0) {
          arr10.splice(index, 1);
        } else {
          arr10.splice(arr10.length, 0, elem);
        }
      });
    }
    for (let i = 3; i < binary.length; i++) {
      let num = binary.length - 1 - i;
      let index = arr10.indexOf(num);
      if (binary.charAt(i) == 1) {
        if (arr10.indexOf(num) >= 0) {
          arr10.splice(index, 1);
        } else {
          arr10.splice(arr10.length, 0, num);
        }
      } else {
        continue;
      }
    }
    for (let i = 7; i >= 0; i--) {
      if (arr10.indexOf(i) >= 0) {
        str += 1;
      } else {
        str += 0;
      }
    }
  }

  return parseInt(str, 2);
}

function mixColumnDecrypt(row, c) {
  for (let i = 0; i < 4; i++) {
    let xorSum = 0;
    for (let j = 0; j < 4; j++) {
      multipliedFunctionVal = generateHexaNumber(
        invMixColConstArr[i][j],
        row[j],
      );
      let reducedVal = reduceIntoDegreeEight(multipliedFunctionVal);

      xorSum = xorSum ^ reducedVal;
    }
    aesPlainHexArr[i][c] = xorSum.toString(16);
  }
}
function rShiftRow(row, count) {
  for (let i = 0; i < count; i++) {
    let temp = row[3];
    row.splice(0, 0, temp);
    row.splice(4, 1);
  }
}

function aesDecryptFirstRound() {
  interchangeRowAndColumnForKey(keyArrays["rKA10"]);
  xorTextAndKey(aesPlainHexArr, keyArrays["rKA10"]);
  interchangeRowAndColumnForKey(keyArrays["rKA10"]);
  aesPlainHexArr.forEach((row, index) => {
    rShiftRow(row, index);
  });

  aesPlainHexArr.forEach((row) => {
    sInvBoxByteSubstitution(row);
  });
}
function aesDecryptTheRounds(keyArr) {
  interchangeRowAndColumnForKey(keyArr);

  xorTextAndKey(aesPlainHexArr, keyArr);
  interchangeRowAndColumnForKey(keyArr);
  for (let i = 0; i < 4; i++) {
    let arr = [];
    for (let j = 0; j < 4; j++) {
      arr[j] = aesPlainHexArr[j][i];
    }
    mixColumnDecrypt(arr, i);
  }

  aesPlainHexArr.forEach((row, index) => {
    rShiftRow(row, index);
  });

  aesPlainHexArr.forEach((row) => {
    sInvBoxByteSubstitution(row);
  });
}

function splitAesCipherText() {
  let subStringCounter = 0;
  while (subStringCounter < aesCiphertext.length) {
    let twentyTwoCharText = aesCiphertext.substring(
      subStringCounter,
      +subStringCounter + +22,
    );
    // if((+subStringCounter+ +22)>aesPlaintext.length){
    //     for(let i = 0;i<((+subStringCounter+ +16)-(aesPlaintext.length));i++){
    //         sixteenCharText+=".";
    //     }

    // }
    let hexaBinaryString = convertIntoHexaDecimalBinary(twentyTwoCharText);
    convertIntoHexaDecimal(hexaBinaryString);
    //print(aesPlainHexArr);
    aesDecryptRound0To10();
    subStringCounter += 22;
    //console.log(twentyTwoCharText);
  }
}

function aesDecryptRound0To10() {
  interchangeRowAndColumn(aesPlainHexArr);

  aesDecryptFirstRound();

  for (let i = 9; i >= 1; i--) {
    aesDecryptTheRounds(keyArrays["rKA" + i]);
  }

  interchangeRowAndColumnForKey(keyArrays["rKA0"]);

  xorTextAndKey(aesPlainHexArr, keyArrays["rKA0"]);

  interchangeRowAndColumn(aesPlainHexArr);
  interchangeRowAndColumnForKey(keyArrays["rKA0"]);
  aesPlaintext += generateAesCipherText();
}
function aesDecrypt() {
  const aesplain = document.getElementById("aesplaintext");
  aesplain.value = "";
  aesPlaintext = "";
  setAesDocument();
  try {
    if (aesKey.length != 16) {
      throw new Error(alert("Key length should be exact 16 Character"));
    }
    if (aesCiphertext.length == 0) {
      throw new Error(alert("Please Provide Message to Encrypt"));
    }

    createAesKey2DArray();
    aesGenerateRoundKey();
    aesCiphertext = document.getElementById("aesciphertext").value;
    splitAesCipherText();
    //const aesplain = document.getElementById("aesplaintext");
    aesplain.value = aesPlaintext;
  } catch (err) {
    console.log(err);
  }
}

// Base 64 conversion _____________________________________________________________________

function convertStringOfBits() {
  let str = "";
  aesPlainHexArr.forEach((row) => {
    row.forEach((elem) => {
      let conv = parseInt(elem, 16).toString(2);
      let appendbit = "";
      if (conv.length < 8) {
        for (let i = 0; i < 8 - conv.length; i++) {
          appendbit += "0";
        }
        conv = appendbit + conv;
      }
      str += conv;
    });
  });
  return str;
}

function convertIntoBase64(str) {
  let i = 0;
  let cipherText = "";
  while (i < str.length) {
    let binary = "";
    for (let j = i; j < i + 6; j++) {
      binary += str.charAt(j);
    }
    cipherText += Base64[parseInt(binary, 2)];
    i += 6;
  }
  return cipherText;
}

function convertIntoHexaDecimalBinary(cip) {
  let i = 0;
  let binaryString = "";
  while (i < cip.length - 1) {
    let binary = Base64.indexOf(cip.charAt(i)).toString(2);
    let append = "";
    if (binary.length < 6) {
      for (let j = 0; j < 6 - binary.length; j++) {
        append += 0;
      }
    }
    binary = append + binary;
    binaryString += binary;
    //console.log(binary);
    i++;
  }
  let lastChar = Base64.indexOf(cip.charAt(cip.length - 1)).toString(2);
  if (lastChar.length < 2) {
    lastChar = 0 + lastChar;
  }
  binaryString += lastChar;
  //console.log(binaryString);
  return binaryString;
}
function convertIntoHexaDecimal(v1) {
  let i = 0;
  while (i < v1.length) {
    for (let k = 0; k < 4; k++) {
      aesPlainHexArr[k] = [];
      for (let l = 0; l < 4; l++) {
        let hexBinary = "";
        for (let j = i; j < i + 8; j++) {
          hexBinary += v1.charAt(j);
        }
        let hexaNumber = parseInt(hexBinary, 2).toString(16);

        i += 8;
        aesPlainHexArr[k][l] = hexaNumber;
      }
    }
  }
}

// simulator code here &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let aesStateArray;
let stateTable;
let roundKeyOne;
let roundOneKeyTable;
let theRoundKey;
let theRoundKeyTable;
let roundKeyLast;
let roundKeyLastTable;

function updateSimulationStateArray() {
  for (let i = 0; i < 4; i++) {
    const stateTr = stateTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      const trVal = stateTr.getElementsByTagName("td")[j];
      trVal.innerHTML = `${aesAnimationStateArr[i][j]}`;
    }
  }
}
function updateSimulationStateArrayInitial() {
  for (let i = 0; i < 4; i++) {
    const stateTr = stateTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      const trVal = stateTr.getElementsByTagName("td")[j];
      trVal.innerHTML = `${aesAnimationStateArr[j][i]}`;
    }
  }
}
function updateSimulationKeyArray(key) {
  for (let i = 0; i < 4; i++) {
    const KeyTr = theRoundKeyTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      const trVal = KeyTr.getElementsByTagName("td")[j];
      trVal.innerHTML = `${key[i][j]}`;
    }
  }
}

////// Dynamic helper functions for responsive simulator animations
window.currentAnimationTarget = null;
window.isAtRoundStart = true;

function animateStateArrayToElement(targetElement, duration = 500) {
  if (!targetElement) return;
  window.currentAnimationTarget = targetElement;

  const container = document.querySelector('.aesCipherDecipherSimulator');
  const stateArray = document.querySelector('.aesStateArray');
  if (!container || !stateArray) return;

  const containerRect = container.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  // Calculate centered horizontal coordinate
  const left = targetRect.left - containerRect.left + (targetRect.width - stateArray.offsetWidth) / 2;
  
  let top;
  if (window.isAtRoundStart) {
    // Position directly ABOVE the button
    top = targetRect.top - containerRect.top - stateArray.offsetHeight - 15;
  } else {
    // Position directly BELOW the button
    top = targetRect.bottom - containerRect.top + 10; // 10px below the button
  }

  stateArray.style.transition = duration > 0 ? `all ${duration}ms ease-in-out` : 'none';
  stateArray.style.opacity = '1';
  stateArray.style.left = `${left}px`;
  stateArray.style.top = `${top}px`;
}

function animateStateArrayWithFade(targetElement, callback = null) {
  if (!targetElement) return;
  window.currentAnimationTarget = targetElement;

  const container = document.querySelector('.aesCipherDecipherSimulator');
  const stateArray = document.querySelector('.aesStateArray');
  if (!container || !stateArray) return;

  const containerRect = container.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  // Position based on state
  const left = targetRect.left - containerRect.left + (targetRect.width - stateArray.offsetWidth) / 2;
  let top;
  if (window.isAtRoundStart) {
    top = targetRect.top - containerRect.top - stateArray.offsetHeight - 15;
  } else {
    top = targetRect.bottom - containerRect.top + 10;
  }

  // Start smooth transition for both position and opacity
  stateArray.style.transition = 'opacity 500ms ease, left 1000ms ease-in-out, top 1000ms ease-in-out';
  stateArray.style.opacity = '0';
  stateArray.style.left = `${left}px`;
  stateArray.style.top = `${top}px`;

  setTimeout(() => {
    // Run callback while completely transparent to update matrix values
    if (callback) callback();

    // Wait until slide is complete (total 1000ms from start) before fading back in
    setTimeout(() => {
      stateArray.style.transition = 'opacity 500ms ease-in-out';
      stateArray.style.opacity = '1';
    }, 500);
  }, 500);
}

function animateAddRoundKey(targetElement, keyTableElement, callback = null) {
  if (!targetElement || !keyTableElement) return;
  window.currentAnimationTarget = targetElement;

  const container = document.querySelector('.aesCipherDecipherSimulator');
  const stateArray = document.querySelector('.aesStateArray');
  if (!container || !stateArray) return;

  const containerRect = container.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const keyTableRect = keyTableElement.getBoundingClientRect();

  // Target center coordinates on the button
  const left = targetRect.left - containerRect.left + (targetRect.width - stateArray.offsetWidth) / 2;
  const top = targetRect.top - containerRect.top + (targetRect.height - stateArray.offsetHeight) / 2;

  const translateX = targetRect.left + (targetRect.width - keyTableRect.width) / 2 - keyTableRect.left;
  const translateY = targetRect.top + (targetRect.height - keyTableRect.height) / 2 - keyTableRect.top;

  // 1. Data Matrix: moves downward and fades out over 1200ms
  stateArray.style.transition = 'opacity 1200ms ease-out, left 1200ms ease-in-out, top 1200ms ease-in-out';
  stateArray.style.opacity = '0';
  stateArray.style.left = `${left}px`;
  stateArray.style.top = `${top}px`;

  // 2. Key Table: Phase 1 (0-500ms) - moves vertically down and fades slightly to 0.7
  keyTableElement.style.transition = 'transform 500ms ease-in-out, opacity 500ms ease-in-out';
  keyTableElement.style.opacity = '0.7';
  keyTableElement.style.transform = `translateY(${translateY}px)`;

  // 3. Key Table: Phase 2 (500-1200ms) - moves horizontally left and fades out to 0
  setTimeout(() => {
    keyTableElement.style.transition = 'transform 700ms ease-in-out, opacity 700ms ease-in-out';
    keyTableElement.style.opacity = '0';
    keyTableElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }, 500);

  // 4. Merge complete (at 1200ms)
  setTimeout(() => {
    // Run values calculation callback while transparent
    if (callback) callback();

    // Position State Array directly BELOW the button
    const belowTop = targetRect.bottom - containerRect.top + 10;
    stateArray.style.transition = 'none';
    stateArray.style.left = `${left}px`;
    stateArray.style.top = `${belowTop}px`;

    // Instantly reset key table position and keep it faded (opacity 0.2)
    keyTableElement.style.transition = 'none';
    keyTableElement.style.transform = 'none';
    keyTableElement.style.opacity = '0.2';

    // Force layout reflow
    stateArray.offsetHeight;
    keyTableElement.offsetHeight;

    setTimeout(() => {
      // Fade state array back in with updated values
      stateArray.style.transition = 'opacity 600ms ease-in-out';
      stateArray.style.opacity = '1';
    }, 100);
  }, 1200);
}

function resetStateArrayPosition() {
  window.currentAnimationTarget = null;
  window.isAtRoundStart = true;
  const container = document.querySelector('.aesCipherDecipherSimulator');
  const stateArray = document.querySelector('.aesStateArray');
  const initialRoundBtn = document.querySelector('.aesFirstRound p');
  if (!container || !stateArray || !initialRoundBtn) return;

  stateArray.style.transition = 'none';
  const containerRect = container.getBoundingClientRect();
  const btnRect = initialRoundBtn.getBoundingClientRect();

  // Center horizontally with the AddRoundKey button
  const left = btnRect.left - containerRect.left + (btnRect.width - (stateArray.offsetWidth || 120)) / 2;
  // Position directly above the AddRoundKey button (offset vertically)
  const top = btnRect.top - containerRect.top - (stateArray.offsetHeight || 120) - 20;

  stateArray.style.left = `${left}px`;
  stateArray.style.top = `${top}px`;
  stateArray.style.opacity = '1';
}

function drawSimulatorLines() {
  const container = document.querySelector('.aesCipherDecipherSimulator');
  const svg = document.getElementById('aesSimulatorSvg');
  if (!container || !svg) return;

  const containerRect = container.getBoundingClientRect();

  // Find elements
  const initialRoundBtn = document.querySelector('.aesFirstRound p');
  const roundsSubBytesBtn = document.querySelector('.aesTheRounds p:nth-child(1)');
  const roundsAddKeyBtn = document.querySelector('.aesTheRounds p:nth-child(4)');
  const lastRoundSubBytesBtn = document.querySelector('.aesLastRound p:nth-child(1)');
  const lastRoundAddKeyBtn = document.querySelector('.aesLastRound p:nth-child(3)');

  if (!initialRoundBtn || !roundsSubBytesBtn || !roundsAddKeyBtn || !lastRoundSubBytesBtn || !lastRoundAddKeyBtn) return;

  const initialRect = initialRoundBtn.getBoundingClientRect();
  const subBytesRect = roundsSubBytesBtn.getBoundingClientRect();
  const addKeyRect = roundsAddKeyBtn.getBoundingClientRect();
  const lastSubBytesRect = lastRoundSubBytesBtn.getBoundingClientRect();
  const lastAddKeyRect = lastRoundAddKeyBtn.getBoundingClientRect();

  // Main vertical line: from Initial Round AddRoundKey center bottom to Last Round AddRoundKey center bottom
  const startX = initialRect.left - containerRect.left + initialRect.width / 2;
  const startY = initialRect.bottom - containerRect.top;
  const endY = lastAddKeyRect.bottom - containerRect.top;

  const mainPath = document.getElementById('svgMainVerticalLine');
  if (mainPath) {
    mainPath.setAttribute('d', `M ${startX} ${startY} V ${endY}`);
  }

  // Traverse loop line: goes from roundsAddKeyBtn (right side) to roundsSubBytesBtn (right side)
  const loopStartX = addKeyRect.right - containerRect.left;
  const loopStartY = addKeyRect.top - containerRect.top + addKeyRect.height / 2;
  const loopEndX = subBytesRect.right - containerRect.left;
  const loopEndY = subBytesRect.top - containerRect.top + subBytesRect.height / 2;

  // Loop to the right side of the buttons, dynamically positioned in the center gap of the key table
  const buttonRight = Math.max(addKeyRect.right, subBytesRect.right) - containerRect.left;
  const keyTable = document.querySelector('.roundKey table');
  let pivotX;
  if (keyTable) {
    const keyTableRect = keyTable.getBoundingClientRect();
    const keyTableLeft = keyTableRect.left - containerRect.left;
    if (keyTableLeft > buttonRight) {
      pivotX = buttonRight + (keyTableLeft - buttonRight) / 2;
    } else {
      pivotX = buttonRight + 25;
    }
  } else {
    pivotX = buttonRight + 25;
  }

  const loopPath = document.getElementById('svgLoopBackLine');
  if (loopPath) {
    loopPath.setAttribute('d', `M ${loopStartX} ${loopStartY} H ${pivotX} V ${loopEndY} H ${loopEndX}`);
  }
}

function initAesSimulator() {
  const aesNextBtnElement = document.getElementById("aesNextButton");
  if (aesNextBtnElement) {
    aesNextBtnElement.removeEventListener("click", aesSimulateFunction);
    aesNextBtnElement.addEventListener("click", aesSimulateFunction);
  }

  window.removeEventListener('resize', handleAesResize);
  window.addEventListener('resize', handleAesResize);

  // Switch tab event to recalculate SVG paths and positions
  const simulatorTab = document.querySelector('[data-aes-value="#aes_2"]');
  if (simulatorTab) {
    simulatorTab.addEventListener('click', () => {
      setTimeout(() => {
        drawSimulatorLines();
        if (window.currentAnimationTarget) {
          animateStateArrayToElement(window.currentAnimationTarget, 0);
        } else {
          resetStateArrayPosition();
        }
      }, 50);
    });
  }

  setTimeout(() => {
    drawSimulatorLines();
    resetStateArrayPosition();
  }, 100);
}

function handleAesResize() {
  drawSimulatorLines();
  if (window.currentAnimationTarget) {
    animateStateArrayToElement(window.currentAnimationTarget, 0);
  } else {
    resetStateArrayPosition();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAesSimulator);
} else {
  initAesSimulator();
}

let aesFunctionCount = 0;
let theRoundSubCount = 1;
let aesRoundCounter = 1;
let aesLastRoundSubRound = 1;

function aesSimulateFunction() {
  if (aesFunctionCount == 0) {
    aesSimulateRound0();
  } else if (aesFunctionCount == 1) {
    if (theRoundSubCount == 1) {
      aesSimulateNRoundSubByte();
    } else if (theRoundSubCount == 2) {
      aesSimulateNRoundShiftrow();
    } else if (theRoundSubCount == 3) {
      aesSimulateNRoundMixCol();
    } else if (theRoundSubCount == 4) {
      aesSimulateNRoundXorKey();
    } else if (theRoundSubCount == 5) {
      aesSimulateNRoundTraverseBack();
    }
  } else if (aesFunctionCount == 2) {
    if (aesLastRoundSubRound == 1) {
      aesLastRoundSubByte();
    } else if (aesLastRoundSubRound == 2) {
      aesLastRoundShiftRows();
    } else if (aesLastRoundSubRound == 3) {
      aesLastRoundXorKey();
    }
  }
}

function aesSimulateRound0() {
  window.isAtRoundStart = false; // Moves to active round step (below button)
  const target = document.querySelector('.aesFirstRound p');
  animateAddRoundKey(target, roundOneKeyTable, () => {
    interchangeRowAndColumn(aesAnimationStateArr);
    interchangeRowAndColumnForKey(keyArrays["rKA0"]);
    let zerothRoundXorKeyDiv = document.getElementById("insideXorKey0thRound");
    fillinsideXorKeyTableValue(
      zerothRoundXorKeyDiv,
      aesAnimationStateArr,
      keyArrays["rKA0"],
    );
    interchangeRowAndColumnForKey(keyArrays["rKA0"]);
    interchangeRowAndColumn(aesAnimationStateArr);
    xorTextAndKey(aesAnimationStateArr, keyArrays["rKA0"]);
    interchangeRowAndColumn(aesAnimationStateArr);
    updateSimulationStateArray();
  });
  setTimeout(() => {
    ch3.innerHTML = `${aesRoundCounter}`;
  }, 4000);
  aesFunctionCount++;
}

function aesSimulateNRoundSubByte() {
  window.isAtRoundStart = false; // Moves to active round step (below button)
  const target = document.querySelector('.aesTheRounds p:nth-child(1)');
  animateStateArrayWithFade(target, () => {
    insideSboxTheRoundFillTable();
    aesAnimationStateArr.forEach((rows) => {
      sBoxByteSubstitution(rows);
    });
    updateSimulationStateArray();
  });
  setTimeout(() => {
    if (insideSboxStateRowIndex > 0 || insideSboxStateColumnIndex > 0) {
      insideSboxResetButtonTheRound();
    }
  }, 2500);
  theRoundSubCount++;
}

function aesSimulateNRoundShiftrow() {
  window.isAtRoundStart = false;
  const target = document.querySelector('.aesTheRounds p:nth-child(2)');
  animateStateArrayWithFade(target, () => {
    // inside shift row code
    const shiftRowStateArray1 = document.getElementsByClassName("insideShiftRowsTable1")[0];
    const shiftRowStateArray2 = document.getElementsByClassName("insideShiftRowsTable2")[0];
    for (let i = 0; i < 4; i++) {
      let shiftRowStateArrayTable = shiftRowStateArray1.getElementsByTagName("table")[i];
      let shiftRowStateArrayTabletr = shiftRowStateArrayTable.getElementsByTagName("tr")[0];
      for (let j = 0; j < 4; j++) {
        let shiftRowStateArrayTabletrtd = shiftRowStateArrayTabletr.getElementsByTagName("td")[j];
        shiftRowStateArrayTabletrtd.innerHTML = `${aesAnimationStateArr[i][j]}`;
      }
    }
    aesAnimationStateArr.forEach((row, index) => {
      shiftRow(row, index);
    });
    updateSimulationStateArray();
    
    let shiftRowStateArrayTable = shiftRowStateArray2.getElementsByTagName("table")[0];
    for (let i = 0; i < 4; i++) {
      let shiftRowStateArrayTabletr =
        shiftRowStateArrayTable.getElementsByTagName("tr")[i];
      for (let j = 0; j < 4; j++) {
        let shiftRowStateArrayTabletrtd =
          shiftRowStateArrayTabletr.getElementsByTagName("td")[j];
        shiftRowStateArrayTabletrtd.innerHTML = `${aesAnimationStateArr[i][j]}`;
      }
    }
  });
  theRoundSubCount++;
}

function aesSimulateNRoundMixCol() {
  window.isAtRoundStart = false;
  const target = document.querySelector('.aesTheRounds p:nth-child(3)');
  animateStateArrayWithFade(target, () => {
    fillInsideMixColumnStateTable();
    for (let i = 0; i < 4; i++) {
      let arr = [];
      for (let j = 0; j < 4; j++) {
        arr[j] = aesAnimationStateArr[j][i];
      }
      mixColumns(aesAnimationStateArr, arr, i);
    }
    updateSimulationStateArray();
    insideMixedColReset();
  });
  theRoundSubCount++;
}

function aesSimulateNRoundXorKey() {
  if (aesRoundCounter == 9) {
    aesFunctionCount++;
  }
  window.isAtRoundStart = false;
  const target = document.querySelector('.aesTheRounds p:nth-child(4)');
  animateAddRoundKey(target, theRoundKeyTable, () => {
    let theRoundXorKeyDiv = document.getElementById("insideXorKeytheRound");
    interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
    insideXorKeyTheRoundReset();
    fillinsideXorKeyTableValue(
      theRoundXorKeyDiv,
      aesAnimationStateArr,
      keyArrays[`${"rKA" + aesRoundCounter}`],
    );
    xorTextAndKey(
      aesAnimationStateArr,
      keyArrays[`${"rKA" + aesRoundCounter}`],
    );
    updateSimulationStateArray();
    interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
  });
  theRoundSubCount++;
}

let aesRound = document.getElementsByClassName("counter")[0];
let ch3 = aesRound.getElementsByTagName("h3")[0];

function aesSimulateNRoundTraverseBack() {
  // We are looping back to start of round position (above 1-SubBytes)
  window.isAtRoundStart = true;

  const container = document.querySelector('.aesCipherDecipherSimulator');
  const stateArray = document.querySelector('.aesStateArray');
  const startEl = document.querySelector('.aesTheRounds p:nth-child(4)');
  const endEl = document.querySelector('.aesTheRounds p:nth-child(1)');

  if (container && stateArray && startEl && endEl) {
    const containerRect = container.getBoundingClientRect();
    const startRect = startEl.getBoundingClientRect();
    const endRect = endEl.getBoundingClientRect();

    const leftStart = startRect.left - containerRect.left + (startRect.width - stateArray.offsetWidth) / 2;
    // Position below 4-AddRoundKey initially (where it currently is)
    const topStart = startRect.bottom - containerRect.top + 10;
    const leftEnd = endRect.left - containerRect.left + (endRect.width - stateArray.offsetWidth) / 2;
    // Position ABOVE 1-SubBytes finally
    const topEnd = endRect.top - containerRect.top - stateArray.offsetHeight - 15;

    // Loop to the right side of the buttons, dynamically positioned in the center gap of the key table
    const buttonRight = Math.max(startRect.right, endRect.right) - containerRect.left;
    const keyTable = document.querySelector('.roundKey table');
    let pivotX;
    if (keyTable) {
      const keyTableRect = keyTable.getBoundingClientRect();
      const keyTableLeft = keyTableRect.left - containerRect.left;
      if (keyTableLeft > buttonRight) {
        pivotX = buttonRight + (keyTableLeft - buttonRight) / 2;
      } else {
        pivotX = buttonRight + 25;
      }
    } else {
      pivotX = buttonRight + 25;
    }
    const sideX = pivotX - stateArray.offsetWidth / 2;

    // Step 1: Move right
    stateArray.style.transition = 'all 700ms ease-in-out';
    stateArray.style.left = `${sideX}px`;
    stateArray.style.top = `${topStart}px`;

    window.currentAnimationTarget = endEl;

    setTimeout(() => {
      // Step 2: Move up
      stateArray.style.left = `${sideX}px`;
      stateArray.style.top = `${topEnd}px`;

      setTimeout(() => {
        // Step 3: Move left
        stateArray.style.left = `${leftEnd}px`;
        stateArray.style.top = `${topEnd}px`;
      }, 700);
    }, 700);
  }

  theRoundSubCount = 1;
  aesRoundCounter++;
  interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
  setTimeout(() => {
    updateSimulationKeyArray(keyArrays[`${"rKA" + aesRoundCounter}`]);
    theRoundKeyTable.style.transition = 'opacity 500ms ease-in-out';
    theRoundKeyTable.style.opacity = '1';
  }, 3000);
  setTimeout(() => {
    ch3.innerHTML = `${aesRoundCounter}`;
    interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
  }, 4000);
}

function aesLastRoundSubByte() {
  window.isAtRoundStart = false;
  const target = document.querySelector('.aesLastRound p:nth-child(1)');
  animateStateArrayWithFade(target, () => {
    insideSboxLastRoundFillTable();
    aesAnimationStateArr.forEach((rows) => {
      sBoxByteSubstitution(rows);
    });
    updateSimulationStateArray();
  });
  aesLastRoundSubRound++;
}

function aesLastRoundShiftRows() {
  window.isAtRoundStart = false;
  const target = document.querySelector('.aesLastRound p:nth-child(2)');
  animateStateArrayWithFade(target, () => {
    aesAnimationStateArr.forEach((row, index) => {
      shiftRow(row, index);
    });
    updateSimulationStateArray();
  });
  aesLastRoundSubRound++;
}

function aesLastRoundXorKey() {
  window.isAtRoundStart = false;
  const target = document.querySelector('.aesLastRound p:nth-child(3)');
  animateAddRoundKey(target, roundKeyLastTable, () => {
    let lastRoundXorKeyDiv = document.getElementById("insideXorKeyLastRound");
    interchangeRowAndColumnForKey(keyArrays["rKA10"]);
    fillinsideXorKeyTableValue(
      lastRoundXorKeyDiv,
      aesAnimationStateArr,
      keyArrays["rKA10"],
    );
    xorTextAndKey(aesAnimationStateArr, keyArrays["rKA10"]);
    updateSimulationStateArray();
    interchangeRowAndColumnForKey(keyArrays["rKA10"]);
  });
}

function aesAnimationSkipStep() {
  let time1 = 0;
  let time2 = 4000;
  let time3 = 8000;
  let time4 = 12000;
  let time5 = 16000;

  let timeLast1 = 0;
  let timeLast2 = 4000;
  let timeLast3 = 8000;

  if (aesFunctionCount == 0) {
    aesSimulateRound0();
  } else if (aesFunctionCount == 1) {
    switch (theRoundSubCount) {
      case 1: {
        break;
      }
      case 2: {
        time2 = 0;
        time3 = 4000;
        time4 = 8000;
        time5 = 12000;
        break;
      }
      case 3: {
        time3 = 0;
        time4 = 4000;
        time5 = 8000;
        break;
      }
      case 4: {
        time4 = 0;
        time5 = 4000;
        break;
      }
      default: {
        time5 = 0;
      }
    }

    switch (theRoundSubCount) {
      case 1: {
        setTimeout(() => {
          aesSimulateNRoundSubByte();
        }, time1);
      }
      case 2: {
        setTimeout(() => {
          aesSimulateNRoundShiftrow();
        }, time2);
      }
      case 3: {
        setTimeout(() => {
          aesSimulateNRoundMixCol();
          console.log(time3);
        }, time3);
      }
      case 4: {
        setTimeout(() => {
          aesSimulateNRoundXorKey();
          console.log(time4);
        }, time4);
      }
      default: {
        if (aesRoundCounter == 9) {
          break;
        }
        setTimeout(() => {
          aesSimulateNRoundTraverseBack();
        }, time5);
      }
    }
  } else if (aesFunctionCount == 2) {
    switch (aesLastRoundSubRound) {
      case 1: {
        break;
      }
      case 2: {
        timeLast2 = 0;
        timeLast3 = 4000;
        break;
      }
      default: {
        timeLast3 = 0;
        break;
      }
    }

    switch (aesLastRoundSubRound) {
      case 1: {
        setTimeout(() => {
          aesLastRoundSubByte();
        }, timeLast1);
      }
      case 2: {
        setTimeout(() => {
          aesLastRoundShiftRows();
        }, timeLast2);
      }
      default: {
        setTimeout(() => {
          aesLastRoundXorKey();
        }, timeLast3);
      }
    }
  }
}

function aesAnimationStateArrayReset() {
  let k = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let code = aesPlaintext.charCodeAt(k);
      if (isNaN(code)) {
        code = '.'.charCodeAt(0); // Pad with '.' to match the initial splitAesPlaintext padding
      }
      aesAnimationStateArr[i][j] = code.toString(16);
      k++;
    }
  }
}

function aesSimulationKeyReset() {
  for (let i = 0; i < 4; i++) {
    const initialRoundTr = roundOneKeyTable.getElementsByTagName("tr")[i];
    const theRoundTr = theRoundKeyTable.getElementsByTagName("tr")[i];
    const lastRoundTr = roundKeyLastTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      const key0Val = initialRoundTr.getElementsByTagName("td")[j];
      key0Val.innerHTML = `${keyArrays["rKA0"][i][j]}`;
      const key1Val = theRoundTr.getElementsByTagName("td")[j];
      key1Val.innerHTML = `${keyArrays["rKA1"][i][j]}`;
      const key10Val = lastRoundTr.getElementsByTagName("td")[j];
      key10Val.innerHTML = `${keyArrays["rKA10"][i][j]}`;
    }
  }
}

function aesAnimationReset() {
  resetStateArrayPosition();

  roundOneKeyTable.classList.remove("aesKeyMoveAnimation");
  theRoundKeyTable.classList.remove("aesKeyMoveAnimation");
  roundKeyLastTable.classList.remove("aesKeyMoveAnimation");

  roundOneKeyTable.style.opacity = '1';
  theRoundKeyTable.style.opacity = '1';
  roundKeyLastTable.style.opacity = '1';

  aesRoundCounter = 1;
  aesFunctionCount = 0;
  theRoundSubCount = 1;
  aesLastRoundSubRound = 1;
  ch3.innerHTML = 0;

  aesSimulationKeyReset(); //Simulation Key reset
  aesAnimationStateArrayReset(); // animation state array reset
  updateSimulationStateArrayInitial(); // update the resetted array
}

function aesBackdropAndModal(modal) {
  const backdrop = document.getElementsByClassName("aesBackdrop")[0];
  backdrop.style.display = "block";
  modal.style.display = "block";
}
function closeAesBackdrop(modal) {
  const backdrop = document.getElementsByClassName("aesBackdrop")[0];
  backdrop.style.display = "none";
  modal.style.display = "none";
}

function openAllValueModal() {
  const modal = document.getElementsByClassName("aesModal")[0];
  aesBackdropAndModal(modal);
}
function closeAllValueModal() {
  const modal = document.getElementsByClassName("aesModal")[0];
  closeAesBackdrop(modal);
}

function openSubByteModal() {
  const modal = document.getElementsByClassName("aesSubByteModal")[0];
  aesBackdropAndModal(modal);
}
function closeSubByteModal() {
  const modal = document.getElementsByClassName("aesSubByteModal")[0];
  closeAesBackdrop(modal);
}

function openShiftRowsModal() {
  const modal = document.getElementsByClassName("aesShiftRowModal")[0];
  aesBackdropAndModal(modal);
}
function closeShiftRowsModal() {
  const modal = document.getElementsByClassName("aesShiftRowModal")[0];
  closeAesBackdrop(modal);
}
function openMixColModal() {
  const modal = document.getElementsByClassName("aesMixColModal")[0];
  aesBackdropAndModal(modal);
}
function closeMixColModal() {
  const modal = document.getElementsByClassName("aesMixColModal")[0];
  closeAesBackdrop(modal);
}
function openXorKeyModal() {
  const modal = document.getElementsByClassName("aesXorKeyModal")[0];
  aesBackdropAndModal(modal);
}
function closeXorKeyModal() {
  const modal = document.getElementsByClassName("aesXorKeyModal")[0];
  closeAesBackdrop(modal);
}
function openFirstXorKeyModal() {
  const modal = document.getElementsByClassName("aesFirstRoundXorKeyModal")[0];
  aesBackdropAndModal(modal);
}
function closeFirstXorKeyModal() {
  const modal = document.getElementsByClassName("aesFirstRoundXorKeyModal")[0];
  closeAesBackdrop(modal);
}

function openLastSubByteModal() {
  const modal = document.getElementsByClassName("aesLastSubByteModal")[0];
  aesBackdropAndModal(modal);
}
function closeLastSubByteModal() {
  const modal = document.getElementsByClassName("aesLastSubByteModal")[0];
  closeAesBackdrop(modal);
}
function openLastShiftRowsModal() {
  const modal = document.getElementsByClassName("aesLastShiftRowsModal")[0];
  aesBackdropAndModal(modal);
}
function closeLastShiftRowsModal() {
  const modal = document.getElementsByClassName("aesLastShiftRowsModal")[0];
  closeAesBackdrop(modal);
}
function openLastXorKeyModal() {
  const modal = document.getElementsByClassName("aesLastXorKeyModal")[0];
  aesBackdropAndModal(modal);
}
function closeLastXorKeyModal() {
  const modal = document.getElementsByClassName("aesLastXorKeyModal")[0];
  closeAesBackdrop(modal);
}

//inside Add RoundKey
function fillinsideXorKeyTableValue(xorModal, stateArray, keyArray) {
  let xorModalStateTable = xorModal.getElementsByTagName("table")[0];
  let xorModalKeyTable = xorModal.getElementsByTagName("table")[1];

  for (let i = 0; i < 4; i++) {
    let xorModalStateTabletr = xorModalStateTable.getElementsByTagName("tr")[i];
    let xorModalKeyTabletr = xorModalKeyTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      let xorModalStateTabletrtd =
        xorModalStateTabletr.getElementsByTagName("td")[j];
      let xorModalKeyTabletrtd =
        xorModalKeyTabletr.getElementsByTagName("td")[j];
      xorModalStateTabletrtd.innerHTML = stateArray[i][j];
      xorModalKeyTabletrtd.innerHTML = keyArray[i][j];
    }
  }

  // Set the initial explanation text in the calculation div when opened
  let explanationDiv = xorModal.getElementsByClassName("insideXorRoundAndKeyCalculation")[0];
  if (explanationDiv) {
    explanationDiv.innerHTML = `
      <div class="step-desc-card" style="margin-top: 1rem; width: 100%;">
        <div class="step-desc-header">Simulation Initialized</div>
        <div class="step-desc-body">
          <p>Click the <strong>Next</strong> button to perform bitwise XOR key addition cell-by-cell between the State Array and the Round Key.</p>
        </div>
      </div>
    `;
  }
}
let insideXorKeyRowIndexZerothRound = 0;
let insideXorKeyColIndexZerothRound = 0;
let insideXorKeyRowIndexTheRound = 0;
let insideXorKeyColIndexTheRound = 0;
let insideXorKeyRowIndexLastRound = 0;
let insideXorKeyColIndexLastRound = 0;
function insideXorKeyZerothRound() {
  if (insideXorKeyColIndexZerothRound > 3) {
    insideXorKeyRowIndexZerothRound++;
    insideXorKeyColIndexZerothRound = 0;
  }
  if (insideXorKeyRowIndexZerothRound > 3) return;
  let insideZerothRoundXorKeyDiv = document.getElementById(
    "insideXorKey0thRound",
  );
  insideXorKeyTableNextStep(
    insideZerothRoundXorKeyDiv,
    insideXorKeyRowIndexZerothRound,
    insideXorKeyColIndexZerothRound,
  );
  insideXorKeyColIndexZerothRound++;
}
function insideXorKeyTheRound() {
  if (insideXorKeyColIndexTheRound > 3) {
    insideXorKeyRowIndexTheRound++;
    insideXorKeyColIndexTheRound = 0;
  }
  if (insideXorKeyRowIndexTheRound > 3) return;
  let insideTheRoundXorKeyDiv = document.getElementById("insideXorKeytheRound");
  insideXorKeyTableNextStep(
    insideTheRoundXorKeyDiv,
    insideXorKeyRowIndexTheRound,
    insideXorKeyColIndexTheRound,
  );
  insideXorKeyColIndexTheRound++;
}
function insideXorKeyLastRound() {
  if (insideXorKeyColIndexLastRound > 3) {
    insideXorKeyRowIndexLastRound++;
    insideXorKeyColIndexLastRound = 0;
  }
  if (insideXorKeyRowIndexLastRound > 3) return;
  let insideLastRoundXorKeyDiv = document.getElementById(
    "insideXorKeyLastRound",
  );
  insideXorKeyTableNextStep(
    insideLastRoundXorKeyDiv,
    insideXorKeyRowIndexLastRound,
    insideXorKeyColIndexLastRound,
  );
  insideXorKeyColIndexLastRound++;
}

function insideXorKeyZerothRoundReset() {
  insideXorKeyRowIndexZerothRound = 0;
  insideXorKeyColIndexZerothRound = 0;
  let insideZerothRoundXorKeyDiv = document.getElementById(
    "insideXorKey0thRound",
  );
  insideXorKeyReset(insideZerothRoundXorKeyDiv);
}
function insideXorKeyTheRoundReset() {
  insideXorKeyRowIndexTheRound = 0;
  insideXorKeyColIndexTheRound = 0;
  let insideTheRoundXorKeyDiv = document.getElementById("insideXorKeytheRound");
  insideXorKeyReset(insideTheRoundXorKeyDiv);
}
function insideXorKeyLastRoundReset() {
  insideXorKeyRowIndexLastRound = 0;
  insideXorKeyColIndexLastRound = 0;
  let insideLastRoundXorKeyDiv = document.getElementById(
    "insideXorKeyLastRound",
  );
  insideXorKeyReset(insideLastRoundXorKeyDiv);
}

function insideXorKeyReset(div) {
  let divStateTable = div.getElementsByTagName("table")[0];
  let divKeyTable = div.getElementsByTagName("table")[1];
  let divNewStateTable = div.getElementsByTagName("table")[2];
  
  for (let i = 0; i < 4; i++) {
    let divStateTableTr = divStateTable.getElementsByTagName("tr")[i];
    let divKeyTableTr = divKeyTable.getElementsByTagName("tr")[i];
    let divNewStateTableTr = divNewStateTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      divStateTableTr.getElementsByTagName("td")[j].style.background = "none";
      divKeyTableTr.getElementsByTagName("td")[j].style.background = "none";
      let divNewStateTabletd = divNewStateTableTr.getElementsByTagName("td")[j];
      divNewStateTabletd.innerHTML = "";
      divNewStateTabletd.style.background = "none";
    }
  }

  // Reset explanation div
  let explanationDiv = div.getElementsByClassName("insideXorRoundAndKeyCalculation")[0];
  if (explanationDiv) {
    explanationDiv.innerHTML = `
      <div class="step-desc-card" style="margin-top: 1rem; width: 100%;">
        <div class="step-desc-header">Simulation Initialized</div>
        <div class="step-desc-body">
          <p>Click the <strong>Next</strong> button to perform bitwise XOR key addition cell-by-cell between the State Array and the Round Key.</p>
        </div>
      </div>
    `;
  }
}

function insideXorKeyTableNextStep(div, r, c) {
  let divStateTable = div.getElementsByTagName("table")[0];
  let divStateTableTr = divStateTable.getElementsByTagName("tr")[r];
  let divStateTabletd = divStateTableTr.getElementsByTagName("td")[c];

  let divKeyTable = div.getElementsByTagName("table")[1];
  let divKeyTableTr = divKeyTable.getElementsByTagName("tr")[r];
  let divKeyTabletd = divKeyTableTr.getElementsByTagName("td")[c];

  let divNewStateTable = div.getElementsByTagName("table")[2];
  let divNewStateTableTr = divNewStateTable.getElementsByTagName("tr")[r];
  let divNewStateTabletd = divNewStateTableTr.getElementsByTagName("td")[c];

  // Highlight current cells in State, Key, and Output tables
  divStateTabletd.style.background = "yellow";
  divKeyTabletd.style.background = "yellow";
  divNewStateTabletd.style.background = "lightgreen";

  let stateHex = divStateTabletd.innerHTML.trim().toUpperCase();
  let keyHex = divKeyTabletd.innerHTML.trim().toUpperCase();

  if (!stateHex || isNaN(parseInt(stateHex, 16))) stateHex = "00";
  if (!keyHex || isNaN(parseInt(keyHex, 16))) keyHex = "00";

  let stateVal = parseInt(stateHex, 16);
  let keyVal = parseInt(keyHex, 16);
  let xorVal = stateVal ^ keyVal;
  let outHex = xorVal.toString(16).toUpperCase().padStart(2, '0');

  divNewStateTabletd.innerHTML = outHex.toLowerCase();

  let stateBin = stateVal.toString(2).padStart(8, '0');
  let keyBin = keyVal.toString(2).padStart(8, '0');
  let outBin = xorVal.toString(2).padStart(8, '0');

  // Clear previous highlighted cells
  let prevRow = r;
  let prevCol = c - 1;
  if (c === 0 && r > 0) {
    prevRow = r - 1;
    prevCol = 3;
  }
  if (prevCol >= 0 && (prevRow !== r || prevCol !== c)) {
    let pStateTr = divStateTable.getElementsByTagName("tr")[prevRow];
    let pStateTd = pStateTr.getElementsByTagName("td")[prevCol];
    pStateTd.style.background = "none";

    let pKeyTr = divKeyTable.getElementsByTagName("tr")[prevRow];
    let pKeyTd = pKeyTr.getElementsByTagName("td")[prevCol];
    pKeyTd.style.background = "none";

    let pNewTr = divNewStateTable.getElementsByTagName("tr")[prevRow];
    let pNewTd = pNewTr.getElementsByTagName("td")[prevCol];
    pNewTd.style.background = "none";
  }

  // Inject dynamic explanation
  let explanationDiv = div.getElementsByClassName("insideXorRoundAndKeyCalculation")[0];
  if (explanationDiv) {
    explanationDiv.innerHTML = `
      <div class="step-desc-card" style="margin-top: 1rem; width: 100%;">
        <div class="step-desc-header">XOR Key Addition: <strong>Row ${r}, Column ${c}</strong></div>
        <div class="step-desc-body" style="font-family: monospace; font-size: 0.85rem; line-height: 1.45;">
          <p style="margin-bottom: 0.5rem; font-family: 'Montserrat', sans-serif;">
            XOR calculation for cell at Row ${r}, Column ${c}:
          </p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.6rem 1rem; margin-top: 0.5rem; display: inline-block; min-width: 280px; text-align: left;">
            <div style="white-space: pre; color: #475569;">State Cell [${r}][${c}]:  ${stateBin} (0x${stateHex})</div>
            <div style="white-space: pre; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; color: #475569;">⊕ Key Cell [${r}][${c}]:    ${keyBin} (0x${keyHex})</div>
            <div style="white-space: pre; padding-top: 4px; color: #166534; font-weight: bold;">Output Cell [${r}][${c}]: ${outBin} (0x${outHex})</div>
          </div>
        </div>
      </div>
    `;
  }
}

// inside SBox all implementation inclusing reset
let insideSboxStateRowIndex = 0;
let insideSboxStateColumnIndex = 0;

let sboxLastRoundStateRowIndex = 0;
let sboxLastRoundStateColumnIndex = 0;

let sboxRow = 0;
let sboxColumn = 0;
let sboxRowLastRound = 0;
let sboxColumnLastRound = 0;
function insideSboxTheRoundFillTable() {
  const insideSubByte = document.getElementById("insideSubByteTheRound");
  fillInsideSboxTable(insideSubByte);
}
function insideSboxLastRoundFillTable() {
  const insideSubByte = document.getElementById("insideSubByteLastRound");
  fillInsideSboxTable(insideSubByte);
}
function fillInsideSboxTable(div) {
  const insideSubByteTable = div.getElementsByTagName("table")[0];
  for (let i = 0; i < 4; i++) {
    let insideSubByteTableTr = insideSubByteTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      let insideSubByteTableTd =
        insideSubByteTableTr.getElementsByTagName("td")[j];
      insideSubByteTableTd.innerHTML = `${aesAnimationStateArr[i][j]}`;
    }
  }
}

function insideSboxNextButtonTheRound() {
  const insideSboxStateArray = document.getElementById("insideSubByteTheRound");
  const insideSboxStateArraytable =
    insideSboxStateArray.getElementsByTagName("table")[0];
  const objectTableTag = insideSboxStateArray.getElementsByTagName("object")[0];
  const outsideAccessSbox = objectTableTag.contentDocument;
  const sBoxOusideAccess =
    outsideAccessSbox.getElementsByClassName("animationSBoxTable")[0];
  const insideSbox_SBoxArraytable =
    sBoxOusideAccess.getElementsByTagName("table")[0];
  let subByteNewState = document.getElementById(
    "insideSubByteNewStateArrayTheRound",
  );

  clearPreviousStepCssStateArray(
    insideSboxStateArraytable,
    insideSboxStateRowIndex,
    insideSboxStateColumnIndex,
  );

  let insideSboxStateArraytabletr =
    insideSboxStateArraytable.getElementsByTagName("tr")[
      insideSboxStateRowIndex
    ];
  let insideSboxStateArraytabletrtd =
    insideSboxStateArraytabletr.getElementsByTagName("td")[
      insideSboxStateColumnIndex
    ];
  insideSboxStateArraytabletrtd.style.background = "yellow";

  clearPreviousStepSBoxCss(sboxRow, sboxColumn, insideSbox_SBoxArraytable);
  let stateValue = insideSboxStateArraytabletrtd.innerHTML;
  if (stateValue.length == 1) {
    sboxRow = 0;
    sboxColumn = parseInt(stateValue, 16);
  } else {
    sboxRow = parseInt(stateValue.charAt(0), 16);
    sboxColumn = parseInt(stateValue.charAt(1), 16);
  }
  insideSBox(
    insideSbox_SBoxArraytable,
    subByteNewState,
    insideSboxStateRowIndex,
    insideSboxStateColumnIndex,
    sboxRow,
    sboxColumn,
  );
  if (insideSboxStateColumnIndex >= 3) {
    insideSboxStateRowIndex++;
    insideSboxStateColumnIndex = 0;
  } else {
    insideSboxStateColumnIndex++;
  }
}

function insideSboxNextButtonLastRound() {
  const insideSboxStateArray = document.getElementById(
    "insideSubByteLastRound",
  );
  const insideSboxStateArraytable =
    insideSboxStateArray.getElementsByTagName("table")[0];
  const objectTableTag = insideSboxStateArray.getElementsByTagName("object")[0];
  const outsideAccessSbox = objectTableTag.contentDocument;
  const sBoxOusideAccess =
    outsideAccessSbox.getElementsByClassName("animationSBoxTable")[0];
  const insideSbox_SBoxArraytable =
    sBoxOusideAccess.getElementsByTagName("table")[0];
  let subByteNewState = document.getElementById(
    "insideSubByteNewStateArrayLastRound",
  );

  clearPreviousStepCssStateArray(
    insideSboxStateArraytable,
    sboxLastRoundStateRowIndex,
    sboxLastRoundStateColumnIndex,
  );

  let insideSboxStateArraytabletr =
    insideSboxStateArraytable.getElementsByTagName("tr")[
      sboxLastRoundStateRowIndex
    ];
  let insideSboxStateArraytabletrtd =
    insideSboxStateArraytabletr.getElementsByTagName("td")[
      sboxLastRoundStateColumnIndex
    ];
  insideSboxStateArraytabletrtd.style.background = "yellow";

  clearPreviousStepSBoxCss(
    sboxRowLastRound,
    sboxColumnLastRound,
    insideSbox_SBoxArraytable,
  );
  let stateValue = insideSboxStateArraytabletrtd.innerHTML;
  if (stateValue.length == 1) {
    sboxRowLastRound = 0;
    sboxColumnLastRound = parseInt(stateValue, 16);
  } else {
    sboxRowLastRound = parseInt(stateValue.charAt(0), 16);
    sboxColumnLastRound = parseInt(stateValue.charAt(1), 16);
  }
  insideSBox(
    insideSbox_SBoxArraytable,
    subByteNewState,
    sboxLastRoundStateRowIndex,
    sboxLastRoundStateColumnIndex,
    sboxRowLastRound,
    sboxColumnLastRound,
  );
  if (sboxLastRoundStateColumnIndex >= 3) {
    sboxLastRoundStateRowIndex++;
    sboxLastRoundStateColumnIndex = 0;
  } else {
    sboxLastRoundStateColumnIndex++;
  }
}

function insideSboxResetButtonTheRound() {
  let insideSboxStateArray = document.getElementById("insideSubByteTheRound");
  // const insideSboxStateArraytable = insideSboxStateArray.getElementsByTagName('table')[0];
  let objectTableTag = insideSboxStateArray.getElementsByTagName("object")[0];
  let outsideAccessSbox = objectTableTag.contentDocument;
  let sBoxOusideAccess =
    outsideAccessSbox.getElementsByClassName("animationSBoxTable")[0];
  let insideSbox_SBoxArraytable =
    sBoxOusideAccess.getElementsByTagName("table")[0];
  let subByteNewState = document.getElementById(
    "insideSubByteNewStateArrayTheRound",
  );
  insideSBoxReset(
    insideSboxStateArray,
    insideSbox_SBoxArraytable,
    subByteNewState,
    sboxRow,
    sboxColumn,
  );
  insideSboxStateRowIndex = 0;
  insideSboxStateColumnIndex = 0;
  sboxRow = 0;
  sboxColumn = 0;
}
function insideSboxResetButtonLastRound() {
  let insideSboxStateArray = document.getElementById("insideSubByteLastRound");
  // const insideSboxStateArraytable = insideSboxStateArray.getElementsByTagName('table')[0];
  let objectTableTag = insideSboxStateArray.getElementsByTagName("object")[0];
  let outsideAccessSbox = objectTableTag.contentDocument;
  let sBoxOusideAccess =
    outsideAccessSbox.getElementsByClassName("animationSBoxTable")[0];
  let insideSbox_SBoxArraytable =
    sBoxOusideAccess.getElementsByTagName("table")[0];
  let subByteNewState = document.getElementById(
    "insideSubByteNewStateArrayLastRound",
  );
  insideSBoxReset(
    insideSboxStateArray,
    insideSbox_SBoxArraytable,
    subByteNewState,
    sboxRowLastRound,
    sboxColumnLastRound,
  );
  sboxLastRoundStateRowIndex = 0;
  sboxLastRoundStateColumnIndex = 0;
  sboxRowLastRound = 0;
  sboxColumnLastRound = 0;
}

function insideSBoxReset(stateArray, sboxTable, newState, r, c) {
  clearPreviousStepSBoxCss(r, c, sboxTable);

  const insideSboxStateArraytable = stateArray.getElementsByTagName("table")[0];
  let subByteNewStateTable = newState.getElementsByTagName("table")[0];

  for (let i = 0; i < 4; i++) {
    let insideSboxStateArraytabletr =
      insideSboxStateArraytable.getElementsByTagName("tr")[i];
    let subByteNewStateTabletr =
      subByteNewStateTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      let insideSboxStateArraytabletrtd =
        insideSboxStateArraytabletr.getElementsByTagName("td")[j];
      let subByteNewStateTabletrtd =
        subByteNewStateTabletr.getElementsByTagName("td")[j];
      insideSboxStateArraytabletrtd.style.background = "lightgrey";
      subByteNewStateTabletrtd.innerHTML = "";
    }
  }

  // Reset the explanation text in the simulation modal
  const isLastRound = newState.id.includes("LastRound");
  const explanationDivId = isLastRound ? "sboxStepExplanationLastRound" : "sboxStepExplanationTheRound";
  const explanationDiv = document.getElementById(explanationDivId);
  if (explanationDiv) {
    explanationDiv.innerHTML = `
      <div class="step-desc-card">
        <div class="step-desc-header">Simulation Initialized</div>
        <div class="step-desc-body">
          <p>Click the <strong>Next</strong> button to begin the byte substitution process step-by-step for each of the 16 bytes in the State Array.</p>
        </div>
      </div>
    `;
  }
}
function clearPreviousStepCssStateArray(stateTable, r, c) {
  let clearRowIndex = r;
  let clearColumnIndex = c;

  // clear code for state array
  if (r == 0 && c > 0) {
    clearRowIndex = r;
    clearColumnIndex = c - 1;
  } else if (r > 0 && c == 0) {
    clearRowIndex = r - 1;
    clearColumnIndex = 3;
  } else if (r > 0 && c > 0) {
    clearRowIndex = r;
    clearColumnIndex = c - 1;
  }

  let insideSboxStateArraytabletr =
    stateTable.getElementsByTagName("tr")[clearRowIndex];
  let insideSboxStateArraytabletrtd =
    insideSboxStateArraytabletr.getElementsByTagName("td")[clearColumnIndex];

  insideSboxStateArraytabletrtd.style.background = "none";

  // clear code for s box array
}

function clearPreviousStepSBoxCss(r, c, sboxTable) {
  if (r == 0 && c == 0) {
    let firstRowtr = sboxTable.getElementsByTagName("tr")[r];
    let firstcoltrtd = firstRowtr.getElementsByTagName("td")[c];
    firstcoltrtd.style.background = "none";
  }
  // let sboxTable.getElementsByTagName('table')[0];
  else if (r > 0 || c > 0) {
    let insideSbox_SBoxArraytabletr = sboxTable.getElementsByTagName("tr")[r];
    let insideSbox_SBoxArraytabletrtd =
      insideSbox_SBoxArraytabletr.getElementsByTagName("td")[c];

    for (let i = 0; i < c; i++) {
      let highLightedRow = sboxTable.getElementsByTagName("tr")[r];
      let highLightedtrtd = highLightedRow.getElementsByTagName("td")[i];
      highLightedtrtd.style.background = "none";
    }
    for (let i = 0; i < r; i++) {
      let highlightedColumntr = sboxTable.getElementsByTagName("tr")[i];
      let highLightedColumntrtd =
        highlightedColumntr.getElementsByTagName("td")[c];
      highLightedColumntrtd.style.background = "none";
    }
    insideSbox_SBoxArraytabletrtd.style.background = "none";
  }
}

function insideSBox(sboxTable, newState, r, c, sr, sc) {
  let insideSbox_SBoxArraytabletr = sboxTable.getElementsByTagName("tr")[sr];
  let insideSbox_SBoxArraytabletrtd =
    insideSbox_SBoxArraytabletr.getElementsByTagName("td")[sc];
  for (let i = 0; i < sc; i++) {
    let highLightedRow = sboxTable.getElementsByTagName("tr")[sr];
    let highLightedtrtd = highLightedRow.getElementsByTagName("td")[i];
    highLightedtrtd.style.background = "lightgreen";
  }
  for (let i = 0; i < sr; i++) {
    let highlightedColumntr = sboxTable.getElementsByTagName("tr")[i];
    let highLightedColumntrtd =
      highlightedColumntr.getElementsByTagName("td")[sc];
    highLightedColumntrtd.style.background = "lightgreen";
  }
  // console.log(sboxRow,sboxColumn);
  insideSbox_SBoxArraytabletrtd.style.background = "green";

  let substitutedValue = insideSbox_SBoxArraytabletrtd.innerHTML;

  let subByteNewStateTable = newState.getElementsByTagName("table")[0];
  let subByteNewStateTabletr =
    subByteNewStateTable.getElementsByTagName("tr")[r];
  let subByteNewStateTabletrtd =
    subByteNewStateTabletr.getElementsByTagName("td")[c];
  subByteNewStateTabletrtd.innerHTML = `${substitutedValue}`;

  // Dynamically update the human-readable explanation below the table
  let originalValue = sr.toString(16) + sc.toString(16);

  const isLastRound = newState.id.includes("LastRound");
  const explanationDivId = isLastRound ? "sboxStepExplanationLastRound" : "sboxStepExplanationTheRound";
  const explanationDiv = document.getElementById(explanationDivId);
  if (explanationDiv) {
    explanationDiv.innerHTML = `
      <div class="step-desc-card">
        <div class="step-desc-header">Substituting State Array cell: <strong>Row ${r}, Column ${c}</strong></div>
        <div class="step-desc-body">
          <p>1. The value in the state array cell is <code class="hex-badge yellow-badge">${originalValue.toUpperCase()}</code>.</p>
          <p>2. We split <code class="hex-badge">${originalValue.toUpperCase()}</code> into two parts: first digit <code class="hex-badge">${sr.toString(16).toUpperCase()}</code> (determines S-Box row) and second digit <code class="hex-badge">${sc.toString(16).toUpperCase()}</code> (determines S-Box column).</p>
          <p>3. Looking up row <strong>${sr.toString(16).toUpperCase()}</strong>, column <strong>${sc.toString(16).toUpperCase()}</strong> in the S-Box table gives <code class="hex-badge green-badge">${substitutedValue.toUpperCase()}</code>.</p>
          <p>4. The original value <code class="hex-badge yellow-badge">${originalValue.toUpperCase()}</code> is replaced by <code class="hex-badge green-badge">${substitutedValue.toUpperCase()}</code> in the Output State Array at row ${r}, column ${c}.</p>
        </div>
      </div>
    `;
  }
}

//  inside mix column
function fillInsideMixColumnStateTable() {
  let insideMixColumnStateArray = document.getElementsByClassName(
    "insideMixColumndivTable",
  )[0];
  let insideMixColumnStateArrayTable =
    insideMixColumnStateArray.getElementsByTagName("table")[1];
  for (let i = 0; i < 4; i++) {
    let insideMixColumnStateArrayTabletr =
      insideMixColumnStateArrayTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      let insideMixColumnStateArrayTabletrtd =
        insideMixColumnStateArrayTabletr.getElementsByTagName("td")[j];
      insideMixColumnStateArrayTabletrtd.innerHTML = `${aesAnimationStateArr[i][j]}`;
    }
  }
}
let insideMixColRowIndex = 0;
let insideMixColColIndex = 0;
let creatingArrayIndex = 0;
function removehighLightRowAndColumnOfMixCol(
  RowIndexOfTable0,
  ColumnIndexOfTable1,
) {
  let prevColIndex = 0;
  let prevRowIndex = 0;
  if (ColumnIndexOfTable1 == 0 && RowIndexOfTable0 > 0) {
    prevColIndex = 3;
    prevRowIndex = RowIndexOfTable0 - 1;
  } else if (ColumnIndexOfTable1 > 0) {
    prevColIndex = ColumnIndexOfTable1 - 1;
  }
  let insideMixColumnStateArray = document.getElementsByClassName(
    "insideMixColumndivTable",
  )[0];
  let insideMixColumnConstantArrayTable =
    insideMixColumnStateArray.getElementsByTagName("table")[0];
  let insideMixColumnStateArrayTable =
    insideMixColumnStateArray.getElementsByTagName("table")[1];
  let insideMixColumnConstantArrayTabletr =
    insideMixColumnConstantArrayTable.getElementsByTagName("tr")[prevRowIndex];
  for (let j = 0; j < 4; j++) {
    let insideMixColumnConstantArrayTabletrtd =
      insideMixColumnConstantArrayTabletr.getElementsByTagName("td")[j];
    insideMixColumnConstantArrayTabletrtd.style.background = "none";
  }
  for (let i = 0; i < 4; i++) {
    let insideMixColumnStateArrayTabletr =
      insideMixColumnStateArrayTable.getElementsByTagName("tr")[i];
    let insideMixColumnStateArrayTabletrtd =
      insideMixColumnStateArrayTabletr.getElementsByTagName("td")[prevColIndex];
    insideMixColumnStateArrayTabletrtd.style.background = "none";
  }
}
function highLightRowAndColumnOfMixCol(RowIndexOfTable0, ColumnIndexOfTable1) {
  let insideMixColumnStateArray = document.getElementsByClassName(
    "insideMixColumndivTable",
  )[0];
  let insideMixColumnConstantArrayTable =
    insideMixColumnStateArray.getElementsByTagName("table")[0];
  let insideMixColumnStateArrayTable =
    insideMixColumnStateArray.getElementsByTagName("table")[1];
  let insideMixColumnConstantArrayTabletr =
    insideMixColumnConstantArrayTable.getElementsByTagName("tr")[
      RowIndexOfTable0
    ];
  for (let j = 0; j < 4; j++) {
    let insideMixColumnConstantArrayTabletrtd =
      insideMixColumnConstantArrayTabletr.getElementsByTagName("td")[j];
    insideMixColumnConstantArrayTabletrtd.style.background = "lightgreen";
  }
  for (let i = 0; i < 4; i++) {
    let insideMixColumnStateArrayTabletr =
      insideMixColumnStateArrayTable.getElementsByTagName("tr")[i];
    let insideMixColumnStateArrayTabletrtd =
      insideMixColumnStateArrayTabletr.getElementsByTagName("td")[
        ColumnIndexOfTable1
      ];
    insideMixColumnStateArrayTabletrtd.style.background = "lightgreen";
  }
}
function mixColumnColumnNGenerator() {
  if (insideMixColColIndex > 3) {
    insideMixColRowIndex++;
    creatingArrayIndex = 0;
    insideMixColColIndex = 0;
  }
  let insideMixColumnStateArray = document.getElementsByClassName(
    "insideMixColumndivTable",
  )[0];
  let insideMixColumnStateArrayTable =
    insideMixColumnStateArray.getElementsByTagName("table")[1];

  let arr = [];
  for (let i = 0; i < 4; i++) {
    let insideMixColumnStateArrayTabletr =
      insideMixColumnStateArrayTable.getElementsByTagName("tr")[i];
    let insideMixColumnStateArrayTabletrtd =
      insideMixColumnStateArrayTabletr.getElementsByTagName("td")[
        creatingArrayIndex
      ];
    arr[i] = insideMixColumnStateArrayTabletrtd.innerHTML;
  }
  console.log(arr);
  removehighLightRowAndColumnOfMixCol(
    insideMixColRowIndex,
    insideMixColColIndex,
  );
  highLightRowAndColumnOfMixCol(insideMixColRowIndex, insideMixColColIndex);
  simulationMixColumns(arr, insideMixColRowIndex);
  creatingArrayIndex++;
  insideMixColColIndex++;
}
let rowIndex = 0;
let colIndex = 0;
function simulationMixColumns(Col, i) {
  if (colIndex > 3) {
    rowIndex++;
    colIndex = 0;
  }
  let insideMixColumnStateArray = document.getElementsByClassName(
    "insideMixColumndivTable",
  )[0];
  let insideMixColumnConstantTable =
    insideMixColumnStateArray.getElementsByTagName("table")[0];
  let insideMixColumnNewStateTable =
    insideMixColumnStateArray.getElementsByTagName("table")[2];
  let insideMixColumnConstantTabletr =
    insideMixColumnConstantTable.getElementsByTagName("tr")[i];
  let insideMixColumnNewStateTabletr =
    insideMixColumnNewStateTable.getElementsByTagName("tr")[rowIndex];

  let insideMixColumnSteps = document.getElementsByClassName(
    "insideMixColumndivTheory",
  )[0];

  let rowColValue = "";
  let binaryString = "";
  let rowarr = [];
  for (let idx = 0; idx < 4; idx++) {
    let insideMixColumnConstantTabletrtd =
      insideMixColumnConstantTabletr.getElementsByTagName("td")[idx];
    rowColValue += `(${insideMixColumnConstantTabletrtd.innerHTML} * ${Col[idx]}) + `;
    rowarr[idx] = insideMixColumnConstantTabletrtd.innerHTML;
    binaryString += `(${parseInt(insideMixColumnConstantTabletrtd.innerHTML, 16).toString(2)})(${parseInt(Col[idx], 16).toString(2)}) + `;
  }
  let xorSum = 0;
  let multipliedFunctionVal;
  let irreducable = 283; //11b;
  multipliedFunctionVal = generateSimulationHexaNumber(rowarr, Col);
  if (multipliedFunctionVal > 255) {
    xorSum = multipliedFunctionVal ^ irreducable;
  } else {
    xorSum = multipliedFunctionVal;
  }
  let multipliedValPolynomialString = convertBinaryIntoPolynmial2(
    multipliedFunctionVal,
  );
  let xorSumPolynomialString = convertBinaryIntoPolynmial2(xorSum);
  
  // Format Row Col Value and Binary String to look nice (remove trailing " + ")
  let formattedRowCol = rowColValue.trim().slice(0, -1);
  let formattedBinary = binaryString.trim().slice(0, -1);

  let originalCalculationHtml = `
    <div class="step-desc-card" style="margin-top: 0;">
      <div class="step-desc-header">Computing State Cell: <strong>Row ${rowIndex}, Column ${colIndex}</strong></div>
      <div class="step-desc-body" style="font-size: 0.8rem; line-height: 1.45;">
        <p><strong>1. Dot Product:</strong> Constant Matrix Row ${i} × State Column ${colIndex}:
          <br><code class="hex-badge">${formattedRowCol}</code>
        </p>
        <p><strong>2. Binary Representation:</strong>
          <br><code style="font-size:0.75rem; word-break:break-all; font-family: monospace;">${formattedBinary}</code>
        </p>
        <p><strong>3. Polynomial Multiplication per term:</strong>
          <ul style="margin-left: 1.2rem; font-family: monospace; font-size: 0.72rem; color: #475569; padding-left: 0;">
  `;
  
  for (let idx = 0; idx < 4; idx++) {
    let termConst = rowarr[idx];
    let termState = Col[idx];
    let termPolynomial = convertBinaryIntoPolynmial(
      parseInt(termConst, 16).toString(2),
      parseInt(termState, 16).toString(2)
    );
    originalCalculationHtml += `<li style="margin-bottom: 2px;">Term ${idx}: <code class="hex-badge">${termConst}</code> × <code class="hex-badge">${termState}</code> → <code>${termPolynomial}</code></li>`;
  }
  
  originalCalculationHtml += `
        </ul>
        </p>
        <p><strong>4. Combined Polynomial:</strong>
          <br><code class="hex-badge">${multipliedValPolynomialString || '0'}</code>
        </p>
        <p><strong>5. GF(2^8) Reduction (Modulo irreducible polynomial if degree ≥ 8):</strong>
          <br>Reduced Polynomial: <code class="hex-badge green-badge">${xorSumPolynomialString || '0'}</code>
        </p>
        <p><strong>6. Result Output:</strong>
          <br>Binary: <code>${parseInt(xorSum, 10).toString(2).padStart(8, '0')}</code> → Hexadecimal: <code class="hex-badge green-badge">${parseInt(xorSum, 10).toString(16).toUpperCase()}</code>
        </p>
      </div>
    </div>
  `;
  
  if (insideMixColumnSteps) {
    insideMixColumnSteps.innerHTML = originalCalculationHtml;
  }
  
  let insideMixColumnNewStateTabletrtd =
    insideMixColumnNewStateTabletr.getElementsByTagName("td")[colIndex];
  insideMixColumnNewStateTabletrtd.innerHTML = `${parseInt(xorSum, 10).toString(16)}`;
  colIndex++;
}
function convertBinaryIntoPolynmial(p1, p2) {
  let b1 = p1;
  let b2 = p2;
  let string1 = "";
  let string2 = "";
  console.log(p1);
  console.log(p2);
  for (let i = 0; i < b1.length; i++) {
    if (b1.charAt(i) == 1) {
      string1 += `x^${b1.length - 1 - i} + `;
    }
  }
  string1 = `(${string1})`;
  for (let i = 0; i < b2.length; i++) {
    if (b2.charAt(i) == 1) {
      string2 += `x^${b2.length - 1 - i} + `;
    }
  }
  string2 = `(${string2})`;

  return string1 + string2;
}
function generateSimulationHexaNumber(row, col) {
  const combined = {};
  for (let i = 0; i < 4; i++) {
    let b1arr = [];
    let b2arr = [];
    let b1 = parseInt(row[i], 16).toString(2);
    let b2 = parseInt(col[i], 16).toString(2);
    for (let i = b1.length - 1; i >= 0; i--) {
      if (b1.charAt(i) == 1) {
        b1arr.push(b1.length - 1 - i);
      }
    }
    for (let j = b2.length - 1; j >= 0; j--) {
      if (b2.charAt(j) == 1) {
        b2arr.push(b2.length - 1 - j);
      }
    }
    b1arr.forEach((elem) => {
      b2arr.forEach((b2elem) => {
        let sum = elem + b2elem;
        if (combined[sum] > 0) {
          combined[sum] = combined[sum] + 1;
        } else {
          combined[sum] = 1;
        }
      });
    });
  }
  let binary = 0;
  let num = Object.keys(combined)[Object.keys(combined).length - 1];
  for (let i = num; i >= 0; i--) {
    if (combined[i] == undefined) {
      //continue;
      binary += "0";
    } else if (combined[i] % 2 != 0) {
      binary += "1";
    } else {
      binary += "0";
    }
  }
  // return binary;
  // console.log(binary);
  return parseInt(binary, 2);
}
function convertBinaryIntoPolynmial2(p1) {
  let str = "";
  let binary = parseInt(p1, 10).toString(2);
  for (let k = 0; k < binary.length; k++) {
    if (binary.charAt(k) == 1) {
      str += `x^${binary.length - 1 - k} + `;
    }
  }
  return str;
}
function insideMixedColReset() {
  // removehighLightRowAndColumnOfMixCol(RowIndexOfTable0,ColumnIndexOfTable1)
  insideMixColRowIndex = 0;
  insideMixColColIndex = 0;
  creatingArrayIndex = 0;
  rowIndex = 0;
  colIndex = 0;
  let insideMixColumnStateArray = document.getElementsByClassName(
    "insideMixColumndivTable",
  )[0];
  let insideMixColumnNewStateTable =
    insideMixColumnStateArray.getElementsByTagName("table")[2];
  let insideMixColumnStateArrayTable =
    insideMixColumnStateArray.getElementsByTagName("table")[1];
  let insideMixColumnConstantTable =
    insideMixColumnStateArray.getElementsByTagName("table")[0];
  for (let i = 0; i < 4; i++) {
    let insideMixColumnNewStateTabletr =
      insideMixColumnNewStateTable.getElementsByTagName("tr")[i];
    let insideMixColumnStateArrayTabletr =
      insideMixColumnStateArrayTable.getElementsByTagName("tr")[i];
    let insideMixColumnConstantTabletr =
      insideMixColumnConstantTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      let insideMixColumnNewStateTabletrtd =
        insideMixColumnNewStateTabletr.getElementsByTagName("td")[j];
      let insideMixColumnStateArrayTabletrtd =
        insideMixColumnStateArrayTabletr.getElementsByTagName("td")[j];
      let insideMixColumnConstantTabletrtd =
        insideMixColumnConstantTabletr.getElementsByTagName("td")[j];
      insideMixColumnNewStateTabletrtd.innerHTML = "";
      insideMixColumnStateArrayTabletrtd.style.background = "none";
      insideMixColumnConstantTabletrtd.style.background = "none";
    }
  }

  // Reset the explanation text in the simulation modal
  let insideMixColumnSteps = document.getElementsByClassName(
    "insideMixColumndivTheory",
  )[0];
  if (insideMixColumnSteps) {
    insideMixColumnSteps.innerHTML = `
      <div class="step-desc-card" style="margin-top: 0;">
        <div class="step-desc-header">Simulation Initialized</div>
        <div class="step-desc-body">
          <p>Click the <strong>Next</strong> button to begin the column mixing process step-by-step for each cell in the State Array.</p>
        </div>
      </div>
    `;
  }
}

function generateSBoxHtmlTable() {
  let html = `<div style="margin-bottom: 1rem; font-weight: bold; color: #4c1c8a;">AES S-Box Lookup Table (Hexadecimal)</div>`;
  html += `<p style="font-size: 0.8rem; color: #475569; margin-bottom: 0.5rem;">Clicking or hovering over cells shows their mapping coordinates. Row specifies the first hex digit, column specifies the second hex digit.</p>`;
  html += `<div class="sbox-table-wrapper"><table class="sbox-theory-table">`;
  
  // Header row
  html += `<tr><th>R \\ C</th>`;
  for (let c = 0; c < 16; c++) {
    html += `<th>${c.toString(16).toUpperCase()}</th>`;
  }
  html += `</tr>`;
  
  // Rows
  for (let r = 0; r < 16; r++) {
    html += `<tr><td class="header-cell">${r.toString(16).toUpperCase()}</td>`;
    for (let c = 0; c < 16; c++) {
      let val = aesSBox[r][c];
      let hexVal = val.toString(16).padStart(2, '0').toUpperCase();
      html += `<td title="Input: 0x${r.toString(16)}${c.toString(16)} -> Output: 0x${hexVal}"><strong>${hexVal}</strong></td>`;
    }
    html += `</tr>`;
  }
  
  html += `</table></div>`;
  html += `<div style="margin-top: 1rem; padding: 0.8rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 6px; font-size: 0.82rem; color: #0369a1;">`;
  html += `<strong>Lookup Example:</strong> To substitute byte <code class="hex-badge">95</code>: split it into Row <code class="hex-badge">9</code> and Column <code class="hex-badge">5</code>. The S-Box lookup at row 9, col 5 is <code class="hex-badge green-badge">2A</code>.`;
  html += `</div>`;
  return html;
}

function generateMixColumnsTheoryHtml() {
  let html = `
    <div style="font-family: 'Montserrat', sans-serif; color: #2c3e50; line-height: 1.6;">
      <h4 style="color: #4c1c8a; font-weight: 700; margin-bottom: 0.8rem;">Introduction to Galois Field GF(2^8)</h4>
      <p style="font-size: 0.88rem; color: #4a5568; margin-bottom: 1rem;">
        In AES, all operations are performed on 8-bit bytes. When we multiply two bytes, the result can easily exceed 8 bits (e.g. $2 \\times 150 = 300$, which requires 9 bits). To prevent overflow and ensure that every multiplication results in a valid 8-bit byte, AES uses **Galois Field GF(2^8)** arithmetic.
      </p>
      <p style="font-size: 0.88rem; color: #4a5568; margin-bottom: 1rem;">
        In GF(2^8):
        <ul style="margin-left: 1.5rem; margin-bottom: 1rem; font-size: 0.85rem; color: #4a5568; padding-left: 0;">
          <li style="margin-bottom: 5px;"><strong>Addition:</strong> Performed using bitwise <strong>XOR</strong> (no carry). E.g. <code class="hex-badge">0x57 ⊕ 0x83 = 0xD4</code>.</li>
          <li style="margin-bottom: 5px;"><strong>Multiplication:</strong> Performed by treating bytes as polynomials (up to degree 7) and reducing the result modulo the irreducible polynomial:
            <br><code class="hex-badge">x^8 + x^4 + x^3 + x + 1</code> (represented as <code class="hex-badge">0x11B</code> or <code class="hex-badge">283</code> in decimal).
          </li>
        </ul>
      </p>

      <h4 style="color: #4c1c8a; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.8rem;">The MixColumns Transformation Matrix</h4>
      <p style="font-size: 0.88rem; color: #4a5568; margin-bottom: 0.8rem;">
        Each column of the State Array is multiplied by a constant circulant matrix:
      </p>
      <div class="matrix-container" style="justify-content: center; margin-bottom: 1.5rem;">
        <div class="matrix-block" style="padding: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
          <div class="matrix-block-title" style="font-size:0.7rem;">Constant Matrix</div>
          <table class="matrix-table">
            <tr><td>02</td><td>03</td><td>01</td><td>01</td></tr>
            <tr><td>01</td><td>02</td><td>03</td><td>01</td></tr>
            <tr><td>01</td><td>01</td><td>02</td><td>03</td></tr>
            <tr><td>03</td><td>01</td><td>01</td><td>02</td></tr>
          </table>
        </div>
        <div class="matrix-operator">×</div>
        <div class="matrix-block" style="padding: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
          <div class="matrix-block-title" style="font-size:0.7rem;">Input Col</div>
          <table class="matrix-table" style="width: 2.2rem;">
            <tr><td>C[0]</td></tr>
            <tr><td>C[1]</td></tr>
            <tr><td>C[2]</td></tr>
            <tr><td>C[3]</td></tr>
          </table>
        </div>
        <div class="matrix-operator">=</div>
        <div class="matrix-block" style="padding: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
          <div class="matrix-block-title" style="font-size:0.7rem;">Output Col</div>
          <table class="matrix-table" style="width: 2.2rem;">
            <tr><td>C'[0]</td></tr>
            <tr><td>C'[1]</td></tr>
            <tr><td>C'[2]</td></tr>
            <tr><td>C'[3]</td></tr>
          </table>
        </div>
      </div>

      <h4 style="color: #4c1c8a; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.8rem;">Step-by-Step GF(2^8) Multiplication Example</h4>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; font-size: 0.85rem; color: #334155;">
        <p style="margin-bottom: 0.5rem;"><strong>Task:</strong> Compute multiplication of <code class="hex-badge">02</code> and <code class="hex-badge">0x87</code> in GF(2^8).</p>
        <p style="margin-bottom: 0.5rem;"><strong>1. Convert to Binary &amp; Polynomial:</strong></p>
        <p style="margin-left: 1rem; margin-bottom: 0.5rem;">
          <code class="hex-badge">0x87</code> = <code>10000111</code> in binary = <code class="hex-badge">x^7 + x^2 + x + 1</code>.
        </p>
        <p style="margin-bottom: 0.5rem;"><strong>2. Multiply by 02 (Shift Left):</strong></p>
        <p style="margin-left: 1rem; margin-bottom: 0.5rem;">
          Multiplying by <code class="hex-badge">02</code> is equivalent to multiplying by <code class="hex-badge">x</code>:
          <br><code>x × (x^7 + x^2 + x + 1) = x^8 + x^3 + x^2 + x</code>.
        </p>
        <p style="margin-bottom: 0.5rem;"><strong>3. Modulo Reduction:</strong></p>
        <p style="margin-left: 1rem; margin-bottom: 0.5rem;">
          Since we have an <code class="hex-badge">x^8</code> term, the result overflows 8 bits. We must subtract (XOR) the irreducible polynomial <code class="hex-badge">x^8 + x^4 + x^3 + x + 1</code>:
          <br><code>(x^8 + x^3 + x^2 + x) ⊕ (x^8 + x^4 + x^3 + x + 1) = x^4 + x^2 + 1</code>.
        </p>
        <p style="margin-bottom: 0.5rem;"><strong>4. Convert back to Hexadecimal:</strong></p>
        <p style="margin-left: 1rem; margin-bottom: 0;">
          <code class="hex-badge">x^4 + x^2 + 1</code> = <code>00010101</code> in binary = <code class="hex-badge green-badge">0x15</code>.
          <br>Therefore, <code class="hex-badge">02 × 0x87 = 0x15</code> in GF(2^8).
        </p>
      </div>
    </div>
  `;
  return html;
}

function openTheoryStepModal(step) {
  const modal = document.getElementById("theoryModal");
  const title = document.getElementById("theoryModalTitle");
  const desc = document.getElementById("theoryModalDesc");
  const illustration = document.getElementById("theoryModalIllustration");
  const code = document.getElementById("theoryModalCode");
  
  // Toggle full-width layout for steps with wide content (subbytes tables and mixcolumns formulas)
  const modalBody = document.getElementById("theoryModalBody");
  if (modalBody) {
    if (step === 'subbytes' || step === 'mixcolumns') {
      modalBody.classList.add("full-width-body");
    } else {
      modalBody.classList.remove("full-width-body");
    }
  }
  
  if (step === 'subbytes') {
    title.innerText = "SubBytes (Byte Substitution)";
    desc.innerText = "SubBytes is a non-linear byte substitution step where each byte in the state matrix is replaced with a sub-byte from a 256-element lookup table called the S-Box. The S-Box is designed to be resistant to linear and differential cryptanalysis. The substitution is done by splitting each byte into two hexadecimal digits: the first digit determines the row, and the second digit determines the column of the S-Box.";
    
    // Generate and show the interactive S-box Values Table
    illustration.innerHTML = generateSBoxHtmlTable();
    illustration.style.fontFamily = "inherit";
    illustration.style.whiteSpace = "normal";
    
    code.innerText = `function sBoxByteSubstitution(row) {\n  row.forEach((elem, index) => {\n    if (elem.length == 1) {\n      let sValue = aesSBox[0][parseInt(elem.charAt(0), 16)];\n      row.splice(index, 1, sValue.toString(16));\n    } else {\n      let sValue =\n        aesSBox[parseInt(elem.charAt(0), 16)][parseInt(elem.charAt(1), 16)];\n      row.splice(index, 1, sValue.toString(16));\n    }\n  });\n}`;
  } else {
    // Reset illustration style for text display
    illustration.style.fontFamily = "monospace";
    illustration.style.whiteSpace = "pre-wrap";
    
    if (step === 'shiftrows') {
      title.innerText = "ShiftRows (Row Permutation)";
      desc.innerText = "ShiftRows is a permutation step that operates on the rows of the state array. It cyclically shifts the bytes in each row by a certain offset. Row 0 is not shifted, Row 1 is shifted left by 1 byte, Row 2 is shifted left by 2 bytes, and Row 3 is shifted left by 3 bytes. This step ensures that the bytes in each column are spread out across other columns, promoting diffusion.";
      illustration.innerText = `Before ShiftRows:\n[ s0,0  s0,1  s0,2  s0,3 ]\n[ s1,0  s1,1  s1,2  s1,3 ]\n[ s2,0  s2,1  s2,2  s2,3 ]\n[ s3,0  s3,1  s3,2  s3,3 ]\n\nAfter ShiftRows:\n[ s0,0  s0,1  s0,2  s0,3 ]  <- No shift\n[ s1,1  s1,2  s1,3  s1,0 ]  <- Shift left 1\n[ s2,2  s2,3  s2,0  s2,1 ]  <- Shift left 2\n[ s3,3  s3,0  s3,1  s3,2 ]  <- Shift left 3`;
      code.innerText = `function shiftRow(row, count) {\n  for (let i = 0; i < count; i++) {\n    let temp = row[0];\n    row.splice(0, 1);\n    row.splice(3, 0, temp);\n  }\n}`;
    } else if (step === 'mixcolumns') {
      title.innerText = "MixColumns (Column Mixing)";
      desc.innerText = "MixColumns is a linear transformation step that mixes the bytes in each column of the state array. It operates on columns individually, treating each column as a four-term polynomial over Galois Field GF(2^8). Each column is multiplied by a fixed circulant polynomial matrix. In Galois Field multiplication, addition is represented by bitwise XOR, and multiplication uses specific irreducible polynomials to fit values within 8 bits (modulo 0x11B).";
      
      // Update with readable example and Galois Field GF(2^8) theory
      illustration.innerHTML = generateMixColumnsTheoryHtml();
      illustration.style.fontFamily = "inherit";
      illustration.style.whiteSpace = "normal";
      
      code.innerText = `function mixColumns(state, row, c) {\n  for (let i = 0; i < 4; i++) {\n    let multipliedInt;\n    let irreducable = 283; // 11B (x^8 + x^4 + x^3 + x + 1)\n    let xorSum = 0;\n    for (let j = 0; j < 4; j++) {\n      multipliedFunctionVal = generateHexaNumber(mixColConstArr[i][j], row[j]);\n      if (multipliedFunctionVal <= 255) {\n        xorSum = xorSum ^ multipliedFunctionVal;\n      } else {\n        multipliedInt = multipliedFunctionVal ^ irreducable;\n        xorSum = xorSum ^ multipliedInt;\n      }\n    }\n    state[i][c] = xorSum.toString(16);\n  }\n}`;
    } else if (step === 'addroundkey') {
      title.innerText = "AddRoundKey (Key XOR)";
      desc.innerText = "AddRoundKey is the step where the state array is combined with the subkey for that round. Each byte of the state array is combined with a byte of the round key using a bitwise XOR (exclusive OR) operation. This is the only step in the cipher that directly involves the secret key, making it the source of security.";
      illustration.innerText = `State Byte:   0x2E  ->  00101110\nXOR Key Byte: 0xA5  ->  10100101\n-------------------------------\nOutput Byte:  0x8B  ->  10001011`;
      code.innerText = `function xorTextAndKey(state, keyArr) {\n  for (let i = 0; i < 4; i++) {\n    for (let j = 0; j < 4; j++) {\n      let intVal = parseInt(state[i][j], 16) ^ parseInt(keyArr[i][j], 16);\n      state[i][j] = intVal.toString(16);\n    }\n  }\n}`;
    }
  }
  
  modal.style.display = "flex";
}

function closeTheoryStepModal() {
  const modal = document.getElementById("theoryModal");
  modal.style.display = "none";
}

window.addEventListener('click', (event) => {
  const modal = document.getElementById("theoryModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
