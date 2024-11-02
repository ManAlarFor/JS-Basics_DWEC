"use strict"

/**
 * This function creates the first two matrixes by the given parameters by the input fields 
 */
function firstMatrixes() {

    // Getting the parameters
    let size    = document.getElementById("size").value ;
    let minRand = document.getElementById("minRand").value ;
    let maxRand = document.getElementById("maxRand").value ;

    // Error handling
    if( minRand == "" || maxRand == "" || size == "") {

        document.getElementById("error").innerHTML = "All fields must be filled" ;

    } else {

        size = parseInt(size) ;
        minRand = parseInt(minRand) ;
        maxRand = parseInt(maxRand) ;

        if (size < 0 || size > 5) {

            document.getElementById("error").innerHTML = "The size must be between 0 and 5" ;

        } else if (minRand < 0 || minRand > 99 || maxRand < 0 || maxRand > 99) {

            document.getElementById("error").innerHTML = "The randomly generated numbers must be between 0 and 99" ;

        } else if (minRand > maxRand) {

            document.getElementById("error").innerHTML = "Max. Value must be greater than Min. Value" ;

        } else {

            document.getElementById("error").innerHTML = "" ;

            let matrixAValues = [] ;
            let matrixBValues = [] ;

            // Filling up the matrixes
            for(let i = 0 ; i < size ; i++){

                matrixAValues[i] = [] ;
                matrixBValues[i] = [] ;

                for(let j = 0 ; j < size ; j++){

                    matrixAValues[i][j] = randomNum(minRand,maxRand) ;
                    matrixBValues[i][j] = randomNum(minRand,maxRand) ;

                }
            }

            // Displaying the matrixes

            let matrixA = matrixGen(matrixAValues, size, "Matrix A") ;
            let matrixB = matrixGen(matrixBValues, size, "Matrix B") ;

            document.getElementById("matrixA").innerHTML = "" ;
            document.getElementById("matrixA").appendChild(matrixA) ;

            document.getElementById("matrixB").innerHTML = "" ;
            document.getElementById("matrixB").appendChild(matrixB) ;

        }
    }

}
