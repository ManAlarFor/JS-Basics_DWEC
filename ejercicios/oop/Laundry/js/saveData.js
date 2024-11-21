'use strict';

// Exports
export {saveData}

/** 
 * Saves the introduced clothes
 * @param {string} clothes
 */
function saveData(clothes) {

    let data = JSON.parse(localStorage.getItem("clothes")) || [];

    data.push({
        clothes: clothes
    });

    // Sends Data
    localStorage.setItem("clothes", JSON.stringify(data));
}
