const news = getNews();
import 'scss/newsdetail.scss';
import 'libs/statistics';

const nav = require('../../template/nav.html');
const footer = require('../../template/footer.html');
require("expose-loader?$!jquery");

$(function () {
    $('#nav').html(nav);
    $('#footer').html(footer);

    const $title = $('.title p');
    const $time = $('.title time');
    const $originalLink = $('.title a');
    const $content = $('.news-article');

    $title.text(news.base.title);
    $time.text(news.base.date);
    $originalLink.attr('href', news.base.original);
    $content.html(news.content);

    $content.find('img').each(function () {
        const $this = $(this);
        const figureCaption = $this.attr('alt') || '';
        $this.after(`<div class="figure-caption">${figureCaption}</div>`);
    });
});

function getNews() {
    const newsId = getQueryString('newsid');
    const newsList = require('data/news/newslist').data;
    let newsIdList = [];
    newsList.map(news => {
        newsIdList.push(news.id);
    });

    if (!newsIdList.includes(newsId)) {
        alert('参数错误');
        window.location.href = '/newsroom.html'
    }

    let news = {};
    news.base = require(`data/news/${newsId}/info`).data;
    news.content = require(`data/news/${newsId}/content`);
    return news;
}

function getQueryString(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

