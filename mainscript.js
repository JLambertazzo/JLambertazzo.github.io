$(document).ready(()=>{
  $("#shoot").on("click", ()=>{ //WIP
    window.open("underconstruction.html", "_self");
  })

  $("#ball").on("click", ()=>{ //WIP
    window.open("underconstruction.html", "_self");
  })

  $("#pass").on("click", ()=>{ //WIP
    window.open("underconstruction.html", "_self");
  })

  $("#goBack").on("click", ()=>{
    window.open("index.html", "_self");
  })

  $(".subHeader").on("mouseenter", (event)=>{
    $(event.currentTarget).animate({fontSize: "2.5em"})
  })

  $(".subHeader").on("mouseleave", (event)=>{
    $(event.currentTarget).animate({fontSize: "2em"})
  })
})
