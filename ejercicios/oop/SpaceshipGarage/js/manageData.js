'use strict';

import { Garage } from "../classes/Garage.js"; 

let garage = new Garage();

garage.showData() ;

document.getElementById("moreShips").addEventListener("click", function() {

    garage.addData()

}) 


document.getElementById("removeShip").addEventListener("click", function() {

    garage.removeData() ;

}) 
