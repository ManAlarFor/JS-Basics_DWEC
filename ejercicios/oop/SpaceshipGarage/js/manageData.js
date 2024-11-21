'use strict';

// Imports
import { Garage } from "../classes/Garage.js"; 

let garage = new Garage();

garage.showData() ;

/**
 * Adds Data to the database
 */
document.getElementById("moreShips").addEventListener("click", function() {

    garage.addData()

}) 

/**
 * Deletes Data from the database
 */
document.getElementById("removeShip").addEventListener("click", function() {

    garage.removeData() ;

}) 
