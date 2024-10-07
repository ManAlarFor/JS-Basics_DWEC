"use strict"

/**
 * Creates a cookie with a given name, value and minutes
 * @param {*} name 
 * @param {*} value 
 * @param {*} minutes 
 */
function setCookie(name, value, minutes) {

    name.trim() ;
    value = encodeURIComponent(value.trim()) ;

    let now = new Date() ;

    now.setTime(now.getTime() + (minutes * 30 * 1000));

    let expires = now.toUTCString() ;

    document.cookie = `${name}=${value};expires=${expires}; path=/`;

}