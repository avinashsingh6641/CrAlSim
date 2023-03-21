let multiplicativePlainText;
let multiplicativeKey;
let multiplicativeCipherText;
function setMultiplicativeDocument() {
  multiplicativeKey = document.getElementById('multiplicativeKeyField').value;
  multiplicativePlainText = document.getElementById('multiplicativePlainField').value;
  multiplicativeCipherText = document.getElementById('multiplicativeCipherField').value;
}

function multiplicativeEncrypt() {
  setMultiplicativeDocument();
  let keyInv = multiKeyInv();
  console.log(keyInv);
  try {
    if (keyInv == 0) {
      throw new Error(alert("this key Field dont have multiplicative inverse please select another key"));
    }
  let cipherStr = "";
  for (let i = 0; i < multiplicativePlainText.length; i++) {
    if (multiplicativePlainText.charAt(i) >= "a" && multiplicativePlainText.charAt(i) <= "z") {
      cipherStr += String.fromCharCode(
        +(((multiplicativePlainText.codePointAt(i) - 97) * (multiplicativeKey.charCodeAt(0) - 97)) % 26) + +97
      );
    } else if (multiplicativePlainText.charAt(i) >= "A" && multiplicativePlainText.charAt(i) <= "Z") {
      cipherStr += String.fromCharCode(
        +(((multiplicativePlainText.codePointAt(i) - 65) * (multiplicativeKey.charCodeAt(0) - 65)) % 26) + +65
      );
    } else {
      cipherStr += multiplicativePlainText.charAt(i);
    }
  }
  const multiplicativeCipherStr = document.getElementById("multiplicativeCipherField");
  multiplicativeCipherStr.value = cipherStr;

}catch (err) {
  console.log(err);
} 
}
function multiKeyInv() {
  let aInv;
  if (multiplicativeKey.charAt(0) >= "a" && multiplicativeKey.charAt(0) <= "z") {
    for (let i = 1; i < 26; i++) {
      if ((((multiplicativeKey.charCodeAt(0) - 97) * i) % 26) == 1) {
        aInv = i;
        break;
      }else{
        aInv=0;
      }
    }

  } else {
    for (let i = 1; i < 26; i++) {

      if (((multiplicativeKey.charCodeAt(0) - 65) * i) % 26 == 1) {
        aInv = i;
        break;
      }else{
        aInv=0;
      }
    }

  }

  return aInv;
}
function multiplicativeDecrypt() {
  setMultiplicativeDocument();
  let keyInv = multiKeyInv();
  try {
    if (keyInv == 0) {
      throw new Error(alert("this key Field dont have multiplicative inverse please select another key"));
    }

    console.log(keyInv);
    let plainStr = "";
    for (let i = 0; i < multiplicativeCipherText.length; i++) {
      if (multiplicativeCipherText.charAt(i) >= "a" && multiplicativeCipherText.charAt(i) <= "z") {
        // console.log(additivePlainText.codePointAt(i) ,additiveKey.charCodeAt(0));
        plainStr += String.fromCharCode(
          +((+(multiplicativeCipherText.codePointAt(i) - 97) * keyInv) % 26) + +97
        );
        //  console.log(cipherStr);
      } else if (multiplicativeCipherText.charAt(i) >= "A" && multiplicativeCipherText.charAt(i) <= "Z") {
        plainStr += String.fromCharCode(
          +((+(multiplicativeCipherText.codePointAt(i) - 65) * keyInv) % 26) + +65
        );
      } else {
        plainStr += multiplicativeCipherText.charAt(i);
      }
    }
    const multiplicativePlainStr = document.getElementById("multiplicativePlainField");
    multiplicativePlainStr.value = plainStr;
  }catch (err) {
    console.log(err);
  } 
}