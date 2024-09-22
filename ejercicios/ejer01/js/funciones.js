"use strict"

function mostrar(result) {
    console.log(`I'm showing ${result.getAttribute('name')}'s result`);
    result.innerHTML = `I'm showing ${result.getAttribute('name')}'s result`;
}
