$(function(){

	var duration = 300;

	$('#spot1')
        
		.on('mouseover', function(){
            $('#moscow').stop(true).animate({ opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $('#moscow').stop(true).animate({ opacity: 0}, duration);
        });

    $('#spot2')
        
		.on('mouseover', function(){
            $('#baygal').stop(true).animate({ opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $('#baygal').stop(true).animate({ opacity: 0}, duration);
        });

    $('#spot3')
        
		.on('mouseover', function(){
            $('#redSquare').stop(true).animate({ opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $('#redSquare').stop(true).animate({ opacity: 0}, duration);
        });

     $('#spot4')
        
        .on('mouseover', function(){
            $('#vlad').stop(true).animate({ opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $('#vlad').stop(true).animate({ opacity: 0}, duration);
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