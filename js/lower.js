"use strict"

/**
 * Turns every character to lower case
 * @param {*} text 
 * @returns 
 */
function toLower(text) {
    return text.toLowerCase() ;
}

/**
 * Turns every words' first character into lower case
 * @param {*} text 
 * @returns 
 */
function firstLower(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(text[i-1]==" " || i==0){
            text[i] = toLower(text[i]) ;
        }

    }

    text = text.join("") ;

    return text ;

}

/**
 * Turns every words' last character into lower case
 * @param {*} text 
 * @returns 
 */
function lastLower(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(text[i+1]==" " || i==text.length-1){
            text[i] = toLower(text[i]) ;
        }

    }

    text = text.join("") ;

    return text ;

}

/**
 * Turns every vowel into lower case
 * @param {*} text 
 * @returns 
 */
function vowelLower(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(/[aeiouAEIOU]/.test(text[i])==true){
            text[i] = toLower(text[i]) ;
        }
        
    }

    text = text.join("") ;

    return text ;

}

/**
 * Turns every consonant into lower case
 * @param {*} text 
 * @returns 
 */
function consonantLower(text) {

    text = text.split("") ;

    for(let i = 0 ; i < text.length; i++){

        if(/[aeiouAEIOU]/.test(text[i])==false){
            text[i] = toLower(text[i]) ;
        }

    }

    text = text.join("") ;

    return text ;

}