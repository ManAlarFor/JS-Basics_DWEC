'use strict';

function saveData(nombre, surname) {

    let cookieExpiracy = 99 * 60 * 1000; 

    let theDate = new Date(); 
    let currentMiliseconds = theDate.getTime(); 
    let expirationMiliseconds = currentMiliseconds + cookieExpiracy; 
    theDate.setTime(expirationMiliseconds); 

    document.cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(surname) + ";expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";

}