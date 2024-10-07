"use strict"

/**
 * Changes num to the indicated base
 * @param {*} base 
 */
function convert(base) {

    let num = parseFloat(document.getElementById('dec').value) ;

    let result = num.toString(base).toUpperCase() ;

    document.getElementById("result").innerHTML = `${num} in base ${base} is ${result}`;

}