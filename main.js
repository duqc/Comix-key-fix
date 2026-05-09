// ==UserScript==
// @name         Comik arrow key temp fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  goes next or previous on comik using arrowkeys. Built on the generic key listener by Petalousa.
// @author       Petalousa, Ducc
// @match        https://comix.to/title/*
// @include        *
// @grant        none
// ==/UserScript==

let onKeyDown = (e) => {

    let keyCode = e.which === 0 ? e.charCode : e.keyCode;
    switch(keyCode){
        case 39: //Right Arrow
            goNext();
            break;
        case 37: // Left Arrow
            goLast();
            break;
        default:
            //do nothing
    }
}

function goLast(){
    let a = document.getElementsByClassName("rpage-chapnav__btn")[0];
    a.click();
}

function goNext(){
    let a = document.getElementsByClassName("rpage-chapnav__btn rpage-chapnav__btn--next")[0];
    a.click();
}

(function() {
    'use strict';
    document.addEventListener("keydown", onKeyDown);
    console.log("script loaded");
})();
