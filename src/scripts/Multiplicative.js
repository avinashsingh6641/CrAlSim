let multiplicativePlainText;
let multiplicativeKey;
let multiplicativeCipherText;
let multiplicativeStepsTable;

function setMultiplicativeDocument() {
  multiplicativeKey = document.getElementById("multiplicativeKeyField").value;
  multiplicativePlainText = document.getElementById("multiplicativePlainField").value;
  multiplicativeCipherText = document.getElementById("multiplicativeCipherField").value;
  multiplicativeStepsTable = document.getElementsByClassName("multiplicativeSteps")[0];
}

function multiplicativeEncrypt() {
  setMultiplicativeDocument();
  let keyInv = multiKeyInv();
  console.log(keyInv);
  try {
    if (keyInv == 0) {
      throw new Error(
        alert(
          "this key Field dont have multiplicative inverse please select another key",
        ),
      );
    }
    clearMultiplicativeTable();
    let cipherStr = "";
    
    let message = multiplicativeStepsTable.getElementsByTagName("p")[0];
    let key = multiplicativeStepsTable.getElementsByTagName("p")[1];
    message.innerHTML = `M(message) = ${multiplicativePlainText}`;
    key.innerHTML = `K(key) = ${multiplicativeKey}`;

    let table1 = multiplicativeStepsTable.getElementsByTagName("table")[0];
    let table2 = multiplicativeStepsTable.getElementsByTagName("table")[1];
    let table3 = multiplicativeStepsTable.getElementsByTagName("table")[2];

    const step1tr1 = document.createElement("tr");
    const step1tr2 = document.createElement("tr");

    const step2tr1 = document.createElement("tr");
    const step2tr2 = document.createElement("tr");
    const step2tr3 = document.createElement("tr");
    const step2tr4 = document.createElement("tr");

    const step3tr1 = document.createElement("tr");
    const step3tr2 = document.createElement("tr");

    table1.appendChild(step1tr1);
    table1.appendChild(step1tr2);

    table2.appendChild(step2tr1);
    table2.appendChild(step2tr2);
    table2.appendChild(step2tr3);
    table2.appendChild(step2tr4);

    table3.appendChild(step3tr1);
    table3.appendChild(step3tr2);

    let step1r1td0 = document.createElement("td");
    step1tr1.appendChild(step1r1td0);
    step1r1td0.innerHTML = "Message";
    let step1r2td0 = document.createElement("td");
    step1tr2.appendChild(step1r2td0);
    step1r2td0.innerHTML = "Integer";

    let step2r1td0 = document.createElement("td");
    step2tr1.appendChild(step2r1td0);
    step2r1td0.innerHTML = "Message";
    let step2r2td0 = document.createElement("td");
    step2tr2.appendChild(step2r2td0);
    step2r2td0.innerHTML = "Key";
    let step2r3td0 = document.createElement("td");
    step2tr3.appendChild(step2r3td0);
    step2r3td0.innerHTML = "Message * Key";
    let step2r4td0 = document.createElement("td");
    step2tr4.appendChild(step2r4td0);
    step2r4td0.innerHTML = "Mod 26";

    let step3r1td0 = document.createElement("td");
    step3tr1.appendChild(step3r1td0);
    step3r1td0.innerHTML = "Cipher";
    let step3r2td0 = document.createElement("td");
    step3tr2.appendChild(step3r2td0);
    step3r2td0.innerHTML = "Character";

    for (let i = 0; i < multiplicativePlainText.length; i++) {
      let step1td1 = document.createElement("td");
      let step1td2 = document.createElement("td");

      let step2td1 = document.createElement("td");
      let step2td2 = document.createElement("td");
      let step2td3 = document.createElement("td");
      let step2td4 = document.createElement("td");

      let step3td1 = document.createElement("td");
      let step3td2 = document.createElement("td");

      step1tr1.appendChild(step1td1);
      step1tr2.appendChild(step1td2);

      step2tr1.appendChild(step2td1);
      step2tr2.appendChild(step2td2);
      step2tr3.appendChild(step2td3);
      step2tr4.appendChild(step2td4);

      step3tr1.appendChild(step3td1);
      step3tr2.appendChild(step3td2);

      step1td1.innerHTML = `${multiplicativePlainText.charAt(i)}`;

      if (
        multiplicativePlainText.charAt(i) >= "a" &&
        multiplicativePlainText.charAt(i) <= "z"
      ) {
        let plainVal = multiplicativePlainText.codePointAt(i) - 97;
        let keyVal = multiplicativeKey.charCodeAt(0) - 97;
        let cipherVal = (plainVal * keyVal) % 26;
        let outChar = String.fromCharCode(cipherVal + 97);

        cipherStr += outChar;
        step1td2.innerHTML = `${plainVal}`;
        step2td1.innerHTML = `${plainVal}`;
        step2td2.innerHTML = `${keyVal}`;
        step2td3.innerHTML = `${plainVal * keyVal}`;
        step2td4.innerHTML = `${cipherVal}`;
        step3td1.innerHTML = `${cipherVal}`;
        step3td2.innerHTML = `${outChar}`;
      } else if (
        multiplicativePlainText.charAt(i) >= "A" &&
        multiplicativePlainText.charAt(i) <= "Z"
      ) {
        let plainVal = multiplicativePlainText.codePointAt(i) - 65;
        let keyVal = multiplicativeKey.charCodeAt(0) - 65;
        let cipherVal = (plainVal * keyVal) % 26;
        let outChar = String.fromCharCode(cipherVal + 65);

        cipherStr += outChar;
        step1td2.innerHTML = `${plainVal}`;
        step2td1.innerHTML = `${plainVal}`;
        step2td2.innerHTML = `${keyVal}`;
        step2td3.innerHTML = `${plainVal * keyVal}`;
        step2td4.innerHTML = `${cipherVal}`;
        step3td1.innerHTML = `${cipherVal}`;
        step3td2.innerHTML = `${outChar}`;
      } else {
        cipherStr += multiplicativePlainText.charAt(i);
        step1td2.innerHTML = `-`;
        step2td1.innerHTML = `-`;
        step2td2.innerHTML = `-`;
        step2td3.innerHTML = `-`;
        step2td4.innerHTML = `-`;
        step3td1.innerHTML = `-`;
        step3td2.innerHTML = `${multiplicativePlainText.charAt(i)}`;
      }
    }
    const multiplicativeCipherStr = document.getElementById("multiplicativeCipherField");
    multiplicativeCipherStr.value = cipherStr;

    const multiplicativeCipherh3 = multiplicativeStepsTable.getElementsByTagName("h3")[0];
    multiplicativeCipherh3.innerHTML = `Cipher text => ${cipherStr}`;
    multiplicativeTheoryDecrypt();
  } catch (err) {
    console.log(err);
  }
}

