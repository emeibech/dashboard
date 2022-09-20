const stars = document.querySelectorAll('.star');
const shares = document.querySelectorAll('.share');
const visibilities = document.querySelectorAll('.visibility');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const list = document.querySelector('ul');
const input = document.querySelector('#search-input');
const searchForm = document.querySelector('#search');
const searchIcon = document.querySelector('.search-icon-wrapper');
const search = document.querySelector('.search');
const searchSVG = document.querySelector('.search-icon');

//change color of star icon when interacted with
stars.forEach(star => {
    star.addEventListener('touchstart', starChangeColor);
    star.addEventListener('touchend', starDefaultColor);
    star.addEventListener('mousedown', starChangeColor);
    star.addEventListener('mouseup', starDefaultColor);
});

function starDefaultColor(e) {
    e.target.src="./svg/star.svg";
}

function starChangeColor(e) {
    e.target.src="./svg/star-hover.svg";
}

//change color of visibility icon when interacted with
visibilities.forEach(visibility => {
    visibility.addEventListener('touchstart', visibilityChangeColor);
    visibility.addEventListener('touchend', visibilityDefaultColor);
    visibility.addEventListener('mousedown', visibilityChangeColor);
    visibility.addEventListener('mouseup', visibilityDefaultColor);
});

function visibilityDefaultColor(e) {
    e.target.src="./svg/visibility.svg";
}

function visibilityChangeColor(e) {
    e.target.src="./svg/visibility-hover.svg";
}

//change color of share icon when interacted with
shares.forEach(share => {
    share.addEventListener('touchstart', shareChangeColor);
    share.addEventListener('touchend', shareDefaultColor);
    share.addEventListener('mousedown', shareChangeColor);
    share.addEventListener('mouseup', shareDefaultColor);
});

function shareDefaultColor(e) {
    e.target.src="./svg/share.svg";
}

function shareChangeColor(e) {
    e.target.src="./svg/share-hover.svg";
}

//open and close hamburger menu
hamburger.addEventListener('click', openMenu);

function openMenu() {
    nav.classList.toggle('nav-show');
    body.addEventListener('mouseup', closeMenu);
}

function closeMenu(e) {
    if(e.target != nav && e.target != list && e.target != input && e.target != searchForm && e.target != searchIcon && e.target != search && e.target != searchSVG) {
        nav.classList.toggle('nav-show')
        body.removeEventListener('mouseup', closeMenu);
    }
}

//highlight search bar when typing
input.addEventListener('focus', highlight);
input.addEventListener('blur', removeHighlight);

function highlight() {
    searchSVG.classList.toggle('search-icon-highlighted');
    searchForm.classList.toggle('form-highlighted');
}

function removeHighlight() {
    searchSVG.classList.toggle('search-icon-highlighted');
    searchForm.classList.toggle('form-highlighted');
}