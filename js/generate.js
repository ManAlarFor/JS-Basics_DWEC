"use strict"

/**
 * Generates a random input for the random text changes
 */
function generate() {

    const min = 1;

    const max = 10;

    let change = Math.floor(Math.random() * (max - min + 1) + min);

    stringMod(change) ;

}