function multiKeyInv() {
  let aInv;
  if (
    multiplicativeKey.charAt(0) >= "a" &&
    multiplicativeKey.charAt(0) <= "z"
  ) {
    for (let i = 1; i < 26; i++) {
      if (((multiplicativeKey.charCodeAt(0) - 97) * i) % 26 == 1) {
        aInv = i;
        break;
      } else {
        aInv = 0;
      }
    }
  } else {
    for (let i = 1; i < 26; i++) {
      if (((multiplicativeKey.charCodeAt(0) - 65) * i) % 26 == 1) {
        aInv = i;
        break;
      } else {
        aInv = 0;
      }
    }
  }

  return aInv;
}

function multiplicativeTheoryDecrypt() {
  setMultiplicativeDocument();
  let keyInv = multiKeyInv();
  let plainStr = "";
  let table4 = multiplicativeStepsTable.getElementsByTagName("table")[3];
  let table5 = multiplicativeStepsTable.getElementsByTagName("table")[4];

  const step4tr1 = document.createElement("tr");
  const step4tr2 = document.createElement("tr");
  const step4tr3 = document.createElement("tr");
  const step4tr4 = document.createElement("tr");

  const step5tr1 = document.createElement("tr");
  const step5tr2 = document.createElement("tr");

  table4.appendChild(step4tr1);
  table4.appendChild(step4tr2);
  table4.appendChild(step4tr3);
  table4.appendChild(step4tr4);

  table5.appendChild(step5tr1);
  table5.appendChild(step5tr2);

  let step4r1td0 = document.createElement("td");
  step4tr1.appendChild(step4r1td0);
  step4r1td0.innerHTML = "Cipher";
  let step4r2td0 = document.createElement("td");
  step4tr2.appendChild(step4r2td0);
  step4r2td0.innerHTML = "Key Inverse";
  let step4r3td0 = document.createElement("td");
  step4tr3.appendChild(step4r3td0);
  step4r3td0.innerHTML = "Cipher * Key Inverse";
  let step4r4td0 = document.createElement("td");
  step4tr4.appendChild(step4r4td0);
  step4r4td0.innerHTML = "Mod 26";

  let step5r1td0 = document.createElement("td");
  step5tr1.appendChild(step5r1td0);
  step5r1td0.innerHTML = "Integer";
  let step5r2td0 = document.createElement("td");
  step5tr2.appendChild(step5r2td0);
  step5r2td0.innerHTML = "Character";

  for (let i = 0; i < multiplicativeCipherText.length; i++) {
    let step4td1 = document.createElement("td");
    let step4td2 = document.createElement("td");
    let step4td3 = document.createElement("td");
    let step4td4 = document.createElement("td");

    let step5td1 = document.createElement("td");
    let step5td2 = document.createElement("td");

    step4tr1.appendChild(step4td1);
    step4tr2.appendChild(step4td2);
    step4tr3.appendChild(step4td3);
    step4tr4.appendChild(step4td4);

    step5tr1.appendChild(step5td1);
    step5tr2.appendChild(step5td2);

    if (
      multiplicativeCipherText.charAt(i) >= "a" &&
      multiplicativeCipherText.charAt(i) <= "z"
    ) {
      let cipherVal = multiplicativeCipherText.codePointAt(i) - 97;
      let decryptedVal = (cipherVal * keyInv) % 26;
      let outChar = String.fromCharCode(decryptedVal + 97);

      plainStr += outChar;
      step4td1.innerHTML = `${cipherVal}`;
      step4td2.innerHTML = `${keyInv}`;
      step4td3.innerHTML = `${cipherVal * keyInv}`;
      step4td4.innerHTML = `${decryptedVal}`;
      step5td1.innerHTML = `${decryptedVal}`;
      step5td2.innerHTML = `${outChar}`;
    } else if (
      multiplicativeCipherText.charAt(i) >= "A" &&
      multiplicativeCipherText.charAt(i) <= "Z"
    ) {
      let cipherVal = multiplicativeCipherText.codePointAt(i) - 65;
      let decryptedVal = (cipherVal * keyInv) % 26;
      let outChar = String.fromCharCode(decryptedVal + 65);

      plainStr += outChar;
      step4td1.innerHTML = `${cipherVal}`;
      step4td2.innerHTML = `${keyInv}`;
      step4td3.innerHTML = `${cipherVal * keyInv}`;
      step4td4.innerHTML = `${decryptedVal}`;
      step5td1.innerHTML = `${decryptedVal}`;
      step5td2.innerHTML = `${outChar}`;
    } else {
      plainStr += multiplicativeCipherText.charAt(i);
      step4td1.innerHTML = `-`;
      step4td2.innerHTML = `-`;
      step4td3.innerHTML = `-`;
      step4td4.innerHTML = `-`;
      step5td1.innerHTML = `-`;
      step5td2.innerHTML = `${multiplicativeCipherText.charAt(i)}`;
    }
  }

  const multiplicativePlainh3 = multiplicativeStepsTable.getElementsByTagName("h3")[1];
  multiplicativePlainh3.innerHTML = `Plain text => ${plainStr}`;
}

