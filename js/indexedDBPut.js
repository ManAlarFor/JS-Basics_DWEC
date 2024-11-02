"use strict"

/**
 * Adds an element to the Session Storage
 * @param {*} name 
 * @param {*} value 
 */
function indexedDBPut(name, value) {

    name = name.trim() ;
    value = value.trim() ;

    const transaction = db.transaction(['miAlmacen'], 'readwrite');
    const almacen = transaction.objectStore('miAlmacen');
    const request = almacen.add({ user: name, passwd: value });


    request.onsuccess = function() {
        console.log('Datos agregados exitosamente');
    };
    
    request.onerror = function() {
        console.error('Error al agregar datos');
    };

}