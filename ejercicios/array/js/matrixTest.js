"use strict"

function test() {

    let math = randomNum(0,2) ;

    randomValue() ;
    firstMatrixes() ;

    switch(math) {

        case 0:
            console.log("Suma") ;
            matrixAdd() ;
            break;

        case 1:
            console.log("resta");
            matrixSubs() ;
            break;

        case 2:
            console.log("multiplicacion");
            matrixMult() ;
            break;

    }

}