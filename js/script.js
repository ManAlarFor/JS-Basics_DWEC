"use strict"

const button = document.getElementById("pressme");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    mostrar(result);
});