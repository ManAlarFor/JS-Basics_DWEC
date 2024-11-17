'use strict';

/**
 * Recieves the data from recieveAPIData.js and shows it
 */
async function addData() {

    document.getElementById("error").innerHTML = "" ;

    if (window.localStorage) {

        let num = randomNum(2,36) ;

        let ship = recieveAPIData(num) ;

        saveData(ship);

    }

    showData();
}

/**
 * Removes the last item from the stored array in localStorage and updates it
 */
function removeData() {

    let data = JSON.parse(localStorage.getItem("spaceShips"));

    // Checks if the data exists
    if (Array.isArray(data) && data.length > 0) {

        data.pop();

        // Updates the localStorage data
        localStorage.setItem("spaceShips", JSON.stringify(data));

        showData();
    } else {
        document.getElementById("error").innerHTML = "No data to remove";
    }
}