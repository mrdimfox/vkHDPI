// ==UserScript==
// @name         HDPI vk.com
// @version      0.1
// @description  Turn on HiDPI images for vk.com (19.08.2015)
// @author       mrlisdim@ya.ru
// @match        *.vk.com/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    var bodyElem = document.querySelector("body");
    bodyElem.classList.add("is_2x");
 
    var linkElems = document.querySelectorAll("link[type='text/css']");
    for (var link of linkElems) {
        var oldHref = link.href;
        if (oldHref.search("/2x/") == -1) {
            var oldHrefParts = oldHref.split('css');
            link.href = oldHrefParts[0] + 'css/2x' + oldHrefParts[1] + 'css';
        }
    }
})();