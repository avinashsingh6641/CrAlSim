
function displayDiv() {
  document.getElementsByClassName('affineShowTransformedAlphabets')[0].style.display = 'block';
}

function gcd(x, y) {
  let r;
  while (r != 0) {
    r = x % y;
    x = y;
    y = r;
  }
  return x
}

function generateCipher() {
  const table = document.getElementById('affinetable');

  const plaintext = document.getElementById('plaintext').value;
  const a = document.getElementById('affinekey1').value;
  const b = document.getElementById('affinekey2').value;
  const message = document.getElementById('message');
  message.innerHTML = "";
  let cipherStr = ""
  try {
    if (plaintext.length == 0 ||a.length==0 ||b.length==0) {
      throw new Error(alert("key field or message filed is missing"));
    }
    if (gcd(a,26) != 1) {
      message.innerHTML = "enter valid key , A should be co-prime to modulo m ,Here modulo m is 26";
      throw new Error(alert("enter valid key , A should be co-prime to modulo m ,Here modulo m is 26"));
    }
    
    
    for (let i = 0; i < plaintext.length; i++) {
      if (plaintext.charAt(i) >= 'a' && plaintext.charAt(i) <= 'z') {
        table.rows[0].insertCell().innerHTML =plaintext.charAt(i);
        table.rows[1].insertCell().innerHTML =plaintext.codePointAt(i)-97;
        table.rows[2].insertCell().innerHTML =(+((plaintext.codePointAt(i) - 97) * a) + +b) % 26;
        table.rows[3].insertCell().innerHTML =String.fromCharCode(+((+((plaintext.codePointAt(i) - 97) * a) + +b) % 26) + +97);
        cipherStr += String.fromCharCode(+((+((plaintext.codePointAt(i) - 97) * a) + +b) % 26) + +97);
      } else if (plaintext.charAt(i) >= 'A' && plaintext.charAt(i) <= 'Z') {
        table.rows[0].insertCell().innerHTML =plaintext.charAt(i);
        table.rows[1].insertCell().innerHTML =plaintext.codePointAt(i)-65;
        table.rows[2].insertCell().innerHTML =(+((plaintext.codePointAt(i) - 65) * a) + +b) % 26;
        table.rows[3].insertCell().innerHTML =String.fromCharCode(+((+((plaintext.codePointAt(i) - 65) * a) + +b) % 26) + +65);
        cipherStr += String.fromCharCode(+((+((plaintext.codePointAt(i) - 65) * a) + +b) % 26) + +65);
      }
      else {
        table.rows[0].insertCell().innerHTML =plaintext.charAt(i);
        table.rows[1].insertCell().innerHTML =plaintext.charAt(i);
        table.rows[2].insertCell().innerHTML =plaintext.charAt(i);
        table.rows[3].insertCell().innerHTML =plaintext.charAt(i);
        cipherStr += plaintext.charAt(i);
      }
    }

  } catch (err) {
    console.log(err);
  }
  console.log(cipherStr);
  const cipher = document.getElementById('ciphertext');
  cipher.value = cipherStr;
}

function decipher(){
  const ciphertext = document.getElementById('ciphertext').value;
  const a = document.getElementById('affinekey1').value;
  const b = document.getElementById('affinekey2').value;
  let aInv;
  let plainStr="";
       for(let i = 1;i<26;i++){
        if((a*i)%26 == 1){
           aInv =i;
           break;
        }
       }
       for(let j=0;j<ciphertext.length;j++){
        let intermediate;

        if (ciphertext.charAt(j) >= 'a' && ciphertext.charAt(j) <= 'z') {
          intermediate= (((ciphertext.codePointAt(j) - 97) -b) *aInv) % 26;
          if(intermediate<0){
            plainStr+= String.fromCharCode(+(+intermediate+ +26)+ +97);
          }else{
            plainStr+= String.fromCharCode(+intermediate+ +97);
          }
        } else if (ciphertext.charAt(j) >= 'A' && ciphertext.charAt(j) <= 'Z') {
          intermediate= (((ciphertext.codePointAt(j) - 65) -b) *aInv) % 26;
          if(intermediate<0){
            plainStr+= String.fromCharCode(+(+intermediate+ +26)+ +65);
          }else{
            plainStr+= String.fromCharCode(+intermediate+ +65);
          }
        }
        else {
          plainStr += ciphertext.charAt(j);
        }
       }
       console.log(plainStr);
  const plain = document.getElementById('plaintext');
  plain.value = plainStr;
}

