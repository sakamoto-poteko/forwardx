import 'scss/english.scss';

require("expose-loader?$!jquery");

const $htmlBody = $('html,body');
const $input = $('input');
const $inputWrapper = $input.parent('.input-wrapper');
const $submitButton = $('.submit-button');
const $navJoin = $('.nav-join');
const $firstJoin = $('#join1');
$(function () {
    // join waitlist
    $navJoin.click(function () {
        scrollToElement($firstJoin);
    });
    $('#link1').click(function () {
        scrollToElement($('.feature-item-1'));
    });
    $('#link2').click(function () {
        scrollToElement($('.feature-item-2'));
    });
    $('#link3').click(function () {
        scrollToElement($('.feature-item-3'));
    });
    //

    // input框激活状态切换
    $input.focus(function () {
        $inputWrapper.addClass('active');
    }).blur(function () {
        $inputWrapper.removeClass('active');
    });

    // form表单提交
    $submitButton.click(function () {
        let $inputWrapper = $(this).siblings('.input-wrapper');
        let $input = $inputWrapper.find('input');
        let $form = $(this).parents('form');
        let email = $input.val();

        if (validate(email)) {
            $form.submit();
        } else {
            $inputWrapper.addClass('error');
            $input.on('input', function () {
                let email = $input.val();
                if (validate(email)) {
                    $inputWrapper.addClass('active').removeClass('error');
                } else {
                    $inputWrapper.removeClass('active').addClass('error');
                }
            });
        }
    });
});

function validate(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function scrollToElement($el) {
    $htmlBody.animate({
        scrollTop: ($el.offset().top - 59) + 'px'
    }, 300)
}
