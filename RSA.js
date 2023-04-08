function rsaBackdropAndModal(modal){
  const backdrop = document.getElementsByClassName('rsaBackdrop')[0];
  backdrop.style.display="block";
  modal.style.display="block";
}
function closeRsaBackdrop(modal){
  const backdrop = document.getElementsByClassName('rsaBackdrop')[0];
  backdrop.style.display="none";
  modal.style.display="none";
}

function openPossibleEncryptionKeyDiv(){
  const modal = document.getElementsByClassName('rsaEModal')[0];
  rsaBackdropAndModal(modal);
}
function closePossibleEncryptionKeyDiv(){
  const modal = document.getElementsByClassName('rsaEModal')[0];
  closeRsaBackdrop(modal);
}
function openPossibleDecryptionKeyDiv(){
  const modal = document.getElementsByClassName('rsaDModal')[0];
  rsaBackdropAndModal(modal);
}
function closePossibleDecryptionKeyDiv(){
  const modal = document.getElementsByClassName('rsaDModal')[0];
  closeRsaBackdrop(modal);
}

let rsaPrimeP; 
let rsaPrimeQ;
let rsaStep1;
let step1Span;
let rsaN;
let rsaL;
let possibleEValueArray = [];
let possibleDValueArray = [];
function setRsaDocument(){
    rsaPrimeP = document.getElementById("RsaP");
    rsaPrimeQ = document.getElementById("RsaQ");
    rsaStep1=document.getElementsByClassName("rsaStep1Input")[0];
    step1Span = rsaStep1.getElementsByTagName('span');
    console.log(step1Span);
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
function rsaDReset(){
  const rsaDValueDiv = document.getElementsByClassName('rsaDModal')[0];
  rsaDValueDiv.innerHTML="";
}
function rsaEReset(){
  const rsaEValueDiv = document.getElementsByClassName('rsaEModal')[0];
  rsaEValueDiv.innerHTML="";
}
function rsaPublicKey_D_Generator(){
  rsaDReset();
  const E = document.getElementById("EInput").value;
  // const modal = document.getElementsByClassName('rsaEModal')[0];
  const rsaDValueDiv = document.getElementsByClassName('rsaDModal')[0];
     for(let D = 0 ;D<=100000;D++ ){
       if(((E*D)%rsaL) == 1){
        rsaDValueDiv.innerHTML=`${rsaDValueDiv.innerHTML},${D}`;
        // possibleDValueArray.push(D);
       }
     }
}
function powerMod(base, exponent, modulus) {
  if (modulus === 1) return 0;
  var result = 1;
  base = base % modulus;
  while (exponent > 0) {
      if (exponent % 2 === 1)  //odd number
          result = (result * base) % modulus;
      exponent = exponent >> 1; //divide by 2
      base = (base * base) % modulus;
  }
  return result;
}
function rsaPQNL(){
    setRsaDocument();
    rsaEReset();
    // console.log(rsaPrimeP.value);
    // console.log(rsaPrimeQ.value);
    // console.log(rsaPrimeP.value*rsaPrimeQ.value);
    rsaN = rsaPrimeP.value*rsaPrimeQ.value;
    rsaL = (rsaPrimeP.value-1)*(rsaPrimeQ.value-1)
    step1Span[2].innerHTML= rsaN;
    step1Span[3].innerHTML= rsaL;
    const rsaEValueDiv = document.getElementsByClassName('rsaEModal')[0];
    // const EValue = rsaEValueDiv.getElementsByTagName('div')[0];
    for(let i = 1 ;i<=rsaL;i++){
        let gcdofN = gcd(i,rsaN);
        let gcdofL = gcd(i,rsaL);
        if(gcdofN == 1 && gcdofL == 1){
            rsaEValueDiv.innerHTML=`${rsaEValueDiv.innerHTML},${i}`;
            // possibleEValueArray.push(i);
        }
    }
    // console.log(possibleEValueArray);
    // console.log(rsaPublicKey_D_Generator(38539));
    // console.log(possibleDValueArray);
    // console.log("here",powerMod(101,38537,39203));
    // console.log("here",powerMod(31975,87497,39203));
    
}
function rsaEncrypt(){
  const E = document.getElementById("EInput").value;
  // const D = document.getElementById("DInput");
  const message = document.getElementById("rsaMessage").value;
  const cipher = document.getElementById("rsaCipher");

  for(let i = 0;i<message.length;i++){
    console.log(message.charCodeAt(i));
    let rsaCipher = powerMod(message.charCodeAt(i), E,rsaN);
    cipher.value =`${cipher.value},${rsaCipher}`;
  }
  
}
function rsaDecrypt(){
  // const E = document.getElementById("EInput").value;
  const D = document.getElementById("DInput").value;
  const message = document.getElementById("rsaMessage");
  message.value="";
  const cipher = document.getElementById("rsaCipher").value;
  const cipherArray = cipher.split(",");
  let string = "";
  for(let i = 1;i<cipherArray.length;i++){
    // console.log(message.charCodeAt(i));
    let rsaMessage = powerMod(cipherArray[i],D,rsaN);
    console.log(cipherArray[i]);
    console.log(rsaMessage);
    string+=String.fromCharCode(rsaMessage);
  }
  message.value= `${string}`;
}
