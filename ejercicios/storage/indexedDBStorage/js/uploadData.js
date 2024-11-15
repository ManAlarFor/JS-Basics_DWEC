'use strict';
let data = [];
let dbRequest, 
    starWarsDB,
    canalBD;
let dbName = "StarWarsDB" ;
let versionBD = 1 ;
let tablaBD = "starWarsCharacters";

dbRequest = indexedDB.open(dbName, versionBD); 

dbRequest.onsuccess = function (event) { 

    starWarsDB = event.target.result; 
};


dbRequest.onupgradeneeded = function (event) { 

    starWarsDB = event.target.result; 


    let registros = starWarsDB.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true }); 
                                registros.createIndex("name", "name", { unique: false }); 
                                registros.createIndex("homeworld", "homeworld", { unique: false }); 
                                registros.createIndex("species", "species", { unique: false }); 

};

function uploadData(){

    document.getElementById("error").innerText = "" ;

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

    showData() ;

}

/**
 * Recieves the data in the api and shows it
 * @param {number} amount
 */
async function randomCharacter(amount) {

    document.getElementById("error").innerText = "" ;

    for (let i = 0; i < amount; i++) {
        let num = randomNum(1, 82);

        if (window.localStorage) {
            try {

                let character = await recieveAPIData(num);

                saveData(character.name,character.homeworld,character.species);

            } catch (error) {
                document.getElementById("error").innerText = "Error while loading the character.";
            }
        }
    }

    showData();
}
