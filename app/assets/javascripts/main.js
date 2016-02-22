(function ($) {
 "use strict";
	
$(document).ready(function(){
	

/*---------------------
 TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});	






/*---------------------
 testimonial-list
--------------------- */
	$('.testimonial-list').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',		
		autoplay:true,
		smartSpeed:1000,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
	
	
	
}); 




})(jQuery);