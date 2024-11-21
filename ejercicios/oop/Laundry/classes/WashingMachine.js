"use strict"

import { saveData } from "../js/saveData.js";
import { recieveClothes } from "../js/recieveClothes.js";

export {WashingMachine} ;

class WashingMachine {

    constructor() {
        this.garage = new Array();
    }


    /**
     * Recieves the data from recieveClothes.js and shows it
     */
    addData() {

        document.getElementById("error").innerHTML = "" ;

        if (window.localStorage) {

            let clothes = recieveClothes() ;

            saveData(clothes);

        }

        this.showData();
    }


    /**
     * Removes the last item from the stored array in localStorage and updates it
     */
    removeData() {

        let data = JSON.parse(localStorage.getItem("clothes"));

        // Checks if the data exists
        if (Array.isArray(data) && data.length > 0) {

            data.pop();

            // Updates the localStorage data
            localStorage.setItem("clothes", JSON.stringify(data));

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
        let data = JSON.parse(localStorage.getItem("clothes"));

        // Checks if data is valid
        if (Array.isArray(data) && data.length > 0) {
            let num = 1 ;
            data.forEach(function (element) {

                let line = document.createElement("tr"),
                    campoNum = document.createElement("td"),
                    campoName = document.createElement("td");

                campoName.innerHTML = element.clothes ;

                if(num !== data.length){

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