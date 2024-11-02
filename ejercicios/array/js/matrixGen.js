"use strict"

/**
 * Randomizes the values in the inputs
 */
function randomValue(){

    document.getElementById("size").value = randomNum(1,5)  ;

    let min = randomNum(1,99) ; 

    document.getElementById("minRand").value = min ;
    document.getElementById("maxRand").value = randomNum(min,99) ;

}

function matrixGen(values, size, caption) {

    document.getElementById("result").innerHTML = "" ;

    let matrix = document.createElement("table");

    let title = document.createElement("caption") ;

    title.textContent = caption ;


    for(let i = 0 ; i < size ; i++){

        let row = document.createElement("tr") ;
        
        for(let j = 0 ; j < size ; j++){

            let square = document.createElement("td") ;

            square.textContent = values[i][j] ;
            row.appendChild(square) ;

        }

        matrix.appendChild(row);

    }

    matrix.appendChild(title) ;

    return matrix ;

}