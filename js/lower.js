"use strict"

function toLower(text) {
    return text.toLowerCase() ;
}

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