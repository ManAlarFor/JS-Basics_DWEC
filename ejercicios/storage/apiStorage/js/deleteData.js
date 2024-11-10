'use strict';

/**
 * Deletes the selected element of the table by the given name, surname and ages
 * @param {string} name 
 */
function deleteData(name) {

    let newDatosAcceso = [];
    let cont = 0;

    let datosAcceso = JSON.parse(localStorage.getItem("pokedex")); 

    for (let i = 0; i < datosAcceso.length; i++) {
        if (!(datosAcceso[i].name == name)) { 
            newDatosAcceso[cont] = datosAcceso[i];
            cont++;
        }
    }

    datosAcceso = [...newDatosAcceso]; 

    localStorage.setItem("pokedex", JSON.stringify(datosAcceso)); 

    showData(); 
}