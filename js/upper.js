"use strict"

function toUpper(text) {
    return text.toUpperCase() ;
}

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