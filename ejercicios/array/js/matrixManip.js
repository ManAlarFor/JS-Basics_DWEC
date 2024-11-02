"use strict"

//Setting the time controllers for the interval 
let repeat ;
let seconds = 1 ;

/**
 * Handles the testing section of the page
 * @param {string} action 
 */
function testing(action) {

    switch(action){

        // Starts the random generation by the given interval
        case "start" :

            repeat = setInterval(() => test(),seconds*1000) ;

            break;

        // Stops the generation
        case "stop" :

            repeat = clearInterval(repeat) ;

            break;

        // Makes the generation faster
        case "fast" :

            (seconds>0)?seconds-=0.25:seconds ;
            repeat = clearInterval(repeat) ;
            repeat = setInterval(() => test(),seconds*1000) ;

            break;

        // Makes the generation slower
        case "slow" :

            seconds+=0.25 ;
            repeat = clearInterval(repeat) ;
            repeat = setInterval(() => test(),seconds*1000) ;

            break;

    }

}