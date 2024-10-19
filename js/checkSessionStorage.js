"use strict";

/**
 * Checks if the searched value is storaged and if not, 
 * sends the user to the index page
 */

const value = sessionStorage.getItem("manuel");

if(!value){
    window.location.replace("../index.html") ;
}
