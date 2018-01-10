import 'scss/consume.scss';
import 'libs/statistics';

const nav = require('../../template/nav.html');
const footer = require('../../template/footer.html');
require("expose-loader?$!jquery");
require("expose-loader?AOS!aos");

$(function () {

    $('#nav').html(nav);
    $('#footer').html(footer);

    const $indicatorItem = $('.indicator-item');
    const $carouselItem = $('.carousel-item');

    $indicatorItem.click(function () {
        let index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        let $currentItem = $carouselItem.eq(index);
        $currentItem.siblings().animate({
            opacity: 0
        }, 1000);
        $currentItem.animate({
            opacity: 1
        }, 1000)
    });

    // aos滚动动画
    AOS.init({
        duration: 1000,
        easing: 'ease',
        delay: 100,
        disable: 'mobile',
        offset: 100,
        once: true
    });
});