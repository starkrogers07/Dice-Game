var i=0;
var x=0;
var y=0;

if(i==0){
var a=prompt("Player1 Name: ");
var b=prompt("Player2 Name: ");

document.querySelector(".p1").innerHTML = a;
document.querySelector(".p2").innerHTML = b;
}

function roll(){
setTimeout(function(){

var randomNumber1 = Math.random();
 randomNumber1 = randomNumber1*6;
 randomNumber1 = Math.floor(randomNumber1)+1;
    
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;    

document.querySelector(".img1").setAttribute("src" , "./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src" , "./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = a+ " Wins 😎";
f = true;
x++;
document.querySelector(".a1").innerHTML = x;
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = b+" Wins 😋";
    f = true;
    y++;
    document.querySelector(".a2").innerHTML = y;
}

else{
    document.querySelector("h1").innerHTML = "Draw 🤡";
    f = true;
}    

i++;
}, 900);
}



