// ==UserScript==
// @name         新浪微博详情页简洁版
// @namespace    https://github.com/Jeffrey-deng/userscript
// @version      0.1
// @description  clean weibo detail page
// @author       Jeffrey.Deng
// @homepageURL  https://imcoder.site
// @weibo        http://weibo.com/3983281402
// @match        https://weibo.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('html')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    var href = document.location.href;
    if (href.match(/^https:\/\/weibo\.com\/(?!u\/)\d{8,}\/(?!profile\/)\w{8,}\?.*$/)) {
            var main_width = 920;
            var img_width = main_width - 100;
            addGlobalStyle(
                '.B_page .WB_frame {' +
                '    width: ' + main_width + 'px!important;' +
                '}' +
                '.B_page .WB_frame #plc_main {' +
                '    width: ' + (main_width + 20) + 'px;!important;' +
                '}' +
                '.WB_frame_c {' +
                '    width: ' + main_width + 'px!important;' +
                '}' +
                '.WB_feed_v3 .WB_media_view, .WB_feed_v3 .WB_media_view .media_show_box li {' +
                '    width: ' + img_width + 'px!important;' +
                '}' +
                '.WB_feed_v3 .artwork_box {' +
                '    width: ' + img_width + 'px!important;' +
                '}' +
                '.WB_media_view .media_show_box img {' +
                '    width: ' + img_width + 'px!important;' +
                '    height: auto!important;' +
                '}' +
                '.WB_feed_v3 .WB_media_a_m1 .WB_video, .WB_feed_v3 .WB_media_a_m1 .WB_video_a {' +
                '    width: ' + img_width + 'px;!important;' +
                '    height: 600px;!important;' +
                '}' +
                '.WB_frame_b {' +
                '    display: none!important;' +
                '}' +
                '.PCD_mplayer {' +
                '    display: none!important;' +
                '}' +
                '.WB_webim {' +
                '    display: none!important;' +
                '}' +
                '.B_page a.W_gotop {' +
                '    margin-left: 520px;!important;' +
                '}'
            );
    }
})();