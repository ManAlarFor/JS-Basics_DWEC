'use strict';

/**
 * Deletes the specified element in the table
 * @param {*} id 
 */
function deleteData(id) {

    dbRequest = indexedDB.open(dbName, versionBD);

    dbRequest.onsuccess = function (event) {
        starWarsDB = event.target.result;
        canalBD = starWarsDB.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.delete(id);
    };

    showData();
}