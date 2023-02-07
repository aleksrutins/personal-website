document.querySelectorAll('.please-scroll').forEach((el, i) => el.addEventListener('click', ev => {
    window.scrollTo({
        top: window.innerHeight * (i + 1),
        behavior: 'smooth'
    });
}));

document.querySelectorAll('.back-to-top').forEach(el => el.addEventListener('click', ev => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}))

function isVisible(el) {
    return el.offsetTop + el.offsetHeight / 2 >= window.scrollY && el.offsetTop + el.offsetHeight / 2 <= window.scrollY + window.innerHeight;
}
function checkSlide() {
    for (let el of document.querySelectorAll('section')) {
        if (isVisible(el)) {
            el.classList.add('sliding');
        } else {
            el.classList.remove('sliding');
        }
    }
}

for(let link of document.querySelectorAll('[data-replace-email]')) {
    link.setAttribute('href', 'mailto:' + link.textContent);
}

window.addEventListener('scroll', checkSlide)
checkSlide();