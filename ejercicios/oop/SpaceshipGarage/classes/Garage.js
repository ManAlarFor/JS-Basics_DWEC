"use strict"

// Imports
import { saveData } from "../js/saveData.js";
import { recieveAPIData } from "../js/recieveAPIData.js";

// Exports
export {Garage} ;

class Garage {

    constructor() {
        this.garage = new Array();
    }


    /**
     * Recieves the data from recieveAPIData.js and shows it
     */
    async addData() {

        document.getElementById("error").innerHTML = "" ;
    
        if (window.localStorage) {

            let num = Math.floor(Math.random() * (36 - 2 + 1) + 2);

            let ship = await recieveAPIData(num) ;

            saveData(ship.name);

        }

        this.showData();
    }


    /**
     * Removes the last item from the stored array in localStorage and updates it
     */
    removeData() {

        let data = JSON.parse(localStorage.getItem("spaceShips"));

        // Checks if the data exists
        if (Array.isArray(data) && data.length > 0) {

            data.shift();

            // Updates the localStorage data
            localStorage.setItem("spaceShips", JSON.stringify(data));

            this.showData();
        } else {
            document.getElementById("error").innerHTML = "No data to remove";
        }
    }



    /**
     * Shows the data in localStorage
     */
    showData() {

        document.getElementById("table").innerHTML = "";

        // Recieves the localStorage data
        const body = document.getElementById("table");
        let data = JSON.parse(localStorage.getItem("spaceShips"));

        // Checks if data is valid
        if (Array.isArray(data) && data.length > 0) {
            let num = 1 ;
            data.forEach(function (element) {

                let line = document.createElement("tr"),
                    campoNum = document.createElement("td"),
                    campoName = document.createElement("td");

                campoName.innerHTML = element.name ;

                if(num !== 1){

                    campoNum.innerHTML = num ;

                } else {

                    campoNum.innerHTML = `${num} (Next)` ;

                }


                line.appendChild(campoNum);
                line.appendChild(campoName);

                body.appendChild(line);

                num++ ;
            });
        } else {
            body.innerHTML = 'No existing data';
        }
    }

}