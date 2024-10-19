"use strict"

function setSessionStorage(name, value) {

    name.trim() ;

    sessionStorage.setItem(name, encodeURIComponent(value || ""));
    console.log(`sessionStorage: ${name}=${encodeURIComponent(value || "")}`);

}