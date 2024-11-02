"use strict"

    let repeat ;
    let seconds = 1 ;

/**
 * Dependening on the given input, calls a different character change function
 * @param {int} typeChange 
 */
function stringMod(typeChange) {

    let text = document.getElementById("text").value ;

    switch (typeChange) {
        case 1:
            text = toUpper(text) ;
            break;

        case 2:
            text = firstUpper(text) ;
            break;

        case 3:
            text = lastUpper(text) ;
            break;

        case 4:
            text = consonantUpper(text) ;
            break;

        case 5:
            text = vowelUpper(text) ;
            break;

        case 6:
            text = toLower(text) ;
            break;

        case 7:
            text = firstLower(text) ;
            break;

        case 8:
            text = lastLower(text) ;
            break;

        case 9:
            text = consonantLower(text) ;
            break;

        case 10:
            text = vowelLower(text) ;
            break;

        case 11:
                repeat = setInterval(() => generate(),seconds*1000) ;
            break;

        case 12:
                repeat = clearInterval(repeat) ;
            break;

        case 13:
                (seconds>0)?seconds-=0.25:seconds ;
                repeat = clearInterval(repeat) ;
                repeat = setInterval(() => generate(),seconds*1000) ;
            break;

        case 14:
                seconds+=0.25 ;
                repeat = clearInterval(repeat) ;
                repeat = setInterval(() => generate(),seconds*1000) ;
            break;

        default:
            break;

        }

    // Changes the content in the textarea into the given result
    document.getElementById("text").value = text ;
}