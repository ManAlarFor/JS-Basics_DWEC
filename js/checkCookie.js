"use strict"

let check = document.cookie ;

if(!check) {
    window.location.replace("../index.html")
}