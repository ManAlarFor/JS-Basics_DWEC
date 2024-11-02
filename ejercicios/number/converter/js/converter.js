"use strict"

/**
 * Changes num to the indicated base
 * @param {*} base 
 */
function convert(base) {

    let num = parseFloat(document.getElementById('dec').value) ;

    // Error handling
    if(typeof(num)!="number") {

        document.getElementById("result").innerHTML = `Wrong format introduced`;

    } else if (isNaN(num)){ 

        document.getElementById("result").innerHTML = "No data provided";

    } else {

        let result = num.toString(base).toUpperCase() ;

        document.getElementById("result").innerHTML = `${num} in base ${base} is ${result}`;

    }

}