function affineReset(){
  document.getElementById('plaintext').value ="";
  document.getElementById('affinekey1').value ="";
  document.getElementById('affinekey2').value ="";
  document.getElementById('ciphertext').value ="";
  var tabelEl=document.getElementById('affinetable');
  var rows = tabelEl.getElementsByTagName('tr');
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

// Simulator Code

let affcnt=0;
const button = document.getElementById('affine-sim-btn');
button.addEventListener('click',calculateAffineChar);

function calculateAffineChar(){
  const affinetext = document.getElementById('plaintext').value;
  const a = document.getElementById('affinekey1').value;
  const b = document.getElementById('affinekey2').value;

  const affineContentDiv= document.getElementsByClassName('affineSimulatorContent')[0];
  const table = affineContentDiv.getElementsByTagName('table')[0];
  const tr = document.createElement('tr');
  const tdA=document.createElement('td');
  const tdB=document.createElement('td');
  
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  let affineAMChar;
  let affineAMV;
  let affineBMV;
  try{
     if(affcnt >=affinetext.length){
      throw new Error(alert("all alphabets has been simulated"));
     }
     let char =affinetext.charAt(affcnt);
     const tr1=table.appendChild(tr);
     const td1 = tr1.appendChild(tdA);
     if (char>= 'a' && char<= 'z') {
      affineBMV=affinetext.codePointAt(affcnt)-97;
      affineAMV=(+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26;
      affineAMChar=String.fromCharCode(+((+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26) + +97);
    } else if (char >= 'A' && char <= 'Z') {
      affineBMV=affinetext.codePointAt(affcnt)-97;
      affineAMV=(+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26;
      affineAMChar=String.fromCharCode(+((+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26) + +97);
    }
    else {
      
    }


     td1.appendChild(div1).innerHTML=`((a*${char})+b)%26 =${affineAMChar}`;
     td1.appendChild(div2).innerHTML=`((${a}*${affineBMV})+${b})%26 =${affineAMV}`;
     tr1.appendChild(tdB).innerHTML=`${char} = ${affineAMChar}`;
     affcnt+=1;

  }catch(err){
     console.log(err);
  }
 
}

let affinetext;
let a;
let b;
let char;
let p1;
let p2;
let calculatedVal;
let calculatedChar;
let val;
let functionCount = Number(1);
function affineSimulateFunctions(){
  const affinetext = document.getElementById('plaintext').value;
  if(affcnt >=affinetext.length){
    p1.innerHTML="all values done";
    p2.innerHTML="all values done";
    calculatedVal.innerHTML="all values done";
    calculatedChar.innerHTML="all values done";
  }else{
    if(functionCount==1){
      affineCalcFun1();
    }else if(functionCount==2){
      affineCalcFun2();
    }else if(functionCount==3){
      affineCalcFun3();
    }
  }
}

// const affinecalButton = document.getElementById('affine-next-simulator');
// affinecalButton.addEventListener('click',eval(affineSimulateFunctions));
function affineCalcFun1(){
  affinetext = document.getElementById('plaintext').value;
  a = document.getElementById('affinekey1').value;
  b = document.getElementById('affinekey2').value;

  char = affinetext.charAt(affcnt);
  p1 = document.getElementById('affineuppercal');
  p2 = document.getElementById('affinelowercal');
  calculatedVal=document.getElementById('affinecalval');
  calculatedChar=document.getElementById('affinecalchar');
  calculatedChar.innerHTML="";

  if (char>= 'a' && char<= 'z'){
    val=affinetext.codePointAt(affcnt)-97;
  }else if(char>= 'A' && char<= 'Z'){
    val=affinetext.codePointAt(affcnt)-65;
  } 
  p2.innerHTML=`${val}*${a}`;
  p1.innerHTML=`((${char}*A)+B)%m`;
  calculatedVal.innerHTML=`${val*a}`;
  functionCount++;
}

function affineCalcFun2(){
  let newVal = Number(calculatedVal.innerHTML);
  p2.innerHTML=`${newVal}+${b}`;
  calculatedVal.innerHTML=`${+newVal + +b}`;
  functionCount++;
}

function affineCalcFun3(){
  let newVal = Number(calculatedVal.innerHTML);
  p2.innerHTML=`${newVal}%${26}`;
  calculatedVal.innerHTML=`${newVal % 26}`;
  calculatedChar.innerHTML=`${String.fromCharCode(+((+((affinetext.codePointAt(affcnt) - 97) * a) + +b) % 26) + +97)}`;
  functionCount=1;
  calculateAffineChar();
}
