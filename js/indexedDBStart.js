"use strict"

let db;
const request = indexedDB.open('MiBaseDeDatos', 1);

request.onsuccess = function(event) {
    db = event.target.result;
    console.log('Base de datos abierta exitosamente');
};

request.onerror = function(event) {
    console.error('Error al abrir la base de datos', event);
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    const almacen = db.createObjectStore('miAlmacen', { keyPath: 'user' });
    almacen.createIndex('userIndex', 'user', { unique: true }); 
    console.log('Almacén "miAlmacen" creado con índice para usuario');
};