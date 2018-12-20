$(document).ready(()=>{
  $("#shoot").on("click", ()=>{
    window.open("shooting.html", "_self");
  })

  $("#shoot").on("mouseenter", (event)=>{
    $(event.currentTarget).animate({fontSize: "2.5em"})
  })

  $("#shoot").on("mouseleave", (event)=>{
    $(event.currentTarget).animate({fontSize: "2em"})
  })

  $("#ball").on("click", ()=>{
    window.open("ballhandling.html", "_self");
  })

  $("#ball").on("mouseenter", (event)=>{
    $(event.currentTarget).animate({fontSize: "2.5em"})
  })

  $("#ball").on("mouseleave", (event)=>{
    $(event.currentTarget).animate({fontSize: "2em"})
  })

  $("#pass").on("click", ()=>{
    window.open("passing.html", "_self");
  })

  $("#pass").on("mouseenter", (event)=>{
    $(event.currentTarget).animate({fontSize: "2.5em"})
  })

  $("#pass").on("mouseleave", (event)=>{
    $(event.currentTarget).animate({fontSize: "2em"})
  })
})
