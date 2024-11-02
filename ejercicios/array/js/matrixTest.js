"use strict"

/**
 * Sets the order of actions the testing should follow
 */
function test() {

    let math = randomNum(0,2) ;

    randomValue() ;
    firstMatrixes() ;

    // Uses the random number to do a random action
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