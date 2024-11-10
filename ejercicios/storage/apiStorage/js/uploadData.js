'use strict';

/**
 * Recieves the data in the api and shows it
 * @param {number} amount
 */
async function randomPoke(amount) {
    for (let i = 0; i < amount; i++) {
        let pokedexNum = randomNum(1, 1025);

        if (window.localStorage) {
            try {

                let pokemon = await recieveAPIData(pokedexNum);

                saveData(pokemon);

            } catch (error) {
                document.getElementById("error").innerText = "Error al obtener datos del Pokémon.";
            }
        } else {
            alert("El navegador no soporta localStorage");
        }
    }

    showData();
}
