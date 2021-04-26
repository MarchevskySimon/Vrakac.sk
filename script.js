'use strict';

/*
 * NAV Animetion from TOP
 */

let nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 600) {
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
    var value = window.pageYOffset;

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

for (i = 0; i < x.length; i += 1) {
    x[i].addEventListener('click', function() {
        navUl.style.left = '-270px';
        navDark.style.opacity = '0';
        navDark.style.pointerEvents = 'none';

        bool = Boolean(true);
    });
}


/* ESC event  */

document.addEventListener('keyup', function(ele) {
    if (ele.keyCode === 27) {
        navUl.style.left = '-270px';
        navDark.style.opacity = '0';
        navDark.style.pointerEvents = 'none';

        bool = Boolean(true);
    }
});

/*
 * Zmena karty ZBERNEHO MIESTA
 */

let sl = document.getElementById('sl'),
    bj = document.getElementById('bj'),
    pr = document.getElementById('pr');

var cardSl = document.getElementById('stara_lubovna'),
    cardBj = document.getElementById('bardejov'),
    cardPr = document.getElementById('poprad');

var mapIframe = document.getElementById('map_iframe');
let srcSl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDj4LrSDx-3UpQBSXlq8wKmRqr5hj2BxB4&center=49.30759412395534,20.6809701040204&zoom=15&q=VRAKAC.sk',
    srcBj = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDj4LrSDx-3UpQBSXlq8wKmRqr5hj2BxB4&center=49.30021930028979,21.285474511815483&zoom=15&q=DRUHOTNÉ_SUROVINY_Lamancová_Irena',
    srcPr = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDj4LrSDx-3UpQBSXlq8wKmRqr5hj2BxB4&center=49.0502089571958,20.2974461255149&zoom=10&q=Poprad';

sl.addEventListener('click', function() {
    cardSl.style.display = 'block';
    mapIframe.src = srcSl;

    cardBj.style.display = 'none';
    cardPr.style.display = 'none';
});

bj.addEventListener('click', function() {
    cardBj.style.display = 'block';
    mapIframe.src = srcBj;

    cardSl.style.display = 'none';
    cardPr.style.display = 'none';
});

pr.addEventListener('click', function() {
    cardPr.style.display = 'block';
    mapIframe.src = srcPr;

    cardSl.style.display = 'none';
    cardBj.style.display = 'none';
});