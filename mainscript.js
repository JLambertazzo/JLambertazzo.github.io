let shootingLink = document.getElementById("shoot");
let ballHandlingLink = document.getElementById("ball");
let passingLink = document.getElementById("pass");

function openShooting(){
  window.open("shooting.html", "_self");
}

function openBallHandling(){
  window.open("ballhandling.html", "_self");
}

function openPassing(){
  window.open("passing.html", "_self");
}

shootingLink.onclick = openShooting;
ballHandlingLink.onclick = openBallHandling;
passingLink.onclick = openPassing;
