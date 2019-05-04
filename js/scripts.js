jQuery(document).ready(function($){

	/*Мобильное меню*/
	function navigation_btn_click (nav_btn, nav_btn_open, nav_wrap, nav_wrap_mobile) {

		$(window).resize(function() {
			if(nav_btn.is(':visible')) {
				nav_wrap.addClass(nav_wrap_mobile);
			} else if(nav_btn.is(':hidden')) {
				nav_wrap.removeClass(nav_wrap_mobile);
			}
		});

		if(nav_btn.is(':visible')) {
			nav_wrap.addClass(nav_wrap_mobile);
		} else if(nav_btn.is(':hidden')) {
			nav_wrap.removeClass(nav_wrap_mobile);
		}

		$(document).mouseup(function (e){
			if (!$('.' + nav_wrap_mobile).is(e.target) && $('.' + nav_wrap_mobile).has(e.target).length === 0) {
				$('.' + nav_wrap_mobile).hide(700);
				nav_btn.removeClass(nav_btn_open);
			}
		});

		nav_btn.click(function(){
			if($('.' + nav_wrap_mobile).css('display') == 'none') {
				$('.' + nav_wrap_mobile).show(700);
				nav_btn.addClass(nav_btn_open);
			} else {
				$('.' + nav_wrap_mobile).hide(700);
				nav_btn.removeClass(nav_btn_open);
			}
		});
	};

	var nav_btn_var = $('.navigation__btn'),
		nav_btn_open_var = 'navigation__btn_open',
		nav_wrap_var = $('.navigation__list'),
		nav_wrap_mobile_var = 'navigation__list_mobile';

	navigation_btn_click (nav_btn_var, nav_btn_open_var, nav_wrap_var, nav_wrap_mobile_var);
/*Мобильное меню конец*/

	/*function btn_click (bttn, container){
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
	};*/

	//btn_click($('.banner__order-btn'), $('.banner__order-modal'));

	function modalOpen(btn_open, modal, btn_close) {
		btn_open.click(function() {
        	modal.slideToggle("fast");
        });
        btn_close.click(function(){
        	modal.slideToggle("fast");
        });
	};

	var banner_order_open = $(".banner__order-btn"),
		design_order_modal = $('#order-design'),
		banner_close = $('#order-design-close'),
		back_call_order_open = $(".back-call__btn"),
		back_call_order_modal = $('#order-call'),
		back_call_close = $('#order-call-close');


	modalOpen(banner_order_open, design_order_modal, banner_close);
	modalOpen(back_call_order_open, back_call_order_modal, back_call_close);

	$('.slick-prev').offset({left:($('.container').offset().left + 15)});
	$('.banner__count').offset({left:($('.container').offset().left + $('.slick-prev').width() + 30)});
	$('.slick-next').offset({left:($('.container').offset().left + $('.banner__count').innerWidth() + $('.slick-prev').width() + 45)});
	$(window).resize(function() {
		$('.slick-prev').offset({left:($('.container').offset().left + 15)});
		$('.banner__count').offset({left:($('.container').offset().left + $('.slick-prev').width() + 30)});
		$('.slick-next').offset({left:($('.container').offset().left + $('.banner__count').innerWidth() + $('.slick-prev').width() + 45)});
	});

});