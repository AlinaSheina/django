function openBlock() {
	var openBlock=$('.show-more').closest('.show-more-block');
	openBlock.find('.show-less').hide();
	$('.show-more').click(function(e){
		var thisOpenLink=$(this).closest('.show-more-block');
		thisOpenLink.find('.show-more-text').addClass('auto-height');
		$(this).hide();thisOpenLink.find('.show-less').show();
		e.preventDefault();});
	$('.show-less').click(function(e){
		var thisOpenLink=$(this).closest('.show-more-block');
		thisOpenLink.find('.show-more-text').removeClass('auto-height');
		$(this).hide();thisOpenLink.find('.show-more').show();
		e.preventDefault();
	});
}

openBlock();