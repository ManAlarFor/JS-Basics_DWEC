"use strict"

/**
 * Shows the value of the mini-calculator and controls any errors
 * @param {*} result 
 */
function solution(result) {

    if(isNaN(result)){

        document.getElementById("result").innerHTML = "No data provided";

    } else {

        if(result!==Infinity){
            document.getElementById("op1").value = result;
            document.getElementById("result").innerHTML = `The result is ${result}`;
        }

    }

}