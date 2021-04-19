'use strict';


/*
 * NAV Animetion from TOP
 */

let nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 600) {
        nav.style.backgroundColor = 'rgb(35, 35, 35)';
        nav.style.boxShadow = '2px 2px 2px 5px rgba(15, 15, 15, .5)';
    } else {
        nav.style.background = 'none';
        nav.style.boxShadow = 'none';
    }
});


/*
 * Parallax
 */

let parallax = document.getElementById('text'),
    header = document.getElementById('header');

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    // console.log('ahoj');
    parallax.style.top = (value * 0.3) + "px";

    header.style.top = (value * 0.5) + "px";
});


/*
 * LOADING SCREEN
 */

let loadingScreen = document.querySelector('.loading_screen');

window.addEventListener('load', function() {
    loadingScreen.parentElement.removeChild(loadingScreen);
});


/*
 * HAMBURGER menu slide
 */

let hamburger = document.getElementById('Hamburger'),
    navUl = document.querySelector('.nav_resp_ul'),
    navDark = document.querySelector('.nav_dark');

let bool = Boolean(true);

hamburger.addEventListener('click', function() {
    if (bool === true) {
        navUl.style.left = "0px";
        navDark.style.opacity = '1';
        navDark.style.pointerEvents = 'auto';

        bool = Boolean(false);
    } else {
        navUl.style.left = "-270px";
        navDark.style.opacity = '0';
        navDark.style.pointerEvents = 'none';

        bool = Boolean(true);
    }
});

/* Vsunie sa po kliknuti na link */

var x = navUl.querySelectorAll('a'),
    i;

for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', event => {
        navUl.style.left = '-270px';
        navDark.style.opacity = '0';
        navDark.style.pointerEvents = 'none';

        bool = Boolean(true);
    });
}


/* ESC event  */

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
        navUl.style.left = '-270px';
        navDark.style.opacity = '0';
        navDark.style.pointerEvents = 'none';

        bool = Boolean(true);
    }
});