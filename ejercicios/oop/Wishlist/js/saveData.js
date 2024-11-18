'use strict';

/** 
 * Saves the introduced clothes
 * @param {array} wish
 */
function saveData(wish) {

    let data = JSON.parse(localStorage.getItem("wishes")) || [];

    data.push({
        name: wish.name,
        img: wish.img
    });

    localStorage.setItem("wishes", JSON.stringify(data));
}
