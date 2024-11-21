'use strict';

import { WashingMachine } from "../classes/WashingMachine.js";

let washingMachine = new WashingMachine();

washingMachine.showData() ;

document.getElementById("addClothes").addEventListener("click", function() {

    washingMachine.addData()

}) 


document.getElementById("removeClothes").addEventListener("click", function() {

    washingMachine.removeData() ;

}) 
