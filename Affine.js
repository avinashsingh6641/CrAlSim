function displayDiv() {
  document.getElementsByClassName(
    "affineShowTransformedAlphabets"
  )[0].style.display = "block";
}

function gcd(x, y) {
  let r;
  while (r != 0) {
    r = x % y;
    x = y;
    y = r;
  }
  return x;
}
function populateColorDiv() {
  for (let i = 0; i < affinePlaintext.length; i++) {
    const p = document.createElement("p");
    affinecolorDiv.appendChild(p).innerHTML = affinePlaintext.charAt(i);
  }
}
function affineResetColorDiv(){
  while (affinecolorDiv.hasChildNodes()) {
    affinecolorDiv.removeChild(affinecolorDiv.firstChild);
  }
}

function generateCipher() {
  const table = document.getElementById("affinetable");
  const message = document.getElementById("message");
  message.innerHTML = "";
  let cipherStr = "";
  setAllDocumentValue();
  try {
    if (affinePlaintext.length == 0 || a.length == 0 || b.length == 0) {
      throw new Error(alert("key field or message filed is missing"));
    }
    if (gcd(a, 26) != 1) {
      message.innerHTML =
        "enter valid key , A should be co-prime to modulo m ,Here modulo m is 26";
      throw new Error(
        alert(
          "enter valid key , A should be co-prime to modulo m ,Here modulo m is 26"
        )
      );
    }
    affineResetColorDiv();
    populateColorDiv();
    affineTableReset();
    a_bValue.children[0].innerHTML = `A=${a}`;
    a_bValue.children[1].innerHTML = `B=${b}`;
    for (let i = 0; i < affinePlaintext.length; i++) {
      if (affinePlaintext.charAt(i) >= "a" && affinePlaintext.charAt(i) <= "z") {
        table.rows[0].insertCell().innerHTML = affinePlaintext.charAt(i);
        table.rows[1].insertCell().innerHTML = affinePlaintext.codePointAt(i) - 97;
        table.rows[2].insertCell().innerHTML =
          (+((affinePlaintext.codePointAt(i) - 97) * a) + +b) % 26;
        table.rows[3].insertCell().innerHTML = String.fromCharCode(
          +((+((affinePlaintext.codePointAt(i) - 97) * a) + +b) % 26) + +97
        );
        cipherStr += String.fromCharCode(
          +((+((affinePlaintext.codePointAt(i) - 97) * a) + +b) % 26) + +97
        );
      } else if (affinePlaintext.charAt(i) >= "A" && affinePlaintext.charAt(i) <= "Z") {
        table.rows[0].insertCell().innerHTML = affinePlaintext.charAt(i);
        table.rows[1].insertCell().innerHTML = affinePlaintext.codePointAt(i) - 65;
        table.rows[2].insertCell().innerHTML =
          (+((affinePlaintext.codePointAt(i) - 65) * a) + +b) % 26;
        table.rows[3].insertCell().innerHTML = String.fromCharCode(
          +((+((affinePlaintext.codePointAt(i) - 65) * a) + +b) % 26) + +65
        );
        cipherStr += String.fromCharCode(
          +((+((affinePlaintext.codePointAt(i) - 65) * a) + +b) % 26) + +65
        );
      } else {
        table.rows[0].insertCell().innerHTML = affinePlaintext.charAt(i);
        table.rows[1].insertCell().innerHTML = affinePlaintext.charAt(i);
        table.rows[2].insertCell().innerHTML = affinePlaintext.charAt(i);
        table.rows[3].insertCell().innerHTML = affinePlaintext.charAt(i);
        cipherStr += affinePlaintext.charAt(i);
      }
    }
  } catch (err) {
    console.log(err);
  }
  console.log(cipherStr);
  const affinecipher = document.getElementById("ciphertext");
  affinecipher.value = cipherStr;
}

