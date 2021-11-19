import '../styles/app.scss';

const menu_btn = document.querySelector('.hamburger-menu');
const mobile_menu = document.querySelector('.mobile-nav');

// const meun_btn2 = document.querySelector('.menue');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

    // meun_btn2.classList.remove('.menue');
    // console.log("test")
});

var slider = tns({
    "container": "#my-slider",
    "items": 1,
    "controls": false,
    "mouseDrag": true,
    "slideBy": 1,
    "navPosition": "bottom",
    "swipeAngle": false,
    "speed": 400,
    "preventScrollOnTouch": 'auto'
});
