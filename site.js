customElements.define('gh-language-bar', class extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        const owner = this.getAttribute('owner');
        const repo = this.getAttribute('repo');
        if (owner == null || repo == null) return;
        const languages = await (await fetch(`https://langley-production.up.railway.app/${owner}/${repo}`)).json();
        const totalBytes = Object.values(languages).reduce((previous, current) => previous + current, 0);
        for (let language in languages) {
            let el = document.createElement('div');
            el.classList.add('language', `language-${language.replace(' ', '_')}`);
            el.style.width = `${(languages[language] / totalBytes) * 100}%`;
            el.title = `${language} (${(languages[language] / totalBytes) * 100}%)`;
            this.appendChild(el);
        }
    }
});

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