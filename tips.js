$(function(){

	var duration = 300;

	$('.block')
        
		.on('mouseover', function(){
            // $(this).stop(true).animate({ 'background-color': rgba(255,255,255,0.9) opacity: 0 }, duration);
            $(this).find('img').stop(true).animate({ /*'z-index': '-1'*/ opacity: 0 }, duration);
        })
        .on('mouseout', function(){
            $(this).stop(true).animate({ /*'background-color': 'none'*/ }, duration);
            $(this).find('img').stop(true).animate({ /*'z-index': 1 */ opacity: 1}, duration);
        });



        $("#conv").mouseover(function(){
            $("#conv").stop(true).animate({
            opacity:'0.5'});  
        });
        $("#conv").mouseout(function(){
            $("#conv").stop(true).animate({
            opacity:'1'});  
        });

        $("#alph").mouseover(function(){
            $("#alph").stop(true).animate({
            opacity:'0.5'});  
        });
        $("#alph").mouseout(function(){
            $("#alph").stop(true).animate({
            opacity:'1'});  
        });

        $("#abou").mouseover(function(){
            $("#abou").stop(true).animate({
            opacity:'0.5'});  
        });
        $("#abou").mouseout(function(){
            $("#abou").stop(true).animate({
            opacity:'1'});  
        });


});