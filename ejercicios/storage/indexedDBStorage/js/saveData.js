'use strict';

function saveData(name, homeworld, species) {


    console.log("Grabando datos...");

    dbRequest = indexedDB.open(dbName, versionBD);

    dbRequest.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    dbRequest.onsuccess = function (event) {
        starWarsDB = event.target.result;
        canalBD = starWarsDB.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.put({ name, homeworld, species });
    };


    showData();
}