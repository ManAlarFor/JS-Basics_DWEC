"use strict"

export {recieveClothes} ;

/**
 * Recieves a random clothing item 
 * @returns 
 */
function recieveClothes(){

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

    let num = Math.floor(Math.random() * ((clothingItems.length-1) - 0 + 1) + 0);

    return clothingItems[num] ;

}
