import 'scss/about.scss';
import 'libs/statistics';

const nav = require('../../template/nav.html');
const footer = require('../../template/footer.html');
require("expose-loader?$!jquery");
// const $missionContent = $('.mission-content').eq(0);
// const $missionContentTop = $missionContent.offset().top;
// const $missionContentHeight = $missionContent.height();
// const $window = $(window);
// const $hillBg = $('.hill-bg').eq(0);
// const $hillBgTop = $hillBg.offset().top;
// const navHeight = 90;

$(function () {
    $('#nav').html(nav);
    $('#footer').html(footer);


    // 全屏背景图片随鼠标晃动效果
    let lFollowX = 0, lFollowY = 0, x = 0, y = 0, friction = 1 / 30;
    (function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        let translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.bg').css({
            '-webkit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    })();
    $('.bg').on('mousemove click', function (e) {
        let lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        let lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100;
        lFollowY = (10 * lMouseY) / 100;
    });


    // 窗口滚动

    /*const startScrollPosition = $missionContentTop - navHeight;
    const endScrollPosition = $hillBgTop - $missionContentHeight - navHeight;
    const scrollOffset = $missionContentTop - navHeight;
    $(window).scroll(function () {
        let windowScrollTop = $window.scrollTop();
        if (windowScrollTop > startScrollPosition && windowScrollTop < endScrollPosition) {
            let missionMoveDistance = windowScrollTop - scrollOffset;
            $missionContent.css('transform', `translate3d(0,${missionMoveDistance}px,0)`);
        }
    });*/
});