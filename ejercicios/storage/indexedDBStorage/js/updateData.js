'use strict';

/**
 * Updates an specified element in the table
 * @param {*} name 
 * @param {*} homeworld 
 * @param {*} species 
 */
function updateData(name, homeworld, species){

    //Data fields change
    document.getElementById("name").value = name ;
    document.getElementById("homeworld").value = homeworld ;
    document.getElementById("species").value = species ;

}