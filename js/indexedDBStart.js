"use strict"

/**
 * Inicialates the indexedDB
 */

let db;
const request = indexedDB.open('MiBaseDeDatos', 1);

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    const almacen = db.createObjectStore('miAlmacen', { keyPath: 'user' });
    almacen.createIndex('userIndex', 'user', { unique: true }); 
};