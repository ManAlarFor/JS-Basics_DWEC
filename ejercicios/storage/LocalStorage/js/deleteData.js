'use strict';

/**
 * Deletes the selected element of the table by the given name, surname and ages
 * @param {string} name 
 * @param {string} surname 
 * @param {int} age 
 */
function deleteData(name,surname,age) {

    let newDatosAcceso = [];
    let cont = 0;

    let datosAcceso = JSON.parse(localStorage.getItem("localAccess")); 

    for (let i = 0; i < datosAcceso.length; i++) {
        if (!(datosAcceso[i].name == name && datosAcceso[i].surname == surname && datosAcceso[i].age == age)) { 
            newDatosAcceso[cont] = datosAcceso[i];
            cont++;
        }
    }

    datosAcceso = [...newDatosAcceso]; 

    localStorage.setItem("localAccess", JSON.stringify(datosAcceso)); 

    showData(); 
}