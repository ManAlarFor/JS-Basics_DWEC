'use strict';

function deleteData(name) {

    let caducidadCookie = 99 * 60 * 1000; 

    let theDate = new Date(); 
    let currentMiliseconds = theDate.getTime(); 
    let expirationMiliseconds = currentMiliseconds - caducidadCookie; 
    theDate.setTime(expirationMiliseconds); 

    document.cookie = name + "=;expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure"; 

    showData(); 
}