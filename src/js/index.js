import 'scss/index.scss';
import 'libs/statistics';

const nav = require('../../template/nav.html');
const footer = require('../../template/footer.html');
require("expose-loader?$!jquery");

$(function () {

    $('#nav').html(nav);
    $('#footer').html(footer);

    const $window = $(window);
    const $moveImg = $('.move-img');
    const $epic = $('.epic-content');

    if ($window.width() > 768) {
        move();
    }
    $window.scroll(function () {
        if ($window.width() < 768) {
            return;
        }
        move();
    });

    $window.resize(function () {
        if ($window.width() < 768) {
            window.location.reload();
        }
    });

    function move() {
        const scrollTop = $window.scrollTop();
        const imgMoveDistance = scrollTop / 10;
        const epicMoveDistance = scrollTop / 7;
        setTimeout(function () {
            $moveImg.css('transform', `translate3d(0,${imgMoveDistance}px,0)`);
            $epic.css('transform', `translate3d(0,-${epicMoveDistance}px,0)`)
        }, 100);
    }
});