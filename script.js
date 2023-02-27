$(document).ready(function(){
  $(".pop-up-activator").click(function(){
    $(".pop-up-overlay").addClass("activated");
    $(".pop-up").addClass("pop-up-open");
    $(".pop-up ").removeClass("pop-up-open-down-open");
  });
  $(".pop-up header .pop-up-close").click(function(){
    $(".pop-up .down").removeClass("pop-up-down-open");
    setTimeout(function(){
      $(".pop-up ").removeClass("pop-up-open-down-open");
      $(".pop-up-overlay").removeClass("activated");
      $(".pop-up").removeClass("pop-up-open");
    },1000);
    
  });
  $(".pop-up .pop-up-under-open").click(function(){
    $(".pop-up ").toggleClass("pop-up-open-down-open");
    $(".pop-up .down").toggleClass("pop-up-down-open");
  });
});