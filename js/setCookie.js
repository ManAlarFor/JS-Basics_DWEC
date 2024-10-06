"use strict"

function setCookie(name, value, minutes) {

    name.trim() ;
    value.trim() ;

    let now = new Date() ;

    value = encodeURIComponent(value) ;

    now.setTime(now.getTime() + (minutes * 30 * 1000));

    let expires = now.toUTCString() ;

    document.cookie = `${name}=${value};expires=${expires}; path=/`;

}