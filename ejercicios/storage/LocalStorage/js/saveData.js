'use strict';

function saveData(name, surname, age) {

    data.push({
        name: name,
        surname: surname,
        age: age,
    });

    localStorage.setItem("localAccess", JSON.stringify(data)); 

}
