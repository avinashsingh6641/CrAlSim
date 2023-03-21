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
}