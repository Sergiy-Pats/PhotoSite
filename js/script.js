jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .header__menu, body').toggleClass('active');
	})
	wdth_q = window.innerWidth
	console.log(wdth_q);

	import('../js/menu-click.js');

	function slider() {
		$('.slider').slick({
			infinite: true,
			slidesToShow: 2,
			slidesPerRow: 1,
			rows: 2,
			arrows: true,
			responsive: [
				{
					breakpoint: 540,
					settings: {
						arrows: false,
					}
				}
			]
		})
	}
	function slider_2() {
		$('.slider-2').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 2,
			infinite: true,
			arrows: false,
			dots: true,
			//centerMode: true,
			//variableWidth: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 642,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]


		})
	}
	slider();
	slider_2();
	/*
	if (wdth_q > 540) {
		//$('.slider').slick('unslick')
		bigger();
		lock = 0
	} else {
		lowest()
		lock = 1
	}
	*/
	/*$(window).on('resize', function () {
		wdth = window.innerWidth
		if (wdth > 540 && lock == 1) {
			$('.slider').slick('unslick');
			bigger();
			lock = 0
			console.log(lock);
		}
		if (wdth <= 540 && lock == 0) {
			$('.slider').slick('unslick');
			lowest()
			lock = 1
			console.log(lock);

		}
	})
	*/

	$('.gallery__item img').on('click', function (e) {
		$('.gallery__item img').removeClass('active')
		console.log('act');

		$(this).addClass('active')
		src = $(this).attr('src');
		//console.log(src);
		$('.show-img img').attr('src', src)

	})
	$(".gallery__filter li").on('click', function (e) {
		$(".gallery__filter li").removeClass('active')
		$(this).addClass('active')
	})



})

