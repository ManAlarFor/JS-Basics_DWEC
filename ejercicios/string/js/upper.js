"use strict"

/**
 * Turns every character to upper case
 * @param {string} text 
 * @returns 
 */
function toUpper(text) {
    return text.toUpperCase() ;
}

/**
 * Turns every words' first character into upper case
 * @param {string} text 
 * @returns 
 */
function firstUpper(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(text[i-1]==" " || i==0){
            text[i] = toUpper(text[i]) ;
        }

    }

    text = text.join("") ;

    return text ;

}

/**
 * Turns every words' last character into upper case
 * @param {string} text 
 * @returns 
 */
function lastUpper(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(text[i+1]==" " || i==text.length-1){
            text[i] = toUpper(text[i]) ;
        }

    }

    text = text.join("") ;

    return text ;

}

/**
 * Turns every vowel into upper case
 * @param {string} text 
 * @returns 
 */
function vowelUpper(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(/[aeiouAEIOU]/.test(text[i])==true){
            text[i] = toUpper(text[i]) ;
        }

    }

    text = text.join("") ;

    return text ;

}

/**
 * Turns every consonant into upper case
 * @param {string} text 
 * @returns 
 */
function consonantUpper(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(/[aeiouAEIOU]/.test(text[i])==false){
            text[i] = toUpper(text[i]) ;
        }

    }

    text = text.join("") ;

    return text ;

}