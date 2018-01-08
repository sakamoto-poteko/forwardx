import 'scss/professional.scss';

const nav = require('../../template/nav.html');
const footer = require('../../template/footer.html');
require("expose-loader?$!jquery");
require("expose-loader?AOS!aos");

$(function () {

    $('#nav').html(nav);
    $('#footer').html(footer);


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