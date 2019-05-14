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


/*Модальные окна*/
	function modalOpen(btn_open, modal, btn_close) {
		btn_open.click(function() {
        	modal.slideToggle("fast");
        });
        btn_close.click(function(){
        	modal.slideToggle("fast");
        });
	};

	var banner_order_open = $(".order-btn"),
		design_order_modal = $('#order-design'),
		banner_close = $('#order-design-close'),
		back_call_order_open = $(".back-call__btn"),
		back_call_order_modal = $('#order-call'),
		back_call_close = $('#order-call-close'),
		designFixBtn = $('.design-fix__btn'),
		designFixModal = $('#design-fix-order'),
		designFixClose = $('#order-design-fix-close');


	modalOpen(banner_order_open, design_order_modal, banner_close);
	modalOpen(back_call_order_open, back_call_order_modal, back_call_close);
	modalOpen(designFixBtn, designFixModal, designFixClose);
/*Модальные окна конец*/

/*координаты стрелок навигации слайдера баннера*/
	var sp = $('.banner__slider .slick-prev'),
		container = $('.container'),
		sn = $('.banner__slider .slick-next'),
		bc = $('.banner__count');

	sp.offset({left:(container.offset().left + 15)});
	bc.offset({left:(container.offset().left + sp.width() + 30)});
	sn.offset({left:(container.offset().left + bc.innerWidth() + sp.width() + 45)});
	$(window).resize(function() {
		sp.offset({left:(container.offset().left + 15)});
		bc.offset({left:(container.offset().left + sp.width() + 30)});
		sn.offset({left:(container.offset().left + bc.innerWidth() + sp.width() + 45)});
	});
/*координаты стрелок навигации слайдера баннера конец*/

/*координаты стрелок навигации аргументы*/
	var spf = $('.arguments__slider .slick-prev'),
		content = $('.arguments__content'),
		snf = $('.arguments__slider .slick-next');

	/*spf.offset({left:content.offset().left + content.innerWidth() - spf.width() * 3 - 15,
				top:content.offset().top + 15});
	snf.offset({left:content.offset().left + content.innerWidth() - spf.width() - 15,
				top:content.offset().top + 15});
	$(window).resize(function() {
		spf.offset({left:content.offset().left + content.innerWidth() - spf.width() * 3 - 15,
					top:content.offset().top + 15});
		snf.offset({left:content.offset().left + content.innerWidth() - spf.width() - 15,
					top:content.offset().top + 15});
	});*/

	/*spf.offset({top:content.offset().top + 15});
	snf.offset({top:content.offset().top + 15});
	$(window).resize(function() {
		spf.offset({top:content.offset().top + 15});
		snf.offset({top:content.offset().top + 15});
	});*/

/*координаты стрелок навигации слайдера аргументы конец*/

/*координаты стрелок навигации аргументы*/
	/*var dfp = $('.design-fix__slider .slick-prev'),
		dfContent = $('.design-fix__content'),
		dfn = $('.design-fix__slider .slick-next');

	dfp.offset({left:dfContent.offset().left + dfContent.innerWidth() - dfp.width() * 3 - 15,
				top:dfContent.offset().top + dfContent.innerHeight() - dfp.width() - 15});
	dfn.offset({left:dfContent.offset().left + dfContent.innerWidth() - dfp.width() - 15,
				top:dfContent.offset().top + dfContent.innerHeight() - dfp.width() - 15});
	$(window).resize(function() {
		dfp.offset({left:dfContent.offset().left + dfContent.innerWidth() - dfp.width() * 3 - 15,
					top:dfContent.offset().top + dfContent.innerHeight() - dfp.width() - 15});
		dfn.offset({left:dfContent.offset().left + dfContent.innerWidth() - dfp.width() - 15,
					top:dfContent.offset().top + dfContent.innerHeight() - dfp.width() - 15});
	});*/
/*координаты стрелок навигации слайдера аргументы конец*/

/*Индекс элементов списка*/

function itemCount (a, b) {
	a.each(function(v_i, elem){
		$(elem).find(b).text(v_i + 1);
	});
}

var designEnterItem = $(".design-enter__item"),
	designCount = '.design-count',
	designDaysItem = $('.design-days__item');

itemCount (designEnterItem, designCount);
itemCount (designDaysItem, designCount);

/*Индекс элементов списка конец*/

/*Загрузить еще*/
var workBtn = $('#work-btn'),
	btnText = 'Загрузить еще стилей',
	btnRoomText = 'Загрузить еще',
	workExamplesItem2 = $('.work-examples__item:gt(2)'),
	workExamplesCount = $('.work-examples__list .work-examples__count'),
	workExamplesItem6 = $('.work-examples__item:gt(5)'),
	workBtnRoom = $('#work-room-btn'),
	workExamplesRoomItem = $('.work-exampless__room-item:gt(3)'),
	reviewBtn = $('#review-btn'),
	reviewLighthouse  = $('.review__lighthouse '),
	reviewItem2 = $('.review__item:gt(1)'),
	reviewItem3 = $('.review__item:gt(2)');

function loadIem (btn, item, text) {
	if (item.is(":hidden")) {
		btn.text('Свернуть');
		item.slideDown();
	} else {
		item.slideUp();
		btn.text(text);
	}
}

workBtn.click(function() {
	if (workExamplesCount.is(':hidden')) {
		loadIem(workBtn, workExamplesItem2, btnText);
	} else {
		loadIem(workBtn, workExamplesItem6, btnText);
	}
});

workBtnRoom.click(function() {
	loadIem(workBtnRoom, workExamplesRoomItem, btnRoomText);
});

reviewBtn.click(function() {
	if (reviewLighthouse.is(':hidden')) {
		loadIem(reviewBtn, reviewItem2, btnRoomText);
	} else {
		loadIem(reviewBtn, reviewItem3, btnRoomText);
	}
});
/*Загрузить еще конец*/

});