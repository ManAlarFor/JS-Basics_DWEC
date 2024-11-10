"use strict"

/**
 * Recieves a pokemon by the given pokedex number
 * @param {int} id 
 * @returns 
 */
async function recieveAPIData(id){
    const poke = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`) ;

    if (!poke.ok) {
        throw new Error(`Response status: ${poke.status}`);
    }

    const data = await poke.json();

    const elements = {

        pokedexNum: data.id,
        name: firstUpper(data.name),
        type1: firstUpper(data.types[0].type.name),
        type2: firstUpper((data.types[1]!=null)?data.types[1].type.name:"------"),
        sprite: data.sprites.front_default

    } ;

    return elements ;

}
