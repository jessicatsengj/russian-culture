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
            $(this).find('img').stop(true).animate({ width : "290px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "270px"}, duration);
        });

    $('.pelmeni')

        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "260px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "240px"}, duration);
        });

    $('.borshch')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "290px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "270px"}, duration);
        });

    $('.cavair')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "320px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "300px"}, duration);
        });

     $('.kvass')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "150px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "130px"}, duration);
        });

     $('.vodka')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "340px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "320px"}, duration);
        });

     $('.meat')
           
        .on('mouseover', function(){
            $(this).find('.word').stop(true).animate({ opacity: 1}, duration);
            $(this).find('img').stop(true).animate({ width : "290px"}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.word').stop(true).animate({ opacity: 0}, duration);
            $(this).find('img').stop(true).animate({ width : "270px"}, duration);
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
