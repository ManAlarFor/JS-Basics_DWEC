'use strict';
let data = [];
let dbRequest, 
    starWarsDB,
    canalBD;
let dbName = "StarWarsDB" ;
let versionBD = 1 ;
let tablaBD = "starWarsCharacters";

dbRequest = indexedDB.open(dbName, versionBD); 


dbRequest.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`); 
};


dbRequest.onsuccess = function (event) { 

    console.info('Conexión satisfactoria'); 

    starWarsDB = event.target.result; 
};


dbRequest.onupgradeneeded = function (event) { 

    console.info('Base de datos creada'); 

    starWarsDB = event.target.result; 


    let registros = starWarsDB.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true }); 
                                registros.createIndex("name", "name", { unique: false }); 
                                registros.createIndex("homeworld", "homeworld", { unique: false }); 
                                registros.createIndex("species", "species", { unique: false }); 

};

function uploadData(){

    const name = document.getElementById("name").value;
    const homeworld = document.getElementById("homeworld").value;
    const species = document.getElementById("species").value;

    if(name && homeworld && species) {

        saveData(name, homeworld, species);

        document.getElementById("name").value = "";
        document.getElementById("homeworld").value = "";
        document.getElementById("species").value = "";

    } else {

        document.getElementById("error").innerHTML = "Fields cant be empty" ;

    }

}

