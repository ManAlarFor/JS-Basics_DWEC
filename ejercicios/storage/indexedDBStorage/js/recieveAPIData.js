"use strict"

/**
 * Recieves a character by the given random number
 * @param {int} id 
 * @returns 
 */
async function recieveAPIData(id){
    const character = await fetch(`https://swapi.dev/api/people/${id}`) ;

    if (!character.ok) {
        throw new Error(`Response status: ${character.status}`);
    }

    const data = await character.json();

    const homeworld = await fetch(data.homeworld);

    if (!homeworld.ok) {
        throw new Error(`Response status: ${character.status}`);
    }

    const planet = await homeworld.json() ;

    const species = await fetch(data.species[0]);

    let spec ;

    if (species.ok) {
        spec = await species.json();
        spec = spec.name ;
    } else {
        spec = "Human" ;
    }


    const elements = {

        name: data.name,
        homeworld: planet.name,
        species: spec

    } ;

    return elements ;

}
