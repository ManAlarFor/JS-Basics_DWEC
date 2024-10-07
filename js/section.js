"use strict"

/**
 * Changes the section shown on the main page
 * @param {*} type 
 */
function change(type) {

    document.getElementById("mainContent").style.display = "none";
    document.getElementById(type).style.display = "block";

    console.log(getCookie("manuel")) ;

}