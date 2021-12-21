// for player 1
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomImageSource= "images/dice"+ randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


//  for player 2
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+ randomnumber2+".png";;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);


// result of the game

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🎉Player1 Won "
}
else if (randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="🎉Player2 Won"
}
else{
    document.querySelector("h1").innerHTML="🥴MatchDraw better luck next time "
}