$(document).ready(()=>{
  $("#shoot").on("click", ()=>{ //WIP
    window.open("shooting.html", "_self");
  })

  $("#ball").on("click", ()=>{ //WIP
    window.open("underconstruction.html", "_self");
  })

  $("#pass").on("click", ()=>{ //WIP
    window.open("underconstruction.html", "_self");
  })

  $(".textExpand").on("mouseenter", (event)=>{
    $(event.currentTarget).animate({fontSize: "2.5em"})
  })

  $(".textExpand").on("mouseleave", (event)=>{
    $(event.currentTarget).animate({fontSize: "2em"})
  })

  $(".homeButton").on("click", ()=>{
    window.open("index.html", "_self");
  })
})
