"use strict";

setTimeout(indexedDBCheck, 1000)

/**
 * Checks if the searched value is storaged and if not, 
 * sends the user to the index page
 */
function indexedDBCheck(){

    const transaction = db.transaction(['miAlmacen'], 'readonly') ;
    const almacen = transaction.objectStore('miAlmacen') ;
    const request = almacen.index('userIndex').get("manuel") ;

    request.onsuccess = function(event) {
        const result = event.target.result; 

        if (result) {
            console.log('Datos obtenidos:', result);
        } else {
            console.log('No se encontraron datos, redirigiendo al inicio...');
            window.location.replace("../index.html");
        }
    };

    request.onerror = function() {
        window.location.replace("../index.html") ;
    };

}