'use strict';

/**
 * Recieves the data from the inputs and shows it
 */
async function uploadData() {

    document.getElementById("error").innerHTML = "" ;

    let dexNum  = document.getElementById("dexNum").value ;
    let name    = document.getElementById("name").value ;
    let url     = document.getElementById("url").value ;
    let type1   = document.getElementById("type1").value ;
    let type2   = document.getElementById("type2").value ;

    if (window.localStorage) {

        if(dexNum && name && url) {

            const pokemon = {

                pokedexNum: dexNum,
                name: name,
                type1: type1,
                type2: type2,
                sprite: url
        
            } ;

            saveData(pokemon);

            document.getElementById("dexNum").value = "" ;
            document.getElementById("name").value = "" ;
            document.getElementById("url").value = "" ;
            document.getElementById("type1").value = "" ;
            document.getElementById("type2").value = "" ;

        } else if(type1==type2) {

            document.getElementById("error").innerHTML = "The first and the second type cant be the same" ;

        } else {

            document.getElementById("error").innerHTML = "All fields must be filled" ;

        }

    } else {
        alert("El navegador no soporta localStorage");
    }

    showData();
}
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
                document.getElementById("error").innerText = "Error while loading the Pokemin.";
            }
        } else {
            alert("El navegador no soporta localStorage");
        }
    }

    showData();
}
