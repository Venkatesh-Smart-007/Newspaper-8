// Back To Top
$(function(){
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 400) {
			$('.td-scroll-up').addClass('td-scroll-up-visible');
		} else {
			$('.td-scroll-up').removeClass('td-scroll-up-visible');
		}
	});
	$('.td-scroll-up').on('click', scrollToTop);
});
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
