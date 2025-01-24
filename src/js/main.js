// SWIPERS
var carrosselIcones = new Swiper(".carrossel-icons", {
	direction: "vertical",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
});

var slideShoppingsCases = new Swiper(".swiper-desktop-sites", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});

var slideShoppingsCasesMobile = new Swiper(".swiper-mobile-sites", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});
