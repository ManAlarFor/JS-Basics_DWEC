'use strict';

/** 
 * Saves the introduced pokemon
 * @param {object} pokemon
 */
function saveData(pokemon) {

    let data = JSON.parse(localStorage.getItem("pokedex")) || [];

    data.push({
        pokedexNum: pokemon.pokedexNum,
        name: pokemon.name,
        type1: pokemon.type1,
        type2: pokemon.type2,
        sprite: pokemon.sprite,
    });

    // Sends Data
    localStorage.setItem("pokedex", JSON.stringify(data));
}
