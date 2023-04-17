let prevScrollpos = window.pageYOffset;
let timeoutId = setTimeout(() => {
    document.querySelector('.header').style.transition = 'top 0.4s ease-in-out';
}, 300);

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.header').style.top = '0';
    } else {
        document.querySelector('.header').style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
});