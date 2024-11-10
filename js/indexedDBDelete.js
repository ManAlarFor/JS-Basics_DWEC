"use strict"

/**
 * Deleted an element in the indexedDB
 */
function indexedDBDelete() {

    const transaction = db.transaction(['miAlmacen'], 'readwrite');
    const almacen = transaction.objectStore('miAlmacen');

    const request = almacen.index('userIndex').get("manuel") ;

    request.onsuccess = function(event) {
        const result = event.target.result;

        // Error Handler
        if (result) {
            const deleteRequest = almacen.delete(result.user);
            deleteRequest.onsuccess = function() {
                window.location.replace("../index.html");
            };
        } 
    };

}