function decipher() {
  const ciphertext = document.getElementById("ciphertext").value;
  const a = document.getElementById("affinekey1").value;
  const b = document.getElementById("affinekey2").value;
  let aInv;
  let plainStr = "";
  for (let i = 1; i < 26; i++) {
    if ((a * i) % 26 == 1) {
      aInv = i;
      break;
    }
  }
  for (let j = 0; j < ciphertext.length; j++) {
    let intermediate;

    if (ciphertext.charAt(j) >= "a" && ciphertext.charAt(j) <= "z") {
      intermediate = ((ciphertext.codePointAt(j) - 97 - b) * aInv) % 26;
      if (intermediate < 0) {
        plainStr += String.fromCharCode(+(+intermediate + +26) + +97);
      } else {
        plainStr += String.fromCharCode(+intermediate + +97);
      }
    } else if (ciphertext.charAt(j) >= "A" && ciphertext.charAt(j) <= "Z") {
      intermediate = ((ciphertext.codePointAt(j) - 65 - b) * aInv) % 26;
      if (intermediate < 0) {
        plainStr += String.fromCharCode(+(+intermediate + +26) + +65);
      } else {
        plainStr += String.fromCharCode(+intermediate + +65);
      }
    } else {
      plainStr += ciphertext.charAt(j);
    }
  }
  console.log(plainStr);
  const plain = document.getElementById("plaintext");
  plain.value = plainStr;
}
function affineTableReset(){
  var tabelEl = document.getElementById("affinetable");
  var rows = tabelEl.getElementsByTagName("tr");
  while (rows[0].firstChild) {
    rows[0].removeChild(rows[0].lastChild);
  }
  while (rows[1].firstChild) {
    rows[1].removeChild(rows[1].lastChild);
  }
  while (rows[2].firstChild) {
    rows[2].removeChild(rows[2].lastChild);
  }
  while (rows[3].firstChild) {
    rows[3].removeChild(rows[3].lastChild);
  }

}

function affineReset() {
  document.getElementById("plaintext").value = "";
  document.getElementById("affinekey1").value = "";
  document.getElementById("affinekey2").value = "";
  document.getElementById("ciphertext").value = "";
  affineTableReset();
  affineSimReset();
  a_bValue.children[0].innerHTML = "";
    a_bValue.children[1].innerHTML = "";
  affineResetColorDiv();
}

// Simulator Code

let affcnt = 0;

const button = document.getElementById("affine-sim-btn");
button.addEventListener("click", calculateAffineChar);

