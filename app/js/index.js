$(".navlist ul li").hover(
    function () {
            $('.subNav', this).stop().slideDown(200);
    },
    function () {
            $('.subNav', this).stop().slideUp(200);
    }
);
var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    loop: true,
    effect: 'fade',
    fadeEffect: {
            crossFade: true,
    },
    pagination: {
            el: '.swiper-pagination',
    },
    navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
    },
})