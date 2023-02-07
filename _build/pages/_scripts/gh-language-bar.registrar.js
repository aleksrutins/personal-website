
import { registerComponent } from './component.js';

registerComponent(`gh-language-bar`, `<script>
    const owner = this.getAttribute('owner');
    const repo = this.getAttribute('repo');
    if (owner == null || repo == null) return;
    const languages = await (await fetch(\`https://langley-production.up.railway.app/\${owner}/\${repo}\`)).json();
    const totalBytes = Object.values(languages).reduce((previous, current) => previous + current, 0);
    for (let language in languages) {
        let el = document.createElement('div');
        el.classList.add('language', \`language-\${language.replace(' ', '_')}\`);
        el.style.width = \`\${(languages[language] / totalBytes) * 100}%\`;
        el.title = \`\${language} (\${(languages[language] / totalBytes) * 100}%)\`;
        this.shadowRoot.appendChild(el);
    }
</script>

<style>
:host {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 6px;
    border-radius: 3px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.123);
    animation: language-load 2.5s ease 0s 1;
}
.language {
    height: 6px;
    animation: language-load 2.5s ease 0s 1;
}
@keyframes language-load {
    0% {
        transform: scaleX(0) translateX(-50%);
    }
    100% {
        transform: scaleX(1) translateX(0);
    }
}
.language-TypeScript {
    background-color: #3178C6;
}
.language-CSS {
    background-color: #563D7C;
}
.language-JavaScript {
    background-color: #F1E059;
}
.language-Java {
    background-color: #b07219;
}
.language-Kotlin {
    background-color: #A97BFF;
}
.language-Shell {
    background-color: #89e051;
}
.language-Makefile {
    background-color: #427819;
}
.language-Vala {
    background-color: #a56de2;
}
.language-C {
    background-color: #555555;
}
.language-Meson {
    background-color: #007800;
}
.language-HTML {
    background-color: #E34C26;
}
.language-Dockerfile {
    background-color: #384D54;
}
.language-Rust {
    background-color: #DEA584;
}
.language-PLpgSQL {
    background-color: #336790;
}
.language-C\+\+ {
    background-color: #f34b7d;
}
.language-Go {
    background-color: #00ADD8;
}
.language-Vue {
    background-color: #41b883;
}
</style>`, [async function() {
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
        this.shadowRoot.appendChild(el);
    }
}, async function() {
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
        this.shadowRoot.appendChild(el);
    }
}, async function() {
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
        this.shadowRoot.appendChild(el);
    }
}, async function() {
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
        this.shadowRoot.appendChild(el);
    }
}]);
        