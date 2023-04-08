
let additivePlainText;
let additiveKey;
let additiveCipherText;
let additiveStepsTable;
function setAdditiveDocument(){
    additiveKey = document.getElementById('additiveKeyField').value;
    additivePlainText = document.getElementById('additivePlainField').value;
    additiveCipherText = document.getElementById('additiveCipherField').value;
    additiveStepsTable = document.getElementsByClassName('additiveSteps')[0];
    
}

function additiveEncrypt(){
    setAdditiveDocument();
    clearAdditiveTable();
    let cipherStr="";
    let message = additiveStepsTable.getElementsByTagName('p')[0];
    let key = additiveStepsTable.getElementsByTagName('p')[1];
    message.innerHTML=`M(message) = ${additivePlainText}`;
    key.innerHTML= `K(key) = ${additiveKey}`
    table1 = additiveStepsTable.getElementsByTagName('table')[0];
    table2 = additiveStepsTable.getElementsByTagName('table')[1];
    table3 = additiveStepsTable.getElementsByTagName('table')[2];

    const step1tr1 = document.createElement('tr');
    const step1tr2 = document.createElement('tr');

    const step2tr1 = document.createElement('tr');
    const step2tr2 = document.createElement('tr');
    const step2tr3 = document.createElement('tr');
    const step2tr4 = document.createElement('tr');

    const step3tr1 = document.createElement('tr');
    const step3tr2 = document.createElement('tr');

    table1.appendChild(step1tr1);
    table1.appendChild(step1tr2);

    table2.appendChild(step2tr1);
    table2.appendChild(step2tr2);
    table2.appendChild(step2tr3);
    table2.appendChild(step2tr4);

    table3.appendChild(step3tr1);
    table3.appendChild(step3tr2);

    let step1r1td0 = document.createElement('td');
    step1tr1.appendChild(step1r1td0);
    step1r1td0.innerHTML ="Message";
    let step1r2td0 = document.createElement('td');
    step1tr2.appendChild(step1r2td0);
    step1r2td0.innerHTML ="Integer";

    let step2r1td0 = document.createElement('td');
    step2tr1.appendChild(step2r1td0);
    step2r1td0.innerHTML ="Message";
    let step2r2td0 = document.createElement('td');
    step2tr2.appendChild(step2r2td0);
    step2r2td0.innerHTML ="Key";
    let step2r3td0 = document.createElement('td');
    step2tr3.appendChild(step2r3td0);
    step2r3td0.innerHTML ="Message + Key";
    let step2r4td0 = document.createElement('td');
    step2tr4.appendChild(step2r4td0);
    step2r4td0.innerHTML ="Mod 26";

    let step3r1td0 = document.createElement('td');
    step3tr1.appendChild(step3r1td0);
    step3r1td0.innerHTML ="Cipher";
    let step3r2td0 = document.createElement('td');
    step3tr2.appendChild(step3r2td0);
    step3r2td0.innerHTML ="Character";


    for (let i = 0; i < additivePlainText.length; i++) {
      let step1td1 = document.createElement('td');
      let step1td2 = document.createElement('td');

      let step2td1 = document.createElement('td');
      let step2td2 = document.createElement('td');
      let step2td3 = document.createElement('td');
      let step2td4 = document.createElement('td');

      let step3td1 = document.createElement('td');
      let step3td2 = document.createElement('td');

      step1tr1.appendChild(step1td1);
      step1tr2.appendChild(step1td2);

      step2tr1.appendChild(step2td1);
      step2tr2.appendChild(step2td2);
      step2tr3.appendChild(step2td3);
      step2tr4.appendChild(step2td4);

      step3tr1.appendChild(step3td1);
      step3tr2.appendChild(step3td2);

      step1td1.innerHTML=`${additivePlainText.charAt(i)}`;

        if (additivePlainText.charAt(i) >= "a" && additivePlainText.charAt(i) <= "z") {
          // console.log(additivePlainText.codePointAt(i) ,additiveKey.charCodeAt(0));
          cipherStr += String.fromCharCode(
            +((+(additivePlainText.codePointAt(i) - 97)+ +(additiveKey.charCodeAt(0)-97)) % 26) + +97
            );
            step1td2.innerHTML=`${additivePlainText.codePointAt(i) - 97}`;
            step2td1.innerHTML=`${additivePlainText.codePointAt(i) - 97}`;
            step2td2.innerHTML=`${additiveKey.charCodeAt(0)-97}`;
            step2td3.innerHTML=`${+(additivePlainText.codePointAt(i) - 97)+ +(additiveKey.charCodeAt(0)-97)}`;
            step2td4.innerHTML=`${(+(additivePlainText.codePointAt(i) - 97)+ +(additiveKey.charCodeAt(0)-97)) % 26}`;
            step3td1.innerHTML=`${(+(additivePlainText.codePointAt(i) - 97)+ +(additiveKey.charCodeAt(0)-97)) % 26}`;
            step3td2.innerHTML=`${String.fromCharCode(
              +((+(additivePlainText.codePointAt(i) - 97)+ +(additiveKey.charCodeAt(0)-97)) % 26) + +97
              )}`;
          //  console.log(cipherStr);
        } else if (additivePlainText.charAt(i) >= "A" && additivePlainText.charAt(i) <= "Z") {
          cipherStr += String.fromCharCode(
            +((+(additivePlainText.codePointAt(i) - 65)+ +(additiveKey.charCodeAt(0)-65)) % 26) + +65
          );
          step1td2.innerHTML=`${additivePlainText.codePointAt(i) - 65}`;
          step2td1.innerHTML=`${additivePlainText.codePointAt(i) - 65}`;
          step2td2.innerHTML=`${additiveKey.charCodeAt(0)-65}`;
          step2td3.innerHTML=`${+(additivePlainText.codePointAt(i) - 65)+ +(additiveKey.charCodeAt(0)-65)}`;
          step2td4.innerHTML=`${(+(additivePlainText.codePointAt(i) - 65)+ +(additiveKey.charCodeAt(0)-65)) % 26}`;
          step3td1.innerHTML=`${(+(additivePlainText.codePointAt(i) - 65)+ +(additiveKey.charCodeAt(0)-65)) % 26}`;
          step3td2.innerHTML=`${String.fromCharCode(
            +((+(additivePlainText.codePointAt(i) - 65)+ +(additiveKey.charCodeAt(0)-65)) % 26) + +65
            )}`;
        } else {
          cipherStr += additivePlainText.charAt(i);
        }
      }
      const additiveCipherStr = document.getElementById("additiveCipherField");
      additiveCipherStr.value = cipherStr;
      const additiveCipherh3 = additiveStepsTable.getElementsByTagName('h3')[0];
      additiveCipherh3.innerHTML=`Cipher text => ${cipherStr}`;
      additiveTheoryDecrypt();
    
}
function additiveTheoryDecrypt(){
  setAdditiveDocument();
  let plainStr="";
  table4 = additiveStepsTable.getElementsByTagName('table')[3];
  table5 = additiveStepsTable.getElementsByTagName('table')[4];

  const step4tr1 = document.createElement('tr');
  const step4tr2 = document.createElement('tr');
  const step4tr3 = document.createElement('tr');
  const step4tr4 = document.createElement('tr');

  const step5tr1 = document.createElement('tr');
  const step5tr2 = document.createElement('tr');

  table4.appendChild(step4tr1);
  table4.appendChild(step4tr2);
  table4.appendChild(step4tr3);
  table4.appendChild(step4tr4);

  table5.appendChild(step5tr1);
  table5.appendChild(step5tr2);

  let step4r1td0 = document.createElement('td');
  step4tr1.appendChild(step4r1td0);
  step4r1td0.innerHTML ="Message";
  let step4r2td0 = document.createElement('td');
  step4tr2.appendChild(step4r2td0);
  step4r2td0.innerHTML ="Key";
  let step4r3td0 = document.createElement('td');
  step4tr3.appendChild(step4r3td0);
  step4r3td0.innerHTML ="Message - Key";
  let step4r4td0 = document.createElement('td');
  step4tr4.appendChild(step4r4td0);
  step4r4td0.innerHTML ="Mod 26";

  let step5r1td0 = document.createElement('td');
  step5tr1.appendChild(step5r1td0);
  step5r1td0.innerHTML ="Integer";
  let step5r2td0 = document.createElement('td');
  step5tr2.appendChild(step5r2td0);
  step5r2td0.innerHTML ="Message";

  for (let i = 0; i < additiveCipherText.length; i++) {
    let step4td1 = document.createElement('td');
    let step4td2 = document.createElement('td');
    let step4td3 = document.createElement('td');
    let step4td4 = document.createElement('td');

    let step5td1 = document.createElement('td');
    let step5td2 = document.createElement('td');

    step4tr1.appendChild(step4td1);
    step4tr2.appendChild(step4td2);
    step4tr3.appendChild(step4td3);
    step4tr4.appendChild(step4td4);

    step5tr1.appendChild(step5td1);
    step5tr2.appendChild(step5td2);
    if (additiveCipherText.charAt(i) >= "a" && additiveCipherText.charAt(i) <= "z") {
      step4td1.innerHTML=`${additiveCipherText.codePointAt(i) - 97}`;
      step4td2.innerHTML=`${additiveKey.charCodeAt(0)-97}`;
      step4td3.innerHTML=`${additiveCipherText.codePointAt(i) - 97 - (additiveKey.charCodeAt(0)-97)}`;
      intermediate = (additiveCipherText.codePointAt(i) - 97 - (additiveKey.charCodeAt(0)-97))% 26;
      if (intermediate < 0) {
        plainStr += String.fromCharCode(+(+intermediate + +26) + +97);
        step4td4.innerHTML=`${+intermediate + +26}`;
        step5td1.innerHTML=`${+intermediate + +26}`;
        step5td2.innerHTML=`${String.fromCharCode(+(+intermediate + +26) + +97)}`;
      } else {
        plainStr += String.fromCharCode(+intermediate + +97);
        step4td4.innerHTML=`${intermediate}`;
        step5td1.innerHTML=`${intermediate}`;
        step5td2.innerHTML=`${String.fromCharCode(+intermediate + +97)}`;
      }
    } else if (additiveCipherText.charAt(i) >= "A" && additiveCipherText.charAt(i) <= "Z") {
      step4td1.innerHTML=`${additiveCipherText.codePointAt(i) - 65}`;
      step4td2.innerHTML=`${additiveKey.charCodeAt(0)-65}`;
      step4td3.innerHTML=`${additiveCipherText.codePointAt(i) - 65 - (additiveKey.charCodeAt(0)-65)}`;
      intermediate = (additiveCipherText.codePointAt(i) - 65 - (additiveKey.charCodeAt(0)-65)) % 26;
      if (intermediate < 0) {
        plainStr += String.fromCharCode(+(+intermediate + +26) + +65);
        step4td4.innerHTML=`${+intermediate + +26}`;
        step5td1.innerHTML=`${+intermediate + +26}`;
        step5td2.innerHTML=`${String.fromCharCode(+(+intermediate + +26) + +65)}`;
      } else {
        plainStr += String.fromCharCode(+intermediate + +65);
        step4td4.innerHTML=`${intermediate}`;
        step5td1.innerHTML=`${intermediate}`;
        step5td2.innerHTML=`${String.fromCharCode(+intermediate + +65)}`;
      }
    } else {
      plainStr += additiveCipherText.charAt(i);
    }
    }
    // const additiveCipherStr = document.getElementById("additivePlainField");
    // additiveCipherStr.value = plainStr;
    const additivePlainh3 = additiveStepsTable.getElementsByTagName('h3')[1];
    additivePlainh3.innerHTML=`Plain text => ${plainStr}`;
}
function additiveDecrypt(){
  setAdditiveDocument();
  let plainStr="";
  for (let i = 0; i < additiveCipherText.length; i++) {
    if (additiveCipherText.charAt(i) >= "a" && additiveCipherText.charAt(i) <= "z") {
      intermediate = (additiveCipherText.codePointAt(i) - 97 - (additiveKey.charCodeAt(0)-97))% 26;
      if (intermediate < 0) {
        plainStr += String.fromCharCode(+(+intermediate + +26) + +97);
      } else {
        plainStr += String.fromCharCode(+intermediate + +97);
      }
    } else if (additiveCipherText.charAt(i) >= "A" && additiveCipherText.charAt(i) <= "Z") {
      intermediate = (additiveCipherText.codePointAt(i) - 65 - (additiveKey.charCodeAt(0)-65)) % 26;
      if (intermediate < 0) {
        plainStr += String.fromCharCode(+(+intermediate + +26) + +65);
      } else {
        plainStr += String.fromCharCode(+intermediate + +65);
      }
    } else {
      plainStr += additiveCipherText.charAt(i);
    }
    }
    const additiveCipherStr = document.getElementById("additivePlainField");
    additiveCipherStr.value = plainStr;
  
}
function clearAdditiveTable(){
  table1 = additiveStepsTable.getElementsByTagName('table')[0];
  table2 = additiveStepsTable.getElementsByTagName('table')[1];
  table3 = additiveStepsTable.getElementsByTagName('table')[2];
  table4 = additiveStepsTable.getElementsByTagName('table')[3];
  table5 = additiveStepsTable.getElementsByTagName('table')[4];
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