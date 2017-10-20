(function($){
	$(document).ready(function(){
		var headings = $('.accourdion__heading');
		var texts = $('.accordion__text');
		texts.hide();
		$(headings).on('click', function(){
			headings.removeClass('accordion__active');
			headings.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
			texts.stop().slideUp(300);
			var that = $(this);
			var text = that.next('.accordion__text');
			var isVisible = text.is(':visible');
			that.toggleClass('accordion__active', !isVisible); //isVisible zwraca true or false
			if(!isVisible){
				text.stop().slideDown(300);
				that.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
			}else{
				text.stop().slideUp(300);
				that.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
			}
			
		});
	});
})(jQuery);