
let additivePlainText;
let additiveKey;
let additiveCipherText;
function setAdditiveDocument(){
    additiveKey = document.getElementById('additiveKeyField').value;
    additivePlainText = document.getElementById('additivePlainField').value;
    additiveCipherText = document.getElementById('additiveCipherField').value;
}

function additiveEncrypt(){
    setAdditiveDocument();
    let cipherStr="";
    for (let i = 0; i < additivePlainText.length; i++) {
        if (additivePlainText.charAt(i) >= "a" && additivePlainText.charAt(i) <= "z") {
          // console.log(additivePlainText.codePointAt(i) ,additiveKey.charCodeAt(0));
          cipherStr += String.fromCharCode(
            +((+(additivePlainText.codePointAt(i) - 97)+ +(additiveKey.charCodeAt(0)-97)) % 26) + +97
            );
          //  console.log(cipherStr);
        } else if (additivePlainText.charAt(i) >= "A" && additivePlainText.charAt(i) <= "Z") {
          cipherStr += String.fromCharCode(
            +((+(additivePlainText.codePointAt(i) - 65)+ +(additiveKey.charCodeAt(0)-65)) % 26) + +65
          );
        } else {
          cipherStr += additivePlainText.charAt(i);
        }
      }
      const additiveCipherStr = document.getElementById("additiveCipherField");
      additiveCipherStr.value = cipherStr;
    
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