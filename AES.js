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
    "aesTransformedTable"
  )[0];
  transformedSpan = transformedValueTable.getElementsByTagName("span")[0];

  simulationStringDiv = document.getElementsByClassName(
    "simulationStringDiv"
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
      +subStringCounter + +16
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
function resetSimulationInitialConfiguration(){
  let Plaintext = document.getElementById("aesplaintext");
  let Ciphertext = document.getElementById("aesciphertext");
  let Key = document.getElementById("aeskey");

  Plaintext.value = "";
  Ciphertext.value = "";
  Key.value ="" ;
  transformedSpan.innerHTML = "";

  for(let i = 0;i<4;i++){
    let statetr = stateTable.rows[i];
    let firstKeytr = roundOneKeyTable.rows[i];
    let roundKeytr = theRoundKeyTable.rows[i]
    let lastKeytr = roundKeyLastTable.rows[i]
    
    for(let j = 0 ;j<4;j++){
      statetr.deleteCell(0);
      firstKeytr.deleteCell(0);
      roundKeytr.deleteCell(0);
      lastKeytr.deleteCell(0);
    }
    
  }
  for(let i =0;i<=10;i++){
    let Round = document.getElementsByClassName("aesRoundValue")[i];
    for(let j=0;j<5;j++){
      let tablePerRound = Round.getElementsByTagName("table")[j];
      while(tablePerRound.rows[0]){
        tablePerRound.deleteRow(0);
      }
       
    }
  }
  const lastRound = document.getElementsByClassName("finalOutputValue")[0];
  const LastRoundTable = lastRound.getElementsByTagName("table")[0];
  while(LastRoundTable.rows[0]){
    LastRoundTable.deleteRow(0);
  }
  aesAnimationReset();
  
  
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
      initialRoundTr.appendChild(
        initialRoundTd
      ).innerHTML = `${keyArrays["rKA0"][i][j]}`;

      theRoundTr.appendChild(
        theRoundTd
      ).innerHTML = `${keyArrays["rKA1"][i][j]}`;
      lastRoundTr.appendChild(
        lastRoundTd
      ).innerHTML = `${keyArrays["rKA10"][i][j]}`;

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
      const tdVal=td.innerHTML="xx";
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
  transformedSpan.innerHTML = str;
  //print(aesPlainHexArr);
  aesCiphertext += convertIntoBase64(str);
  //generateAesCipherText();
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
        row[j]
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
      +subStringCounter + +22
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
function updateSimulationKeyArray(key) {
  for (let i = 0; i < 4; i++) {
    const KeyTr = theRoundKeyTable.getElementsByTagName("tr")[i];
    for (let j = 0; j < 4; j++) {
      const trVal = KeyTr.getElementsByTagName("td")[j];
      trVal.innerHTML = `${key[i][j]}`;
    }
  }
}

const aesNextButton = document.getElementById("aesNextButton");
aesNextButton.addEventListener("click", eval(aesSimulateFunction));
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
  // aesStateArray.classList.remove('aesFirstMoveAnimation');
  aesStateArray.classList.add("aesFirstMoveAnimation");
  roundOneKeyTable.classList.add("aesKeyMoveAnimation");
  interchangeRowAndColumn(aesAnimationStateArr);
  interchangeRowAndColumnForKey(keyArrays["rKA0"]);
  let zerothRoundXorKeyDiv = document.getElementById('insideXorKey0thRound');
  fillinsideXorKeyTableValue(zerothRoundXorKeyDiv,aesAnimationStateArr, keyArrays["rKA0"]);
  interchangeRowAndColumnForKey(keyArrays["rKA0"]);
  interchangeRowAndColumn(aesAnimationStateArr);
  setTimeout(() => {
    xorTextAndKey(aesAnimationStateArr, keyArrays["rKA0"]);
    interchangeRowAndColumn(aesAnimationStateArr);
    updateSimulationStateArray();
    
  }, 1000);
  setTimeout(() => {
    ch3.innerHTML = `${aesRoundCounter}`;
  }, 3000);
  aesFunctionCount++;
}

function aesSimulateNRoundSubByte() {
  aesStateArray.classList.remove("aesTraverseBackMoveAnimation");
  aesStateArray.classList.add("aesSubBytesMoveAnimation");
  fillInsideSboxTable();
  setTimeout(() => {
    aesAnimationStateArr.forEach((rows) => {
      sBoxByteSubstitution(rows);
    });
    // interchangeRowAndColumn(aesAnimationStateArr);
    updateSimulationStateArray();
  }, 1000);
  setTimeout(()=>{
    insideSBoxReset();
  },2000);
  theRoundSubCount++;
}

function aesSimulateNRoundShiftrow() {
  aesStateArray.classList.add("aesShiftrowMoveAnimation");

  // inside shift row code 
  const shiftRowStateArray1 = document.getElementsByClassName('insideShiftRowsTable1')[0];
  const shiftRowStateArray2 = document.getElementsByClassName('insideShiftRowsTable2')[0];
  for(let i = 0;i<4;i++){
    let shiftRowStateArrayTable = shiftRowStateArray1.getElementsByTagName('table')[i];
    let shiftRowStateArrayTabletr = shiftRowStateArrayTable.getElementsByTagName('tr')[0];
    for(let j = 0;j<4;j++){
      let shiftRowStateArrayTabletrtd = shiftRowStateArrayTabletr.getElementsByTagName('td')[j];
      shiftRowStateArrayTabletrtd.innerHTML=`${aesAnimationStateArr[i][j]}`;
    }
  }
  // 
  
  setTimeout(() => {
    aesAnimationStateArr.forEach((row, index) => {
      shiftRow(row, index);
    });
    updateSimulationStateArray();
  }, 1000);
  
  // inside shift row code here also
  setTimeout(()=>{
    let shiftRowStateArrayTable = shiftRowStateArray2.getElementsByTagName('table')[0];
    for(let i = 0;i<4;i++){ 
      let shiftRowStateArrayTabletr = shiftRowStateArrayTable.getElementsByTagName('tr')[i];
      for(let j = 0;j<4;j++){
        let shiftRowStateArrayTabletrtd = shiftRowStateArrayTabletr.getElementsByTagName('td')[j];
        shiftRowStateArrayTabletrtd.innerHTML=`${aesAnimationStateArr[i][j]}`;
      }
    }

  },2000);
  
  theRoundSubCount++;
}
function aesSimulateNRoundMixCol() {
  aesStateArray.classList.add("aesMixColMoveAnimation");
  fillInsideMixColumnStateTable();
  setTimeout(() => {
    for (let i = 0; i < 4; i++) {
      let arr = [];
      for (let j = 0; j < 4; j++) {
        arr[j] = aesAnimationStateArr[j][i];
      }
      mixColumns(aesAnimationStateArr, arr, i);
    }
    updateSimulationStateArray();
  }, 1000);
  setTimeout(()=>{
    insideMixedColReset();
  },2000);
  theRoundSubCount++;
}
function aesSimulateNRoundXorKey() {
  if (aesRoundCounter == 9) {
    aesFunctionCount++;
    // aesRoundCounter++;
  }
  aesStateArray.classList.add("aesXorKeyMoveAnimation");
  theRoundKeyTable.classList.add("aesKeyMoveAnimation");
  let theRoundXorKeyDiv = document.getElementById('insideXorKeytheRound');
  interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
  insideXorKeyTheRoundReset();
  fillinsideXorKeyTableValue(theRoundXorKeyDiv,aesAnimationStateArr,keyArrays[`${"rKA" + aesRoundCounter}`])
  setTimeout(() => {
    
    xorTextAndKey(
      aesAnimationStateArr,
      keyArrays[`${"rKA" + aesRoundCounter}`]
    );
    updateSimulationStateArray();
    // interchangeRowAndColumn(aesAnimationStateArr);
    interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
  }, 1000);
  
  theRoundSubCount++;
}
let aesRound = document.getElementsByClassName("counter")[0];
let ch3 = aesRound.getElementsByTagName("h3")[0];

function aesSimulateNRoundTraverseBack() {
  aesStateArray.classList.add("aesTraverseBackMoveAnimation");
  aesStateArray.classList.remove("aesSubBytesMoveAnimation");
  aesStateArray.classList.remove("aesShiftrowMoveAnimation");
  aesStateArray.classList.remove("aesMixColMoveAnimation");
  aesStateArray.classList.remove("aesXorKeyMoveAnimation");
  theRoundKeyTable.classList.remove("aesKeyMoveAnimation");

  theRoundSubCount = 1;
  aesRoundCounter++;
  interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
  setTimeout(() => {
    updateSimulationKeyArray(keyArrays[`${"rKA" + aesRoundCounter}`]);
  }, 2000);
  setTimeout(() => {
    ch3.innerHTML = `${aesRoundCounter}`;
    interchangeRowAndColumnForKey(keyArrays[`${"rKA" + aesRoundCounter}`]);
  }, 3000);
}

function aesLastRoundSubByte() {
  aesStateArray.classList.add("aesLastRoundSubByteMoveAnimation");
  setTimeout(() => {
    aesAnimationStateArr.forEach((rows) => {
      sBoxByteSubstitution(rows);
    });
    // interchangeRowAndColumn(aesAnimationStateArr);
    updateSimulationStateArray();
  }, 1000);
  aesLastRoundSubRound++;
}
function aesLastRoundShiftRows() {
  aesStateArray.classList.add("aesLastRoundShiftRowsMoveAnimation");
  setTimeout(() => {
    aesAnimationStateArr.forEach((row, index) => {
      shiftRow(row, index);
    });
    updateSimulationStateArray();
  }, 1000);
  aesLastRoundSubRound++;
}
function aesLastRoundXorKey() {
  aesStateArray.classList.add("aesLastRoundXorKeyMoveAnimation");
  roundKeyLastTable.classList.add("aesKeyMoveAnimation");
  let lastRoundXorKeyDiv = document.getElementById('insideXorKeyLastRound');
  interchangeRowAndColumnForKey(keyArrays["rKA10"]);
  fillinsideXorKeyTableValue(lastRoundXorKeyDiv,aesAnimationStateArr,keyArrays['rKA10']);
  setTimeout(() => {
    
    xorTextAndKey(aesAnimationStateArr, keyArrays["rKA10"]);
    updateSimulationStateArray();
    // interchangeRowAndColumn(aesAnimationStateArr);
    interchangeRowAndColumnForKey(keyArrays["rKA10"]);
  }, 1000);
  
}

function aesAnimationSkipStep() {
  let time1 = 0;
  let time2 = 3000;
  let time3 = 6000;
  let time4 = 9000;
  let time5 = 12000;

  let timeLast1 = 0;
  let timeLast2 = 3000;
  let timeLast3 = 6000;
  
  if (aesFunctionCount == 0) {
    aesSimulateRound0();
  } else if (aesFunctionCount == 1) {
    
    switch (theRoundSubCount) {
        case 1: {
          break;
        }
        case 2: {
          time2 = 0;
          time3 = 3000;
          time4 = 6000;
          time5 = 9000;
          break;
        }
        case 3: {
          time3 = 0;
          time4 = 3000;
          time5 = 6000;
          break;
        }
        case 4: {
          time4 = 0;
          time5 = 3000;
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
  }else if(aesFunctionCount == 2){

    switch (aesLastRoundSubRound) {
        case 1: {
          break;
        }
        case 2: {
          timeLast2 = 0;
          timeLast3 = 3000;
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

function aesAnimationStateArrayReset(){
  let k = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      aesAnimationStateArr[i][j] = aesPlaintext.charCodeAt(k).toString(16);
      k++;
    }
  }

}

function aesSimulationKeyReset(){
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

function aesAnimationReset(){
  aesStateArray.classList.remove("aesFirstMoveAnimation");

  aesStateArray.classList.remove("aesSubBytesMoveAnimation");
  aesStateArray.classList.remove("aesShiftrowMoveAnimation");
  aesStateArray.classList.remove("aesMixColMoveAnimation");
  aesStateArray.classList.remove("aesXorKeyMoveAnimation");

  aesStateArray.classList.remove("aesTraverseBackMoveAnimation");
  aesStateArray.classList.remove("aesLastRoundSubByteMoveAnimation");
  aesStateArray.classList.remove("aesLastRoundShiftRowsMoveAnimation");
  aesStateArray.classList.remove("aesLastRoundXorKeyMoveAnimation{");

  roundOneKeyTable.classList.remove("aesKeyMoveAnimation");
  theRoundKeyTable.classList.remove("aesKeyMoveAnimation");
  roundKeyLastTable.classList.remove("aesKeyMoveAnimation");
  
  aesRoundCounter = 1;
  aesFunctionCount = 0;
  theRoundSubCount = 1;
  aesLastRoundSubRound = 1;
  ch3.innerHTML = 0;

  aesSimulationKeyReset(); //Simulation Key reset
  aesAnimationStateArrayReset();    // animation state array reset
  updateSimulationStateArray();     // update the resetted array 

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
function fillinsideXorKeyTableValue(xorModal,stateArray,keyArray){
   let xorModalStateTable = xorModal.getElementsByTagName('table')[0];
   let xorModalKeyTable = xorModal.getElementsByTagName('table')[1];

   for(let i=0;i<4;i++){
    let xorModalStateTabletr = xorModalStateTable.getElementsByTagName('tr')[i];
    let xorModalKeyTabletr = xorModalKeyTable.getElementsByTagName('tr')[i];
    for(let j=0;j<4;j++){
      let xorModalStateTabletrtd = xorModalStateTabletr.getElementsByTagName('td')[j];
      let xorModalKeyTabletrtd = xorModalKeyTabletr.getElementsByTagName('td')[j];
      xorModalStateTabletrtd.innerHTML=stateArray[i][j];
      xorModalKeyTabletrtd.innerHTML = keyArray[i][j];
    }
   }

}
let insideXorKeyRowIndexZerothRound = 0;
let insideXorKeyColIndexZerothRound = 0;
let insideXorKeyRowIndexTheRound = 0;
let insideXorKeyColIndexTheRound = 0;
let insideXorKeyRowIndexLastRound = 0;
let insideXorKeyColIndexLastRound = 0;
function insideXorKeyZerothRound(){
  if(insideXorKeyColIndexZerothRound>3){
    insideXorKeyRowIndexZerothRound++;
    insideXorKeyColIndexZerothRound=0;
  }
  let insideZerothRoundXorKeyDiv = document.getElementById('insideXorKey0thRound');
  insideXorKeyTableNextStep(insideZerothRoundXorKeyDiv,insideXorKeyRowIndexZerothRound,insideXorKeyColIndexZerothRound);
  insideXorKeyColIndexZerothRound++;
  
}
function insideXorKeyTheRound(){
  if(insideXorKeyColIndexTheRound>3){
    insideXorKeyRowIndexTheRound++;
    insideXorKeyColIndexTheRound=0;
  }
  let insideTheRoundXorKeyDiv = document.getElementById('insideXorKeytheRound');
  insideXorKeyTableNextStep(insideTheRoundXorKeyDiv,insideXorKeyRowIndexTheRound,insideXorKeyColIndexTheRound);
  insideXorKeyColIndexTheRound++;
  
}
function insideXorKeyLastRound(){
  if(insideXorKeyColIndexLastRound>3){
    insideXorKeyRowIndexLastRound++;
    insideXorKeyColIndexLastRound=0;
  }
  let insideLastRoundXorKeyDiv = document.getElementById('insideXorKeyLastRound');
  insideXorKeyTableNextStep(insideLastRoundXorKeyDiv,insideXorKeyRowIndexLastRound,insideXorKeyColIndexLastRound);
  insideXorKeyColIndexLastRound++;
  
}


function insideXorKeyZerothRoundReset(){
  insideXorKeyRowIndexZerothRound = 0;
  insideXorKeyColIndexZerothRound = 0;
  let insideZerothRoundXorKeyDiv = document.getElementById('insideXorKey0thRound');
  insideXorKeyReset(insideZerothRoundXorKeyDiv);
}
function insideXorKeyTheRoundReset(){
  insideXorKeyRowIndexTheRound = 0;
  insideXorKeyColIndexTheRound = 0;
  let insideTheRoundXorKeyDiv = document.getElementById('insideXorKeytheRound');
  insideXorKeyReset(insideTheRoundXorKeyDiv);

}
function insideXorKeyLastRoundReset(){
  insideXorKeyRowIndexLastRound = 0;
  insideXorKeyColIndexLastRound = 0;
  let insideLastRoundXorKeyDiv = document.getElementById('insideXorKeyLastRound');
  insideXorKeyReset(insideLastRoundXorKeyDiv);

}

function insideXorKeyReset(div){
  let divNewStateTable = div.getElementsByTagName('table')[2];
  for(let i = 0;i<4;i++){
    let divNewStateTableTr = divNewStateTable.getElementsByTagName('tr')[i];
    for(let j =0;j<4;j++){
      let divNewStateTabletd = divNewStateTableTr.getElementsByTagName('td')[j];
      divNewStateTabletd.innerHTML="";

    }
  }

}


function insideXorKeyTableNextStep(div,r,c){
  
   let divStateTable = div.getElementsByTagName('table')[0];
   let divStateTableTr = divStateTable.getElementsByTagName('tr')[r];
   let divStateTabletd = divStateTableTr.getElementsByTagName('td')[c];

   let divKeyTable = div.getElementsByTagName('table')[1];
   let divKeyTableTr = divKeyTable.getElementsByTagName('tr')[r];
   let divKeyTabletd = divKeyTableTr.getElementsByTagName('td')[c];

   let divNewStateTable = div.getElementsByTagName('table')[2];
   let divNewStateTableTr = divNewStateTable.getElementsByTagName('tr')[r];
   let divNewStateTabletd = divNewStateTableTr.getElementsByTagName('td')[c];

   let xorInteger= `${parseInt(divStateTabletd.innerHTML, 16).toString(10) ^ parseInt(divKeyTabletd.innerHTML, 16).toString(10)}`
   divNewStateTabletd.innerHTML = `${parseInt(xorInteger, 10).toString(16)}`
  

}

// inside SBox all implementation inclusing reset
let insideSboxRowIndex = 0;
let insideSboxColumnIndex = 0;
let sboxRow =0;
let sboxColumn =0;

function fillInsideSboxTable(){
  const insideSubByte = document.getElementsByClassName('aesSubByteModalSubDiv')[0];
  const insideSubByteTable = insideSubByte.getElementsByTagName('table')[0];
    for(let i = 0; i<4;i++){
      let insideSubByteTableTr = insideSubByteTable.getElementsByTagName('tr')[i];
      for(let j= 0 ;j<4 ;j++){
        let insideSubByteTableTd = insideSubByteTableTr.getElementsByTagName('td')[j];
        insideSubByteTableTd.innerHTML =`${aesAnimationStateArr[i][j]}`;
      }
    }

}

function insideSBoxReset(){
  clearPreviousStepSBoxCss(sboxRow,sboxColumn);
  insideSboxRowIndex = 0;
  insideSboxColumnIndex = 0;
  sboxRow =0;
  sboxColumn =0;
  const insideSboxStateArray =  document.getElementsByClassName('subytetabel')[0];
  const insideSboxStateArraytable = insideSboxStateArray.getElementsByTagName('table')[0];
  let subByteNewState= document.getElementById('insideSubByteNewStateArray');
  let subByteNewStateTable = subByteNewState.getElementsByTagName('table')[0];
  
  for(let i = 0;i<4;i++){
    let insideSboxStateArraytabletr = insideSboxStateArraytable.getElementsByTagName('tr')[i];
    let subByteNewStateTabletr = subByteNewStateTable.getElementsByTagName('tr')[i];
    for(let j = 0;j<4;j++){
      let insideSboxStateArraytabletrtd = insideSboxStateArraytabletr.getElementsByTagName('td')[j];
      let subByteNewStateTabletrtd = subByteNewStateTabletr.getElementsByTagName('td')[j];
      insideSboxStateArraytabletrtd.style.background = "lightgrey";
      subByteNewStateTabletrtd.innerHTML = "";
    }
  }
  

}
function clearPreviousStepCssStateArray(){
  let clearRowIndex = insideSboxRowIndex;
  let clearColumnIndex = insideSboxColumnIndex;

  // clear code for state array 
  if(insideSboxRowIndex ==0 && insideSboxColumnIndex>0){
    clearRowIndex = insideSboxRowIndex;
    clearColumnIndex = insideSboxColumnIndex-1;

  }else if(insideSboxRowIndex > 0 && insideSboxColumnIndex==0){
    clearRowIndex = insideSboxRowIndex-1;
    clearColumnIndex =3;
  }else if(insideSboxRowIndex > 0 && insideSboxColumnIndex>0){
    clearRowIndex = insideSboxRowIndex;
    clearColumnIndex = insideSboxColumnIndex-1;
  }
  const insideSboxStateArray =  document.getElementsByClassName('subytetabel')[0];
  const insideSboxStateArraytable = insideSboxStateArray.getElementsByTagName('table')[0];

  let insideSboxStateArraytabletr = insideSboxStateArraytable.getElementsByTagName('tr')[clearRowIndex];
  let insideSboxStateArraytabletrtd = insideSboxStateArraytabletr.getElementsByTagName('td')[clearColumnIndex];

  insideSboxStateArraytabletrtd.style.background = "none";

  // clear code for s box array


}
let insideSbox_sBoxArray;
let objectTableTag;
let outsideAccessSbox;
let sBoxOusideAccess;
let insideSbox_SBoxArraytable;

function clearPreviousStepSBoxCss(r,c){
  // if(r==0 && c==0){
  //   let firstRowtr = div.getElementsByTagName('tr')[r];
  //   let firstcoltrtd = firstRowtr.getElementsByTagName('td')[c];
  //   firstcoltrtd.style.background = "none";
  // }
  if(r>0 || c>0){
    let insideSbox_SBoxArraytabletr = insideSbox_SBoxArraytable.getElementsByTagName('tr')[r];
    let insideSbox_SBoxArraytabletrtd = insideSbox_SBoxArraytabletr.getElementsByTagName('td')[c];
    
  for(let i = 0;i<sboxColumn;i++){
    let highLightedRow =insideSbox_SBoxArraytable.getElementsByTagName('tr')[sboxRow];
     let highLightedtrtd=highLightedRow.getElementsByTagName('td')[i];
      highLightedtrtd.style.background = "none";
  }
  for(let i = 0;i<sboxRow;i++){
    let highlightedColumntr = insideSbox_SBoxArraytable.getElementsByTagName('tr')[i];
    let highLightedColumntrtd = highlightedColumntr.getElementsByTagName('td')[sboxColumn];
    highLightedColumntrtd.style.background = "none";
  }
  insideSbox_SBoxArraytabletrtd.style.background = "none";
  
}
  

}

function insideSBox(){
  
  const insideSboxStateArray =  document.getElementsByClassName('subytetabel')[0];
  const insideSboxStateArraytable = insideSboxStateArray.getElementsByTagName('table')[0];


  insideSbox_sBoxArray =  document.getElementsByClassName('aesSubByteModalSubDiv')[0];
  objectTableTag =  insideSbox_sBoxArray.getElementsByTagName('object')[0];
  outsideAccessSbox = objectTableTag.contentDocument;
  sBoxOusideAccess = outsideAccessSbox.getElementsByClassName('animationSBoxTable')[0];
  insideSbox_SBoxArraytable = sBoxOusideAccess.getElementsByTagName('table')[0];
  
  // const insideSbox_SBoxArraytable = objectTableTag.getElementsByTagName('table')[0];
  clearPreviousStepCssStateArray();

  let insideSboxStateArraytabletr = insideSboxStateArraytable.getElementsByTagName('tr')[insideSboxRowIndex];
  let insideSboxStateArraytabletrtd = insideSboxStateArraytabletr.getElementsByTagName('td')[insideSboxColumnIndex];

  

  insideSboxStateArraytabletrtd.style.background = "yellow";
  clearPreviousStepSBoxCss(sboxRow,sboxColumn);  //clearing previous css before entering new css

  let stateValue = insideSboxStateArraytabletrtd.innerHTML;
  // console.log(stateValue);
  
  
  if(stateValue.length == 1){
    sboxRow = 0;
    sboxColumn = parseInt(stateValue, 16);
    
  }else{
    sboxRow = parseInt(stateValue.charAt(0), 16);
    sboxColumn = parseInt(stateValue.charAt(1), 16);
  }

  let insideSbox_SBoxArraytabletr = insideSbox_SBoxArraytable.getElementsByTagName('tr')[sboxRow];
  let insideSbox_SBoxArraytabletrtd = insideSbox_SBoxArraytabletr.getElementsByTagName('td')[sboxColumn];
  for(let i = 0;i<sboxColumn;i++){
    let highLightedRow =insideSbox_SBoxArraytable.getElementsByTagName('tr')[sboxRow];
     let highLightedtrtd=highLightedRow.getElementsByTagName('td')[i];
      highLightedtrtd.style.background = "lightgreen";
  }
  for(let i = 0;i<sboxRow;i++){
    let highlightedColumntr = insideSbox_SBoxArraytable.getElementsByTagName('tr')[i];
    let highLightedColumntrtd = highlightedColumntr.getElementsByTagName('td')[sboxColumn];
    highLightedColumntrtd.style.background = "lightgreen";
  }
  // console.log(sboxRow,sboxColumn);
  insideSbox_SBoxArraytabletrtd.style.background = "green";

  let substitutedValue = insideSbox_SBoxArraytabletrtd.innerHTML;
  let subByteNewState= document.getElementById('insideSubByteNewStateArray');
  let subByteNewStateTable = subByteNewState.getElementsByTagName('table')[0];
  let subByteNewStateTabletr = subByteNewStateTable.getElementsByTagName('tr')[insideSboxRowIndex];
  let subByteNewStateTabletrtd = subByteNewStateTabletr.getElementsByTagName('td')[insideSboxColumnIndex];
  subByteNewStateTabletrtd.innerHTML = `${substitutedValue}`;
  
  if(insideSboxColumnIndex>=3){
    insideSboxRowIndex++;
    insideSboxColumnIndex = 0;
  }else{
    insideSboxColumnIndex++;
  }
  
}

//  inside mix column
function fillInsideMixColumnStateTable(){
  let insideMixColumnStateArray = document.getElementsByClassName('insideMixColumndivTable')[0];
  let insideMixColumnStateArrayTable = insideMixColumnStateArray.getElementsByTagName('table')[1];
  for(let i = 0;i<4;i++){
    let insideMixColumnStateArrayTabletr = insideMixColumnStateArrayTable.getElementsByTagName('tr')[i];
    for(let j = 0;j<4;j++){
      let insideMixColumnStateArrayTabletrtd = insideMixColumnStateArrayTabletr.getElementsByTagName('td')[j];
      insideMixColumnStateArrayTabletrtd.innerHTML=`${aesAnimationStateArr[i][j]}`;
    }
  }
}
let insideMixColRowIndex = 0;
let insideMixColColIndex = 0;
let creatingArrayIndex = 0;
function removehighLightRowAndColumnOfMixCol(RowIndexOfTable0,ColumnIndexOfTable1){
  let prevColIndex = 0;
  let prevRowIndex = 0;
  if(ColumnIndexOfTable1 == 0 && RowIndexOfTable0>0){
    prevColIndex = 3;
    prevRowIndex = RowIndexOfTable0-1;
  }else if(ColumnIndexOfTable1>0){
    prevColIndex = ColumnIndexOfTable1 - 1;
  }
  let insideMixColumnStateArray = document.getElementsByClassName('insideMixColumndivTable')[0];
  let insideMixColumnConstantArrayTable = insideMixColumnStateArray.getElementsByTagName('table')[0];
  let insideMixColumnStateArrayTable = insideMixColumnStateArray.getElementsByTagName('table')[1];
  let insideMixColumnConstantArrayTabletr =  insideMixColumnConstantArrayTable.getElementsByTagName('tr')[prevRowIndex];
  for(let j = 0;j<4;j++){
    let insideMixColumnConstantArrayTabletrtd =insideMixColumnConstantArrayTabletr.getElementsByTagName('td')[j];
    insideMixColumnConstantArrayTabletrtd.style.background='none';
  }
  for(let i = 0;i<4;i++){
    let insideMixColumnStateArrayTabletr =  insideMixColumnStateArrayTable.getElementsByTagName('tr')[i];
    let insideMixColumnStateArrayTabletrtd =insideMixColumnStateArrayTabletr.getElementsByTagName('td')[prevColIndex];
    insideMixColumnStateArrayTabletrtd.style.background='none';
  }

}
function highLightRowAndColumnOfMixCol(RowIndexOfTable0 ,ColumnIndexOfTable1 ){
  let insideMixColumnStateArray = document.getElementsByClassName('insideMixColumndivTable')[0];
  let insideMixColumnConstantArrayTable = insideMixColumnStateArray.getElementsByTagName('table')[0];
  let insideMixColumnStateArrayTable = insideMixColumnStateArray.getElementsByTagName('table')[1];
  let insideMixColumnConstantArrayTabletr =  insideMixColumnConstantArrayTable.getElementsByTagName('tr')[RowIndexOfTable0];
  for(let j = 0;j<4;j++){
    let insideMixColumnConstantArrayTabletrtd =insideMixColumnConstantArrayTabletr.getElementsByTagName('td')[j];
    insideMixColumnConstantArrayTabletrtd.style.background='lightgreen';
  }
  for(let i = 0;i<4;i++){
    let insideMixColumnStateArrayTabletr =  insideMixColumnStateArrayTable.getElementsByTagName('tr')[i];
    let insideMixColumnStateArrayTabletrtd =insideMixColumnStateArrayTabletr.getElementsByTagName('td')[ColumnIndexOfTable1];
    insideMixColumnStateArrayTabletrtd.style.background='lightgreen';
  }

}
function mixColumnColumnNGenerator(){
  if(insideMixColColIndex>3){
    insideMixColRowIndex++; 
    creatingArrayIndex = 0;
    insideMixColColIndex = 0;
  }
  let insideMixColumnStateArray = document.getElementsByClassName('insideMixColumndivTable')[0];
  let insideMixColumnStateArrayTable = insideMixColumnStateArray.getElementsByTagName('table')[1];

    let arr = [];
    for(let i = 0;i<4;i++){
      let insideMixColumnStateArrayTabletr = insideMixColumnStateArrayTable.getElementsByTagName('tr')[i];
      let insideMixColumnStateArrayTabletrtd = insideMixColumnStateArrayTabletr.getElementsByTagName('td')[creatingArrayIndex];
      arr[i] = insideMixColumnStateArrayTabletrtd.innerHTML;
    }
    console.log(arr);
    removehighLightRowAndColumnOfMixCol(insideMixColRowIndex,insideMixColColIndex);
    highLightRowAndColumnOfMixCol(insideMixColRowIndex,insideMixColColIndex);
    simulationMixColumns(arr,insideMixColRowIndex);
    creatingArrayIndex++;
    insideMixColColIndex++;
}
let rowIndex = 0;
let colIndex = 0;
function simulationMixColumns(Col,i) {
  if(colIndex>3){
    rowIndex++;
    colIndex = 0;
  }
    let insideMixColumnStateArray = document.getElementsByClassName('insideMixColumndivTable')[0];
    let insideMixColumnConstantTable = insideMixColumnStateArray.getElementsByTagName('table')[0];
    let insideMixColumnNewStateTable = insideMixColumnStateArray.getElementsByTagName('table')[2];
    let insideMixColumnConstantTabletr = insideMixColumnConstantTable.getElementsByTagName('tr')[i];
    let insideMixColumnNewStateTabletr = insideMixColumnNewStateTable.getElementsByTagName('tr')[rowIndex];

    let insideMixColumnSteps = document.getElementsByClassName('insideMixColumndivTheory')[0];
    let insideMixColumnStep1p = insideMixColumnSteps.getElementsByTagName('p')[0];
    let insideMixColumnStep2p = insideMixColumnSteps.getElementsByTagName('p')[1];
    let insideMixColumnStep4p = insideMixColumnSteps.getElementsByTagName('p')[4];
    let insideMixColumnStep6p = insideMixColumnSteps.getElementsByTagName('p')[6];
    let insideMixColumnStep8p = insideMixColumnSteps.getElementsByTagName('p')[8];

    let rowColValue = "";
    let binaryString = "";
    let spanString ="";
    
    let rowarr =[];
    for (let i = 0; i < 4; i++) {
      let insideMixColumnConstantTabletrtd = insideMixColumnConstantTabletr.getElementsByTagName('td')[i];
      rowColValue += `(${insideMixColumnConstantTabletrtd.innerHTML} *${Col[i]}) +`;
      rowarr[i] = insideMixColumnConstantTabletrtd.innerHTML;
      binaryString+=`(${parseInt(insideMixColumnConstantTabletrtd.innerHTML, 16).toString(2)})(${parseInt(Col[i], 16).toString(2)}) +`;
      spanString = convertBinaryIntoPolynmial(parseInt(insideMixColumnConstantTabletrtd.innerHTML, 16).toString(2),parseInt(Col[i], 16).toString(2));
      let insideMixColumnStep3span = insideMixColumnSteps.getElementsByTagName('span')[i];
      insideMixColumnStep3span.innerHTML = `${spanString}`;
      
    }
    let xorSum = 0;
    let multipliedFunctionVal;
    let irreducable = 283; //11b;
    multipliedFunctionVal = generateSimulationHexaNumber(rowarr, Col);
      if (multipliedFunctionVal > 255) {
          xorSum = multipliedFunctionVal ^ irreducable;
      }else{
        xorSum = multipliedFunctionVal;
      }
    let multipliedValPolynomialString = convertBinaryIntoPolynmial2(multipliedFunctionVal);
    let xorSumPolynomialString = convertBinaryIntoPolynmial2(xorSum);
    insideMixColumnStep1p.innerHTML =`elem(${rowIndex},${colIndex}) => ${rowColValue} `;
    insideMixColumnStep2p.innerHTML =`binary =>${binaryString}`;
    insideMixColumnStep4p.innerHTML= `${multipliedValPolynomialString}`;
    insideMixColumnStep6p.innerHTML = `${xorSumPolynomialString}`;
    insideMixColumnStep8p.innerHTML =`${parseInt(xorSum, 10).toString(2)} => ${parseInt(xorSum, 10).toString(16)}`;
    let insideMixColumnNewStateTabletrtd = insideMixColumnNewStateTabletr.getElementsByTagName('td')[colIndex];
    insideMixColumnNewStateTabletrtd.innerHTML = `${parseInt(xorSum, 10).toString(16)}`
    colIndex++;
    
}
function convertBinaryIntoPolynmial(p1,p2){
  let b1 = p1;
  let b2 = p2;
  let string1 = "";
  let string2 = "";
  console.log(p1);
  console.log(p2);
  for(let i =0;i<b1.length;i++){
      if(b1.charAt(i)==1){
        string1 += `x^${b1.length-1-i} + `;
      }
  }
  string1 = `(${string1})`
  for(let i =0;i<b2.length;i++){
    if(b2.charAt(i)==1){
      string2 += `x^${b2.length-1-i} + `;
    }
}
string2=`(${string2})`;

return string1+string2;
    
}
function generateSimulationHexaNumber(row,col) {
  
  const combined = {};
  for(let i = 0;i<4;i++){
      
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
function convertBinaryIntoPolynmial2(p1){
  let str ="";
  let binary = parseInt(p1, 10).toString(2);
  for(let k=0;k<binary.length;k++){
    if(binary.charAt(k)==1){
      str += `x^${binary.length-1-k} + `;
    }
  }
  return str;
}
function insideMixedColReset(){
  // removehighLightRowAndColumnOfMixCol(RowIndexOfTable0,ColumnIndexOfTable1)
  insideMixColRowIndex = 0;
  insideMixColColIndex = 0;
  creatingArrayIndex = 0;
  rowIndex = 0;
  colIndex = 0;
  let insideMixColumnStateArray = document.getElementsByClassName('insideMixColumndivTable')[0];
  let insideMixColumnNewStateTable = insideMixColumnStateArray.getElementsByTagName('table')[2];
  let insideMixColumnStateArrayTable = insideMixColumnStateArray.getElementsByTagName('table')[1];
  let insideMixColumnConstantTable = insideMixColumnStateArray.getElementsByTagName('table')[0];
  for(let i =0;i<4;i++){
    let insideMixColumnNewStateTabletr = insideMixColumnNewStateTable.getElementsByTagName('tr')[i];
    let insideMixColumnStateArrayTabletr = insideMixColumnStateArrayTable.getElementsByTagName('tr')[i];
    let insideMixColumnConstantTabletr = insideMixColumnConstantTable.getElementsByTagName('tr')[i];
    for(let j = 0;j<4;j++){
      let insideMixColumnNewStateTabletrtd = insideMixColumnNewStateTabletr.getElementsByTagName('td')[j];
      let insideMixColumnStateArrayTabletrtd = insideMixColumnStateArrayTabletr.getElementsByTagName('td')[j];
      let insideMixColumnConstantTabletrtd = insideMixColumnConstantTabletr.getElementsByTagName('td')[j];
      insideMixColumnNewStateTabletrtd.innerHTML="";
      insideMixColumnStateArrayTabletrtd.style.background='none';
      insideMixColumnConstantTabletrtd.style.background='none';
    }
  }

}




