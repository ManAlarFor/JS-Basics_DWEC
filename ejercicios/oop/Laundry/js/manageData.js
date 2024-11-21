'use strict';

// Imports
import { WashingMachine } from "../classes/WashingMachine.js";

let washingMachine = new WashingMachine();

washingMachine.showData() ;

/**
 * Adds Data to the database
 */
document.getElementById("addClothes").addEventListener("click", function() {

    washingMachine.addData()

}) 

/**
 * Deletes Data from the database
 */
document.getElementById("removeClothes").addEventListener("click", function() {

    washingMachine.removeData() ;

}) 
