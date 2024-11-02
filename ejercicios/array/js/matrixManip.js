"use strict"

let repeat ;
let seconds = 1 ;


function testing(action) {

    switch(action){

        case "start" :

            repeat = setInterval(() => test(),seconds*1000) ;

            break;

        case "stop" :

            repeat = clearInterval(repeat) ;

            break;

        case "fast" :

            (seconds>0)?seconds-=0.25:seconds ;
            repeat = clearInterval(repeat) ;
            repeat = setInterval(() => test(),seconds*1000) ;

            break;

        case "slow" :

            seconds+=0.25 ;
            repeat = clearInterval(repeat) ;
            repeat = setInterval(() => test(),seconds*1000) ;

            break;


    }

}