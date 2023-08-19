// ==UserScript==
// @name         ABAB
// @namespace    https://github.com/rattan/script/tree/main/ABAB
// @version      0.1
// @description  Adblock allow dialog block
// @author       rattan
// @include      http://*
// @include      https://*
// @icon         https://getadblock.com/images/favicon.ico
// @grant        none
// ==/UserScript==

console.log('Run')
let target = document.querySelector('body');

let observer = new MutationObserver((mutations) => {
    for (let body of document.getElementsByTagName('body')) body.style.overflow = ''
    for (let dialog of document.getElementsByClassName('fc-ab-root')) dialog.remove()
})
observer.observe(target, { childList: true });
