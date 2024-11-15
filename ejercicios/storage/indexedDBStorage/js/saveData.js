'use strict';

/**
 * Saves the data and stores it in the indexedDB
 * @param {*} name 
 * @param {*} homeworld 
 * @param {*} species 
 */
function saveData(name, homeworld, species) {

    dbRequest = indexedDB.open(dbName, versionBD);

    dbRequest.onsuccess = function (event) {
        starWarsDB = event.target.result;
        canalBD = starWarsDB.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.put({ name, homeworld, species });
    };


}