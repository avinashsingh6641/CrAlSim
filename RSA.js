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
function rsaPublicKey_D_Generator(E){
     for(let D = 0 ;D<=100000;D++ ){
       if(((E*D)%rsaL) == 1){
        possibleDValueArray.push(D);
       }
     }
}
function fastModulerExponent(m,E,Mod){
  var binaryOfExponent = parseInt(E,16).toString(2);
  console.log(binaryOfExponent);
  let result = m;
  for(let i = 1;i<binaryOfExponent.length;i++){
    if(binaryOfExponent.charAt(i)==0){
       result = (result^2)%Mod;
    }
    else if(binaryOfExponent.charAt(i)==1){
      result = (result^2)%Mod;
      result = (result*m)%Mod;
    }
  }
  return result;
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
    console.log(rsaPrimeP.value);
    console.log(rsaPrimeQ.value);
    console.log(rsaPrimeP.value*rsaPrimeQ.value);
    rsaN = rsaPrimeP.value*rsaPrimeQ.value;
    rsaL = (rsaPrimeP.value-1)*(rsaPrimeQ.value-1)
    step1Span[2].innerHTML= rsaN;
    step1Span[3].innerHTML= rsaL;
    for(let i = 1 ;i<=rsaL;i++){
        let gcdofN = gcd(i,rsaN);
        let gcdofL = gcd(i,rsaL);
        if(gcdofN == 1 && gcdofL == 1){
            possibleEValueArray.push(i);
        }
    }
    console.log(possibleEValueArray);
    console.log(rsaPublicKey_D_Generator(38539));
    console.log(possibleDValueArray);
    console.log("here",powerMod(101,38537,39203));
    console.log("here",powerMod(31975,87497,39203));
    
}
