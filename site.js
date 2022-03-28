import { request } from "https://cdn.skypack.dev/@octokit/request?dts";

customElements.define('gh-language-bar', class extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        const owner = this.getAttribute('owner');
        const repo = this.getAttribute('repo');
        if(owner == null || repo == null) return;
        const languages = (await request('GET /repos/{owner}/{repo}/languages', {
            owner, repo
        })).data;
        const totalBytes = Object.values(languages).reduce((previous, current) => previous + current, 0);
        for(let language in languages) {
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