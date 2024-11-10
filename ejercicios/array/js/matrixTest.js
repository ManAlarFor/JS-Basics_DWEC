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
            matrixAdd() ;
            break;

        case 1:
            matrixSubs() ;
            break;

        case 2:
            matrixMult() ;
            break;

    }

}