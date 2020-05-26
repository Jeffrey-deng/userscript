// ==UserScript==
// @name            复制spotify歌曲名
// @name:zh         复制spotify歌曲名
// @name:en         print(copy) spotify song names
// @namespace       https://github.com/Jeffrey-deng/userscript
// @version         1.1
// @description     打印出网页中spotify的歌曲名，以复制
// @description:en  print song names of spotify's playlist.
// @author          Jeffrey.Deng
// @supportURL      https://imcoder.site/u/center/sendLetter?chatuid=1016726508048
// @homepageURL     https://imcoder.site
// @weibo           http://weibo.com/3983281402
// @match           http://open.spotify.com/*
// @match           https://open.spotify.com/*
// ==/UserScript==

// 1.1 2020.03.19 fixed bug，请在页面完全加载后执行 printList(); 不然会报  Cannot read property 'querySelectorAll' of null

(function() {
    'use strict';

    // Your code here...
    var printList = function () {
        var nodes = document.querySelector('#main .tracklist-container .tracklist').querySelectorAll("div > li > div.tracklist-col.name > div > div");
		if (!nodes) {
			console.warn("not find the songs nodes!!");
			return;
		}
		var playList = [];
		var song = function(_title, _singer) {
			this.title = _title;
			this['singer • album'] = _singer;
		};
		var len = nodes.length;
		for (var i = 0; i < len; i += 2) {
			var one = new song(nodes[i].innerText, nodes[i+1].innerText.replace(/\n/g, ' '));
			playList.push(one);
		}
		console.table(playList);
    }
    unsafeWindow.printList = printList;
    console.log("Now, you can type \"printList();\" in console, then will get the song names");
})();