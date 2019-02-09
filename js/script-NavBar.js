$(document).ready(()=>{
    $(window).on("resize", ()=>{
      checkCollapsed();
    });

    function checkCollapsed(){
      $(".btn-login").css({marginLeft: "100px"});
    }
})
