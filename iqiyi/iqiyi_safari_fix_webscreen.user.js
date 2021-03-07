// ==UserScript==
// @name         修复Safari-iqiyi网页全屏失效
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Jeffrey.Deng
// @supportURL   https://imcoder.site/u/center/sendLetter?chatuid=1016726508048
// @homepageURL  https://imcoder.site
// @weibo        http://weibo.com/3983281402
// @match        https://www.iqiyi.com/v_*.html*
// @grant        GM_addStyle

// ==/UserScript==

(function() {
    'use strict';

    const addGlobalStyle = GM_addStyle || function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('html')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
        return style;
    };

    setTimeout(function () {
        addGlobalStyle(
            //'.iqp-player.iqp-web-screen {' +
            //'     display: unset;' +
            //'}' +
            '.iqp-player[data-player-hook="container"] {' +
            '     display: unset;' +
            '}'
        );
    }, 1700);
})();