import '../styles/app.scss';
// import { tns } from 'tiny-slider/src/tiny-slider.js';

const menu_btn = document.querySelector('.hamburger-menu');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

});

var slider = tns({
    "container": "#my-slider",
    "items": 1,
    "slideBy": 1,
    "autoWidth": true,
    "mouseDrag": true,
    "nav": true,
    "navPosition": "bottom",
    "controls": true,
    "controlsPosition": "bottom",
    "swipeAngle": false,
    "controlsContainer": "#controls",
    // "prevButton": ".left",
    // "nextButton": ".right",
    "speed": 400,
    "preventScrollOnTouch": 'auto'
});
