"use strict"

/**
 * Adds an element to the Session Storage
 * @param {*} name 
 * @param {*} value 
 */
function setSessionStorage(name, value) {

    name.trim() ;

    sessionStorage.setItem(name, encodeURIComponent(value || ""));

}