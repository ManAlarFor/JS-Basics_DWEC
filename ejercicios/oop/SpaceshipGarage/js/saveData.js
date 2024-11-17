'use strict';

/** 
 * Saves the introduced clothes
 * @param {string} ship
 */
function saveData(ship) {

    let data = JSON.parse(localStorage.getItem("spaceShips")) || [];

    data.push({
        name: ship
    });

    localStorage.setItem("spaceShips", JSON.stringify(data));
}
