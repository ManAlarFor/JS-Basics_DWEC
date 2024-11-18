'use strict';

/** 
 * Saves the introduced clothes
 * @param {array} wish
 * @param {boolean} favourite 
 */
function saveData(wish,favourite) {

    let data = JSON.parse(localStorage.getItem("wishes")) || [];

    data.push({
        name: wish.name,
        img: wish.img,
        fav: favourite
    });

    localStorage.setItem("wishes", JSON.stringify(data));
}
