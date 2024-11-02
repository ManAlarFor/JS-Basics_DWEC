"use strict"

/**
 * Adds MatrixA and MatrixB, and displays the result
 */
function matrixAdd() {


    let matrixA = recieveData("matrixA") ;
    let matrixB = recieveData("matrixB") ;
    let result = [] ;
    let size = parseInt(document.getElementById("size").value) ;

    for(let i = 0 ; i < size ; i++) {

        result[i] = [] ;

        for(let j = 0 ; j < size ; j++) {

            result[i][j] = matrixA[i][j] + matrixB[i][j] ;

        }
    }

    result = matrixGen(result,size,"Result") ;


    document.getElementById("result").innerHTML = "" ;
    document.getElementById("result").appendChild(result) ;

}


/**
 * Substracts MatrixB to MatrixA, and displays the result
 */
function matrixSubs() {


    let matrixA = recieveData("matrixA") ;
    let matrixB = recieveData("matrixB") ;
    let result = [] ;
    let size = parseInt(document.getElementById("size").value) ;

    for(let i = 0 ; i < size ; i++) {

        result[i] = [] ;

        for(let j = 0 ; j < size ; j++) {

                result[i][j] = matrixA[i][j] - matrixB[i][j] ;

        }

    }

    result = matrixGen(result,size,"Result") ;


    document.getElementById("result").innerHTML = "" ;
    document.getElementById("result").appendChild(result) ;

}


/**
 * Multiplies MatrixA and MatrixB, and displays the result
 */
function matrixMult() {


    let matrixA = recieveData("matrixA") ;
    let matrixB = recieveData("matrixB") ;
    let size = parseInt(document.getElementById("size").value) ;
    let result = [] ;
    let value ;

    for(let i = 0 ; i < size ; i++) {

        result[i] = [] ;

        for(let j = 0 ; j < size ; j++) {

            value = 0 ;

            // Multiplies the value and adds it to value to assign them to result
            for(let k = 0 ; k < size ; k++) {

                value += (matrixA[i][k] * matrixB[k][j]) ;

            }

            result[i][j] = value ;

        }

    }

    result = matrixGen(result,size,"Result") ;


    document.getElementById("result").innerHTML = "" ;
    document.getElementById("result").appendChild(result) ;

}


/**
 * Gets the data from the tables from the page by the given id and returns it as an array of integers
 * @param {string} containerId 
 * @returns array
 */
function recieveData(containerId) {

    let container = document.getElementById(containerId) ;
    let dataArray = [];

    let table = container.querySelector("table");

    if (!table) {

        document.getElementById("error").innerHTML = "There must be already generated matrixes to use this function" ;

    } else {

        for (let i = 0; i < table.rows.length; i++) {

            let row = table.rows[i];
            let rowData = [];

            for (let j = 0; j < row.cells.length; j++) {
                rowData.push(parseInt(row.cells[j].textContent.trim()));
            }

            dataArray.push(rowData);
        }

        return dataArray;

    }

}