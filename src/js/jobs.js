import 'scss/jobs.scss';

const nav = require('../../template/nav.html');
const footer = require('../../template/footer.html');
require("expose-loader?$!jquery");


$(function () {
    $('#nav').html(nav);
    $('#footer').html(footer);
    $('.career-item .name').click(function () {
        $(this).siblings('.requirement').slideToggle('slow');
    });
});