$(document).ready(()=>{
  $("#shoot").on("click", ()=>{
    window.open("shooting.html", "_self");
  })

  $("#ball").on("click", ()=>{
    window.open("ballhandling.html", "_self");
  })

  $("#pass").on("click", ()=>{
    window.open("passing.html", "_self");
  })

  $(".subHeader").on("mouseenter", (event)=>{
    $(event.currentTarget).animate({fontSize: "2.5em"})
  })

  $(".subHeader").on("mouseleave", (event)=>{
    $(event.currentTarget).animate({fontSize: "2em"})
  })
})
