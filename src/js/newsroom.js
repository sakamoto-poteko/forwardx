import 'scss/newsroom.scss';
import 'libs/statistics';

const nav = require('../../template/nav.html');
const footer = require('../../template/footer.html');
require("expose-loader?$!jquery");
const data = require('data/news/newslist');

const ERR_OK = 0;
$(function () {
    $('#nav').html(nav);
    $('#footer').html(footer);
    generateNewsItem(data);
});

function generateNewsItem(data) {
    const $newsGroup = $('.news-group');
    if (data.code === ERR_OK) {
        const newsList = data.data;

        newsList.sort(function (news1, news2) {
            let offset = new Date(news2.date).getTime() - new Date(news1.date).getTime();
            if (offset === 0) {
                offset = parseInt(news2.id) - parseInt(news1.id);
            }
            return offset;
        });

        newsList.map(news => {
            let imgSrc = require(`img/newsroom/${news.cover}`);
            const newsItem = `
                <li class="news-item">
                    <a href="./newsdetail.html?newsid=${news.id}">
                    <div class="content">
                        <time>${news.date}</time>
                        <h1 class="title">${news.title}</h1>
                    </div>
                    <div class="img-asset">
                        <img src="${imgSrc}">
                    </div>
                    </a>
                </li>
                `;
            $newsGroup.append(newsItem);
        });
    }
}