function multiplicativeDecrypt() {
  setMultiplicativeDocument();
  let keyInv = multiKeyInv();
  try {
    if (keyInv == 0) {
      throw new Error(
        alert(
          "this key Field dont have multiplicative inverse please select another key",
        ),
      );
    }
    clearMultiplicativeTable();
    let plainStr = "";

    let message = multiplicativeStepsTable.getElementsByTagName("p")[0];
    let key = multiplicativeStepsTable.getElementsByTagName("p")[1];
    message.innerHTML = `C(ciphertext) = ${multiplicativeCipherText}`;
    key.innerHTML = `K'(inverse key) = ${keyInv}`;

    let table4 = multiplicativeStepsTable.getElementsByTagName("table")[3];
    let table5 = multiplicativeStepsTable.getElementsByTagName("table")[4];

    const step4tr1 = document.createElement("tr");
    const step4tr2 = document.createElement("tr");
    const step4tr3 = document.createElement("tr");
    const step4tr4 = document.createElement("tr");

    const step5tr1 = document.createElement("tr");
    const step5tr2 = document.createElement("tr");

    table4.appendChild(step4tr1);
    table4.appendChild(step4tr2);
    table4.appendChild(step4tr3);
    table4.appendChild(step4tr4);

    table5.appendChild(step5tr1);
    table5.appendChild(step5tr2);

    let step4r1td0 = document.createElement("td");
    step4tr1.appendChild(step4r1td0);
    step4r1td0.innerHTML = "Cipher";
    let step4r2td0 = document.createElement("td");
    step4tr2.appendChild(step4r2td0);
    step4r2td0.innerHTML = "Key Inverse";
    let step4r3td0 = document.createElement("td");
    step4tr3.appendChild(step4r3td0);
    step4r3td0.innerHTML = "Cipher * Key Inverse";
    let step4r4td0 = document.createElement("td");
    step4tr4.appendChild(step4r4td0);
    step4r4td0.innerHTML = "Mod 26";

    let step5r1td0 = document.createElement("td");
    step5tr1.appendChild(step5r1td0);
    step5r1td0.innerHTML = "Integer";
    let step5r2td0 = document.createElement("td");
    step5tr2.appendChild(step5r2td0);
    step5r2td0.innerHTML = "Character";

    for (let i = 0; i < multiplicativeCipherText.length; i++) {
      let step4td1 = document.createElement("td");
      let step4td2 = document.createElement("td");
      let step4td3 = document.createElement("td");
      let step4td4 = document.createElement("td");

      let step5td1 = document.createElement("td");
      let step5td2 = document.createElement("td");

      step4tr1.appendChild(step4td1);
      step4tr2.appendChild(step4td2);
      step4tr3.appendChild(step4td3);
      step4tr4.appendChild(step4td4);

      step5tr1.appendChild(step5td1);
      step5tr2.appendChild(step5td2);

      if (
        multiplicativeCipherText.charAt(i) >= "a" &&
        multiplicativeCipherText.charAt(i) <= "z"
      ) {
        let cipherVal = multiplicativeCipherText.codePointAt(i) - 97;
        let decryptedVal = (cipherVal * keyInv) % 26;
        let outChar = String.fromCharCode(decryptedVal + 97);

        plainStr += outChar;
        step4td1.innerHTML = `${cipherVal}`;
        step4td2.innerHTML = `${keyInv}`;
        step4td3.innerHTML = `${cipherVal * keyInv}`;
        step4td4.innerHTML = `${decryptedVal}`;
        step5td1.innerHTML = `${decryptedVal}`;
        step5td2.innerHTML = `${outChar}`;
      } else if (
        multiplicativeCipherText.charAt(i) >= "A" &&
        multiplicativeCipherText.charAt(i) <= "Z"
      ) {
        let cipherVal = multiplicativeCipherText.codePointAt(i) - 65;
        let decryptedVal = (cipherVal * keyInv) % 26;
        let outChar = String.fromCharCode(decryptedVal + 65);

        plainStr += outChar;
        step4td1.innerHTML = `${cipherVal}`;
        step4td2.innerHTML = `${keyInv}`;
        step4td3.innerHTML = `${cipherVal * keyInv}`;
        step4td4.innerHTML = `${decryptedVal}`;
        step5td1.innerHTML = `${decryptedVal}`;
        step5td2.innerHTML = `${outChar}`;
      } else {
        plainStr += multiplicativeCipherText.charAt(i);
        step4td1.innerHTML = `-`;
        step4td2.innerHTML = `-`;
        step4td3.innerHTML = `-`;
        step4td4.innerHTML = `-`;
        step5td1.innerHTML = `-`;
        step5td2.innerHTML = `${multiplicativeCipherText.charAt(i)}`;
      }
    }
    const multiplicativePlainStr = document.getElementById("multiplicativePlainField");
    multiplicativePlainStr.value = plainStr;

    const multiplicativePlainh3 = multiplicativeStepsTable.getElementsByTagName("h3")[1];
    multiplicativePlainh3.innerHTML = `Plain text => ${plainStr}`;
  } catch (err) {
    console.log(err);
  }
}

function clearMultiplicativeTable() {
  let table1 = multiplicativeStepsTable.getElementsByTagName("table")[0];
  let table2 = multiplicativeStepsTable.getElementsByTagName("table")[1];
  let table3 = multiplicativeStepsTable.getElementsByTagName("table")[2];
  let table4 = multiplicativeStepsTable.getElementsByTagName("table")[3];
  let table5 = multiplicativeStepsTable.getElementsByTagName("table")[4];
  while (table1.hasChildNodes()) {
    table1.removeChild(table1.firstChild);
  }
  while (table2.hasChildNodes()) {
    table2.removeChild(table2.firstChild);
  }
  while (table3.hasChildNodes()) {
    table3.removeChild(table3.firstChild);
  }
  while (table4.hasChildNodes()) {
    table4.removeChild(table4.firstChild);
  }
  while (table5.hasChildNodes()) {
    table5.removeChild(table5.firstChild);
  }
}
