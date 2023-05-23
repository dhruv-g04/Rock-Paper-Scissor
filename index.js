var num1=Math.floor(Math.random()*3)+1;
var num2=Math.floor(Math.random()*3)+1;
console.log("images/img"+num1+"1.png");
document.querySelector(".img1").setAttribute("src","images/img1"+num1+".png");
document.querySelector(".img2").setAttribute("src","images/img2"+num2+".png");
if(num1===num2){
    document.querySelector("h1").innerText="DRAW!";
}
else if(num1===1 && num2==3){
    document.querySelector("h1").innerText="🚩Player 1 Win";
}
else if(num1===1 && num2===2){
    document.querySelector("h1").innerText="Player 2 Win🚩";
}
else if(num1===2 && num2==1){
    document.querySelector("h1").innerText="🚩Player 1 Win";
}
else if(num1===2 && num2===3){
    document.querySelector("h1").innerText="Player 2 Win🚩";
}
else if(num1===3 && num2==2){
    document.querySelector("h1").innerText="🚩Player 1 Win";
}
else if(num1===3 && num2===1){
    document.querySelector("h1").innerText="Player 2 Win🚩";
}