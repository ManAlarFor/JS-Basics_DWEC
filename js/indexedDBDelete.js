"use strict"

function indexedDBDelete() {

    const transaction = db.transaction(['miAlmacen'], 'readwrite');
    const almacen = transaction.objectStore('miAlmacen');

    const request = almacen.index('userIndex').get("manuel") ;

    request.onsuccess = function(event) {
        const result = event.target.result;
        if (result) {
            const deleteRequest = almacen.delete(result.user);
            deleteRequest.onsuccess = function() {
                console.log('Usuario eliminado exitosamente');
                window.location.replace("../index.html");
            };
            deleteRequest.onerror = function() {
                console.error('Error al eliminar el usuario');
            };
        } else {
            console.log('No se encontró el usuario para eliminar');
        }
    };

    request.onerror = function() {
        console.error('Error al buscar el usuario para eliminar');
    };

}