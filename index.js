var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice1 = "dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", "images/"+randomDice1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", "images/"+randomDice2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "It's a DRAW!";
}
else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🤴 You Win!";
}
else {
    document.querySelector("h1").innerHTML = "Computer Wins! 🤴";
}