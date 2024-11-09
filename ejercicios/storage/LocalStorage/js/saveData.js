'use strict';

/** 
 * Introduces the given data in the local storage
 * @param {string} name 
 * @param {string} surname 
 * @param {int} age 
 */
function saveData(name, surname, age) {

    data.push({
        name: name,
        surname: surname,
        age: age,
    });

    localStorage.setItem("localAccess", JSON.stringify(data)); 

}
