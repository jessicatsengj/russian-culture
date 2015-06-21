$(function(){

	var duration = 300;

	// $('.introduction, .pelmeni, .blinis, .borshch, .cavair, .kvass, .vodka, .meat')
        
	// 	.on('mouseover', function(){
 //            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
 //        })
 //        .on('mouseout', function(){
 //            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
 //        });

    $('.blinis')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "320px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "300px"}, duration);
        });

    $('.pelmeni')

        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "290px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "270px"}, duration);
        });

    $('.borshch')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "320px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "300px"}, duration);
        });

    $('.cavair')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "350px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "330px"}, duration);
        });

     $('.kvass')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "180px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "160px"}, duration);
        });

     $('.vodka')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "370px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "350px"}, duration);
        });

     $('.meat')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "320px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "300px"}, duration);
        });

     $('.introduction')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
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
