"use strict"

function eraseSessionStorage(name) {

    sessionStorage.removeItem(name);
    console.log(`sessionStorage: Eliminada la clave ${name}`);

    window.location.replace("../index.html")

}