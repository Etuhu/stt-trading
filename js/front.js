//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: false,
	autoplay: {
		delay: 5000,
	},
	spaceBetween: 0,
	watchOverflow: true,
	navigation: {
		nextEl: ".promo-swiper-button-next",
		prevEl: ".promo-swiper-button-prev",
	},
	pagination: {
		el: ".promo-swiper-pagination",
		clickable: "true",
	},
});

const partnersSwiper = new Swiper(".index-clients-swiper", {
	slidesPerView: 4,
	slidesPerGroup: 2,
	speed: 1000,
	simulateTouch: false,
	autoplay: {
		delay: 3000,
	},
	autoHeight: true,
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".index-clients-swiper-button-next",
		prevEl: ".index-clients-swiper-button-prev",
	},
	pagination: {
		el: ".index-clients-swiper-pagination",
		clickable: "true",
	},
	breakpoints: {
		1500: {
			slidesPerView: 4,
			slidesPerGroup: 2,
		},
		767: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
		450: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 10,
		},
		300: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
});

// let headerIndex = document.querySelector(".header--index");
let headerIndex = document.querySelector(".header");
let menuButton = document.querySelector(".menu-button");
let mainMenu = document.querySelector(".main-menu");

let openMenuHandler = function (evt) {
	if (!mainMenu.classList.contains("open")) {
		headerIndex.classList.toggle("minimal");
		mainMenu.classList.toggle("open");
		menuButton.classList.toggle("open");
		document.body.classList.toggle("fixed");
	} else if (mainMenu.classList.contains("open")) {
		headerIndex.classList.toggle("minimal");
		mainMenu.classList.toggle("open");
		menuButton.classList.toggle("open");
		document.body.classList.toggle("fixed");
	}
};

menuButton.addEventListener("click", function (evt) {
	openMenuHandler(evt);
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27 && mainMenu.classList.contains("open")) {
		openMenuHandler(evt);
	}
});

$(function(){
    $scrollButton = $('#top-button');
	$window = $(window);
	$topOffset = 300;
	$topOffsetMobile = 200;
	$window.scroll(function(){
        if ($(window).width() > 991) {
            if ($window.scrollTop() > $topOffset){
                $scrollButton.addClass('show');
            } else {
                $scrollButton.removeClass('show');
            }
        }
        if ($(window).width() < 992) {
            if ($window.scrollTop() > $topOffsetMobile){
                $scrollButton.addClass('show');
            } else {
                $scrollButton.removeClass('show');
            }
        }
	});
    $scrollButton.on('click', (function(e) {
        e.preventDefault(),
        $('html, body').animate({
            scrollTop: 0
        },
        {
            duration: 0,
            easing: "linear"
        });
    }));
});
