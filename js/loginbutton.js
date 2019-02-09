$(document).ready(()=>{
  var loggedIn = false;

  function checkLoggedIn(){
    el = document.getElementById("loginButton");
    if(loggedIn) el.innerText("MY PROFILE");
    else el.innerText("LOGIN");
  }

  $("#loginButton").on("click", ()=>{
    window.open("./login.html");
  });

})
