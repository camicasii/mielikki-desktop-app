"use strict";
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    //@ts-ignore
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element)
            element.innerText = text;
    };
    for (const type of ['chrome', 'node', 'electron']) {
        //@ts-ignore
        replaceText(`${type}-version`, process.versions[type]);
    }
});
//@ts-expect-error
window.ipcRenderer = require('electron').ipcRenderer;
if (localStorage.getItem('ips') == undefined || localStorage.getItem('ips') == null)
    localStorage.setItem('ips', "");
if (localStorage.getItem('myip') == undefined || localStorage.getItem('myip') == null)
    localStorage.setItem('myip', "");
