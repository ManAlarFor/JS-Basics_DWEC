'use strict';

/**
 * Shows the data in localStorage
 */
function showData() {

    document.getElementById("table").innerHTML = "";

    // Recieves the localStorage data
    const body = document.getElementById("table");
    let data = JSON.parse(localStorage.getItem("spaceShips"));

    // Checks if data is valid
    if (Array.isArray(data) && data.length > 0) {
        data.forEach(function (element) {
            let line = document.createElement("tr"),
                campoName = document.createElement("td");

            campoName.innerHTML = element.ship ;

            line.appendChild(campoName);

            body.appendChild(line);
        });
    } else {
        body.innerHTML = 'No existing data';
    }
}

showData();