function calculateAffineChar() {
  affinecolorDiv = document.getElementsByClassName("affineChangeColorString")[0];
  const affinecolorChildP = affinecolorDiv.children;
  const affinetext = document.getElementById("plaintext").value;
  const a = document.getElementById("affinekey1").value;
  const b = document.getElementById("affinekey2").value;

  const affineContentDiv = document.getElementsByClassName(
    "affineSimulatorContent"
  )[0];
  const table = affineContentDiv.getElementsByTagName("table")[0];
  const tr = document.createElement("tr");
  const tdA = document.createElement("td");
  const tdB = document.createElement("td");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  let affineAMChar;
  let affineAMV;
  let affineBMV;
  try {
    if (affcnt >= affinetext.length) {
      throw new Error(alert("all alphabets has been simulated"));
    }
    let char = affinetext.charAt(affcnt);
    const tr1 = table.appendChild(tr);
    const td1 = tr1.appendChild(tdA);
    if (char >= "a" && char <= "z") {
      affineBMV = affinetext.codePointAt(affcnt) - 97;
      affineAMV = (+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26;
      affineAMChar = String.fromCharCode(
        +((+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26) + +97
      );
    } else if (char >= "A" && char <= "Z") {
      affineBMV = affinetext.codePointAt(affcnt) - 97;
      affineAMV = (+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26;
      affineAMChar = String.fromCharCode(
        +((+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26) + +97
      );
    } else {
    }

    td1.appendChild(div1).innerHTML = `((a*${char})+b)%26 =${affineAMChar}`;
    td1.appendChild(
      div2
    ).innerHTML = `((${a}*${affineBMV})+${b})%26 =${affineAMV}`;
    tr1.appendChild(tdB).innerHTML = `${char} = ${affineAMChar}`;
    affinecolorChildP[affcnt].style.color = "white";
    if(affcnt>0){
      affinecolorChildP[affcnt - 1].style.color = "black";
      affineResetCounter=1;
    }
    affcnt += 1;
    
    
  } catch (err) {
    console.log(err);
  }
  
}

let functionCount = Number(1);
function affineSimulateFunctions() {
  const affinetext = document.getElementById("plaintext").value;
  if (affcnt >= affinetext.length) {
    alert("all alphabets has been simulated");
  } else {
    if (functionCount == 1) {
      affineCalcFun1();
    } else if (functionCount == 2) {
      affineCalcFun2();
    } else if (functionCount == 3) {
      affineCalcFun3();
    }
  }
}

let affinePlaintext;
let a;
let b;
let affinecolorDiv;
let affinecolorChildP;
let a_bValue;
let formula;
let affineCalcSection;
let affineCalOutput;
let affineCalculatedChar;
let affineResetCounter = 0;
function setAllDocumentValue() {
  affinePlaintext = document.getElementById("plaintext").value;
  a = document.getElementById("affinekey1").value;
  b = document.getElementById("affinekey2").value;
  affinecolorDiv = document.getElementsByClassName(
    "affineChangeColorString"
  )[0];
  affinecolorChildP = affinecolorDiv.children;
  a_bValue = document.getElementsByClassName("affineA-BValue")[0];
  formula = document.getElementsByClassName("affineFormula")[0];
  affineCalcSection = document.getElementsByClassName("affineCalcSection")[0];
  affineCalOutput = document.getElementsByClassName(
    "affineMainCalculationOutputVal"
  )[0];
  affineCalculatedChar = document.getElementsByClassName(
    "affineMainCalculationOutputChar"
  )[0];
}
function affineCssReset() {
  affinecolorChildP[affcnt - 1].style.color = "black";
  formula.children[0].style.color = "black";
  formula.children[1].style.color = "black";
  formula.children[2].style.color = "black";
  formula.children[3].style.color = "black";
  formula.children[4].style.color = "black";
  formula.children[5].style.color = "black";
  formula.children[6].style.color = "black";
  formula.children[7].style.color = "black";
  formula.children[8].style.color = "black";
  formula.children[10].style.color = "black";
  
  formula.children[0].style.borderBottom = "none";
  formula.children[1].style.borderBottom = "none";
  formula.children[2].style.borderBottom = "none";
  formula.children[3].style.borderBottom = "none";
  formula.children[4].style.borderBottom = "none";
  formula.children[5].style.borderBottom = "none";
  formula.children[6].style.borderBottom = "none";
  formula.children[7].style.borderBottom = "none";
  formula.children[8].style.borderBottom = "none";
  formula.children[10].style.borderBottom = "none";
  
  const list = document.getElementsByClassName("affineCalcSection")[0];

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

const affinecalButton = document.getElementById("affine-next-simulator");
affinecalButton.addEventListener("click", eval(affineSimulateFunctions));

function affineCalcFun1() {
  //setAllDocumentValue();
  if (affineResetCounter > 0) {
    affineCalculatedChar.children[1].innerHTML = "-";
    affineCalOutput.children[1].innerHTML = "-";
    affineCssReset();
  }
  affinecolorChildP[affcnt].style.color = "white";

  formula.children[2].innerHTML = `${affinePlaintext.charAt(affcnt)}`;
  formula.children[2].style.color = "red";
  formula.children[2].style.borderBottom = "3px solid black";
  formula.children[4].style.color = "#FF00FF";
  formula.children[4].style.borderBottom = "3px solid black";

  let char = affinePlaintext.charAt(affcnt);
  let val;
  if (char >= "a" && char <= "z") {
    val = affinePlaintext.codePointAt(affcnt) - 97;
  } else if (char >= "A" && char <= "Z") {
    val = affinePlaintext.codePointAt(affcnt) - 65;
  }
  const c1 = document.createElement("p");
  const c2 = document.createElement("p");
  const c3 = document.createElement("p");
  const c4 = document.createElement("p");
  const c5 = document.createElement("p");
  
  affineCalcSection.appendChild(c1).innerHTML = `${val}`;
  affineCalcSection.appendChild(c2).innerHTML = "*";
  affineCalcSection.appendChild(c3).innerHTML = `${a}`;
  affineCalcSection.appendChild(c4).innerHTML = "=";
  affineCalcSection.appendChild(c5).innerHTML = `${val * a}`;
  functionCount++;
}

function affineCalcFun2() {
  formula.children[1].style.color = "red";
  formula.children[2].style.color = "red";
  formula.children[3].style.color = "red";
  formula.children[4].style.color = "red";
  formula.children[5].style.color = "red";
  formula.children[1].style.borderBottom = "3px solid black";
  formula.children[2].style.borderBottom = "3px solid black";
  formula.children[3].style.borderBottom = "3px solid black";
  formula.children[4].style.borderBottom = "3px solid black";
  formula.children[5].style.borderBottom = "3px solid black";

  formula.children[7].style.color = "#FF00FF";
  formula.children[7].style.borderBottom = "3px solid black";

  let newVal = Number(affineCalcSection.children[4].innerHTML);
  affineCalcSection.children[0].innerHTML = `${newVal}`;
  affineCalcSection.children[1].innerHTML = "+";
  affineCalcSection.children[2].innerHTML = `${b}`;
  affineCalcSection.children[3].innerHTML = "=";
  affineCalcSection.children[4].innerHTML = `${+newVal + +b}`;

  functionCount++;
}

function affineCalcFun3() {
  formula.children[0].style.color = "red";
  formula.children[1].style.color = "red";
  formula.children[2].style.color = "red";
  formula.children[3].style.color = "red";
  formula.children[4].style.color = "red";
  formula.children[5].style.color = "red";
  formula.children[6].style.color = "red";
  formula.children[7].style.color = "red";
  formula.children[8].style.color = "red";
  formula.children[0].style.borderBottom = "3px solid black";
  formula.children[1].style.borderBottom = "3px solid black";
  formula.children[2].style.borderBottom = "3px solid black";
  formula.children[3].style.borderBottom = "3px solid black";
  formula.children[4].style.borderBottom = "3px solid black";
  formula.children[5].style.borderBottom = "3px solid black";
  formula.children[6].style.borderBottom = "3px solid black";
  formula.children[7].style.borderBottom = "3px solid black";
  formula.children[8].style.borderBottom = "3px solid black";

  formula.children[10].style.color = "#FF00FF";
  formula.children[10].style.borderBottom = "3px solid black";

  let newVal = Number(affineCalcSection.children[4].innerHTML);
  affineCalcSection.children[0].innerHTML = `${newVal}`;
  affineCalcSection.children[1].innerHTML = "%";
  affineCalcSection.children[2].innerHTML = "26";
  affineCalcSection.children[3].innerHTML = "=";
  affineCalcSection.children[4].innerHTML = `${newVal % 26}`;

  affineCalOutput.children[1].innerHTML = `= ${newVal % 26}`;
  affineCalculatedChar.children[1].innerHTML = `${String.fromCharCode(
    +((+((affinePlaintext.codePointAt(affcnt) - 97) * a) + +b) % 26) + +97
  )}`;
  functionCount = 1;
  affineResetCounter = 1;
  calculateAffineChar();
}

const affineSimResetButton = document.getElementById('affine-sim-reset');
affineSimResetButton.addEventListener("click",affineSimReset);



function affineSimReset(){
  const affineContentDiv = document.getElementsByClassName('affineSimulatorContent')[0];
  const table = affineContentDiv.getElementsByTagName("table")[0];
  //const colorDiv = document.getElementsByClassName("affineChangeColorString")[0];
  const affineEquation = document.getElementsByClassName("affineFormula")[0];
  affineResetColorDiv();
  populateColorDiv();
  affcnt = 0;
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }

  affineEquation.children[2].innerHTML = "X";
  let i = 0;
  while(i!=(affineEquation.childElementCount)){
    affineEquation.children[i].style.color="black";
    affineEquation.children[i].style.borderBottom="none";
    i++;
  }
  while (affineCalcSection.hasChildNodes()) {
    affineCalcSection.removeChild(affineCalcSection.firstChild);
  }

  affineCalOutput.children[1].innerHTML = "-";
  affineCalculatedChar.children[1].innerHTML = "-"
  functionCount = 1;
  affineResetCounter = 0;


}

