"use strict"

/**
 * Deletes a element of the Storage by it's name
 * @param {*} name 
 */
function eraseSessionStorage(name) {

    sessionStorage.removeItem(name);

    window.location.replace("../index.html")

}