'use strict';

/**
 * Recieves the data from recieveClothes.js and shows it
 */
function addData() {

    document.getElementById("error").innerHTML = "" ;

    if (window.localStorage) {

        let clothes = recieveClothes() ;

        saveData(clothes);

    }

    showData();
}

/**
 * Removes the last item from the stored array in localStorage and updates it
 */
function removeData() {

    let data = JSON.parse(localStorage.getItem("clothes"));

    // Checks if the data exists
    if (Array.isArray(data) && data.length > 0) {

        data.pop();

        // Updates the localStorage data
        localStorage.setItem("clothes", JSON.stringify(data));

        showData();
    } else {
        document.getElementById("error").innerHTML = "No data to remove";
    }
}