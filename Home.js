
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

card1.addEventListener("mouseover", hoverin);
card2.addEventListener("mouseover", hoverin);
card3.addEventListener("mouseover", hoverin);

card1.addEventListener("mouseout", hoverout);
card2.addEventListener("mouseout", hoverout);
card3.addEventListener("mouseout", hoverout);
  
function hoverin(e){
    card1.classList.toggle('paused');
    card2.classList.toggle('paused');
    card3.classList.toggle('paused');
}
function hoverout(e){
    card1.classList.toggle('running');
    card2.classList.toggle('running');
    card3.classList.toggle('running');
}
