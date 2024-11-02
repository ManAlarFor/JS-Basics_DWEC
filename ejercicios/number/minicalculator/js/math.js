"use strict"

/**
 * Makes the indicated calculation
 * @param {*} simbol 
 */
function calc(simbol) {

    let op1 = parseFloat(document.getElementById('op1').value) ;
    let op2 = parseFloat(document.getElementById('op2').value) ;


    // Error Handler
    if(typeof(op1)!="number"||typeof(op2)!="number") {

        document.getElementById("result").innerHTML = "Wrong format introduced";

    } else {

        let result ;


        switch(simbol) {

            //adds op1 to op2
            case '+' :
                result = op1 + op2 ;
                break ;

            //substracts op2 to op1
            case '-' :
                result = op1 - op2 ;
                break ;

            //op1 times op2
            case '*' :
                result = op1 * op2 ;
                break ;

            //op1 divided by op2
            case '/' :
                result = op1 / op2 ;
                break ;

            //takes de integer part
            case '_.' :
                result = Math.round(op1) ;
                break ;

            //takes the decimal part
            case '._' :
                result = op1 - Math.round(op1) ;
                break ;

            //factorial of op1
            case '!' :
                result = 1 ;

                for (let i = op1; i > 0 ; i--) {
                    result *= i ;
                }
                break ;

            //square root of op1
            case '√' :
                result = Math.sqrt(op1) ;
                break ;

            //op1 to the power of 3
            case '^' :
                result = Math.pow(op1,op2) ;
                break ;

        } 

        solution(result) ;

    }
}