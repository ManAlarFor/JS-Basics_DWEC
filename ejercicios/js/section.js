"use strict"

/**
 * Changes the section shown on the main page
 * @param {*} type 
 */
function change(type) {

    let div = document.getElementsByClassName("content");

    for (let i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }

    document.getElementById(type).style.display = "block";

}