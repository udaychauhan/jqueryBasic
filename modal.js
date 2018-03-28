$(document).ready(() => {
	
  
  
  $("#modalTriggerButton").click( () => {
    
    $("#modalBg").css("left","0")
  
    $("#modalContainer").css("top","0")
    
  })

  $("#modalBg").click( () => {
    
    $("#modalBg").css("left","-100%")
  
    $("#modalContainer").css("top","-100%")
    
  })
  
   $(".cancelButton").click( () => {
    
    $("#modalBg").css("left","-100%")
   $("#modalContainer").css("top","-100%")
    
  })
  
  
	
})// end doc ready