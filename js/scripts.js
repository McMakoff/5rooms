jQuery(document).ready(function($){

	$('.navigation__btn').click(function(){
		if($('.navigation__wrap').css('display') == 'none') {
			$('.navigation__wrap').show(700);
			$('.navigation__btn').addClass('navigation__btn_open');
		} else {
			$('.navigation__wrap').hide(700);
			$('.navigation__btn').removeClass('navigation__btn_open');
		}
	});

	$(document).mouseup(function (e){
		if (!$('.navigation__wrap').is(e.target) && $('.navigation__wrap').has(e.target).length === 0) {
			$('.navigation__wrap').hide(700);
			$('.navigation__btn').removeClass('navigation__btn_open');
		}
	});

	$('input').focus(function(){
		$(this).parent().find('label').css('display','none');
	});
	$('input').blur(function(){
		if($(this).val() == "") {
			$(this).parent().find('label').css('display','block');
		}
	});

	function btn_click (bttn, container){
		bttn.click(function(){
			if(container.css('display') == 'none'){
				container.slideDown(300);
			} else {
				container.slideUp(300);
			}
		});

		$(document).mouseup(function (e){
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				container.slideUp(300);
			}
		});
	};

	btn_click($('.call-btn'), $('.call-btn__modal'));
	btn_click($('.filter__btn'), $('.filter__list'));

});