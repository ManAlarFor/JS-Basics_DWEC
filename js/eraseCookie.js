"use strict"

/**
 * Deletes a cookie by its name
 * @param {*} name 
 */
function eraseCookie(name) {

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    window.location.replace("../index.html") ;

}