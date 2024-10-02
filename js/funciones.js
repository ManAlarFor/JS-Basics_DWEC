"use strict"

/**
 * Shows the exercise's result (changes a sentence in the html file)
 * @param {*} result 
 */
function mostrar(result) {
    console.log(`I'm showing ${result.getAttribute('name')}'s result`);
    result.innerHTML = `I'm showing ${result.getAttribute('name')}'s result`;
}
