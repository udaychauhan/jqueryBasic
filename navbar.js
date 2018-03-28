$(document).ready(() => {
	 
    
  
  $(".dropBtn").hover(() => {
    let dropBtnPosition = $(".dropBtn").position();
    let dropBtnHeight = $(".dropBtn").height();
        
    let totalYPos = dropBtnPosition.top + dropBtnHeight;
    
    console.log(totalYPos)
    $(".dropdown-items").css({top: totalYPos,  position:'absolute'});
     $(".dropdown-items").show()
});
  
  $( ".dropBtn" ).mouseleave(()=> {
   $(".dropdown-items").hide();
});
  
  $( ".dropdown-items" ).mouseenter(()=> {
   $(".dropdown-items").show();
});
  
   $( ".dropdown-items" ).mouseleave(()=> {
   $(".dropdown-items").hide();
});
  
  $("#search-button").click(() =>{
     $(".search-form").val("")
  })
  
	
})// end doc ready