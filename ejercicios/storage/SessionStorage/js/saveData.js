'use strict';

/** 
 * Introduces the given data in the local storage
 * @param {string} name 
 * @param {string} surname 
 * @param {int} age 
 */
function saveData(name, surname, age) {

    let data = JSON.parse(sessionStorage.getItem("usersList")) || [];

    data.push({
        name: name,
        surname: surname,
        age: age,
    });

    sessionStorage.setItem("usersList", JSON.stringify(data)); 

}
