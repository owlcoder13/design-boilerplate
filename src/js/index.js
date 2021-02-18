import $ from 'jquery';
import Swiper, { Navigation } from 'swiper';

window.$ = window.jQuery = $;

$(() => {
    $('.nav__burger, .menu__close').on('click', function () {
        $('.menu').toggleClass('active');
    });
})

$(() => {
    Swiper.use([Navigation]);
    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // observer: true,
        // observeParents: true
    });
})