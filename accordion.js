$(document).ready(() => {
	
    $("#collapse-one").show()
    $("#collapse-two").hide()
    $("#collapse-three").hide()
    
  let timeLimit = "100"
  $("#card-button-one").click(() => {
    $("#collapse-two").hide(timeLimit)
    $("#collapse-three").hide(timeLimit)
   let isVisible = $('#collapse-one').is(':visible');
    if(isVisible){
      $("#collapse-one").hide(timeLimit)
    }else{
      $("#collapse-one").show(timeLimit)
    }
});
  
  $("#card-button-two").click(() => {
    $("#collapse-one").hide(timeLimit)
    $("#collapse-three").hide(timeLimit)
   let isVisible = $('#collapse-two').is(':visible');
    if(isVisible){
      $("#collapse-two").hide(timeLimit)
    }else{
      $("#collapse-two").show(timeLimit)
    }
});
  
   $("#card-button-three").click(() => {
    $("#collapse-one").hide(timeLimit)
    $("#collapse-two").hide(timeLimit)
   let isVisible = $('#collapse-three').is(':visible');
    if(isVisible){
      $("#collapse-three").hide(timeLimit)
    }else{
      $("#collapse-three").show(timeLimit)
    }
});
 
  
  
	
})// end doc ready