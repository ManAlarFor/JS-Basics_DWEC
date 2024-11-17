"use strict"

/**
 * Recieves a pokemon by the given pokedex number
 * @param {int} id 
 * @returns 
 */
function recieveClothes(id){

    const clothingItems = [
        "Shirt 👕",
        "T-Shirt 👔",
        "Blouse 👚",
        "Sweater 🧥",
        "Jacket 🧥",
        "Coat 🧥",
        "Vest 🦺",
        "Pants 👖",
        "Skirt 👗",
        "Shorts 🩳",
        "Leggings 🩴",
        "Jeans 👖",
        "Dress 👗",
        "Tunic 🩱",
        "Gown 👘",
        "Scarf 🧣",
        "Belt 👒",
        "Cap 🧢",
        "Hat 🎩",
        "Gloves 🧤",
        "Boots 👢",
        "Sneakers 👟",
        "Sandals 🩴",
        "Loafers 👞"
    ];

    let num = randomNum(0,clothingItems.length-1) ;

    return clothingItems[num] ;

}
