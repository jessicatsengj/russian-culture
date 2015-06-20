$(function(){

	var duration = 300;

	$('.culture, .spots, .cuisine, .tips, .alphabet, .conversation')
        
		.on('mouseover', function(){
            $(this).find('.wordButton').stop(true).animate({ opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.wordButton').stop(true).animate({ opacity: 0}, duration);
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
