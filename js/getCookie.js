"use strict"

/**
 * Returns the value of a cookie by its name
 * @param {*} name 
 * @returns string 
 */
function getCookie(name) {

    let start ;
    let end ;

    if (document.cookie.length > 0) {

        start = document.cookie.indexOf(name + "=");

        if (start != -1) {

            start = start + name.length + 1;
            end = document.cookie.indexOf(";", start);

            if (end == -1) {
                end = document.cookie.length;
            }

            return decodeURI(document.cookie.substring(start, end));

        }
    }

    return "";

}