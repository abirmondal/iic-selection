$(document).ready(function(){
	
	$('#menu').click(function(){
		$('.right').slideToggle("slow");
	});
	$('#searchbtn').click(function(){
		var togglewidth = $('#search').width() == 150 ? 0 : 150;
		var toggleopa = $('#search').css('opacity') == 0 ? 1 : 0;
		$('#search').animate({
			width: togglewidth,
			opacity: toggleopa
		});
	});

});