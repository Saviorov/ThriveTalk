// fixed navbar
const navbar = document.querySelector('.navbar');
const topLink = document.querySelector('.scrollTop');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = 100;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
        navbar.classList.add('fixed-color');
    } else {
        navbar.classList.remove('fixed-nav');
    };
});


function scrollToTop() {
    window.scrollTo(0, 0);
}