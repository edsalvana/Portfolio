	var breakerList = [];

	//called when the page finishes loading
	 $(document).ready( function(){
		
	 	breakerList = $("#projects").find(".breaker");
	 	//console.log($breakerList)
		
		$(window).resize( onResize );
		//$(window).scroll( onScroll );
		onResize();

		
	});	

	 function onResize( e ){

	 	var i = 0;
		var targetWidth = parseInt( $( "#projects").css("width" ) ) - 240;
	
		for(  i = 0; i < breakerList.length; i++ ){
			$(breakerList[i]).css("width", targetWidth );
			
		}
	 }