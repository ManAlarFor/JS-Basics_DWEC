'use strict';

/** 
 * Introduces the given data in the local storage
 * @param {string} name 
 * @param {string} surname 
 * @param {int} age 
 */
function saveData(name, surname, age) {

    let data = JSON.parse(localStorage.getItem("usersList")) || [];

    data.push({
        name: name,
        surname: surname,
        age: age,
    });

    localStorage.setItem("usersList", JSON.stringify(data)); 

}
