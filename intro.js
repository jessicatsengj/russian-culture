$(function(){

	var duration = 300;

	$('.culture, .spots, .cuisine, .tips, .alphabet, .conversation')
        
		.on('mouseover', function(){
            $(this).find('.wordButton').stop(true).animate({ opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('.wordButton').stop(true).animate({ opacity: 0}, duration);
        });
});
