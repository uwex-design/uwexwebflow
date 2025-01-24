// SWIPERS
var carrosselIcones = new Swiper(".carrossel-icons", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			direction: "horizontal",
		},
	},
});

const slideShoppingsCasesMobile = new Swiper(".swiper-mobile-sites", {
	loop: true,
	slidesPerView: 1,
	allowTouchMove: false,
});

const slideShoppingsCases = new Swiper(".swiper-desktop-sites", {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	thumbs: {
		swiper: slideShoppingsCasesMobile,
	},
});
