"use strict"

function calc(simbol) {

    let op1 = parseFloat(document.getElementById('op1').value) ;
    let op2 = parseFloat(document.getElementById('op2').value) ;

    let result ;

        switch(simbol) {

            case '+' :
                result = op1 + op2 ;
                break ;

            case '-' :
                result = op1 - op2 ;
                break ;

            case '*' :
                result = op1 * op2 ;
                break ;

            case '/' :
                result = op1 / op2 ;
                break ;

            case '_.' :
                result = Math.round(op1) ;
                break ;

            case '._' :
                result = op1 - Math.round(op1)   ;
                break ;

            case '!' :

                result = 1 ;
                for (let i = op1; i > 0 ; i--) {

                    result *= i ;

                }
                break ;
        } 

        solution(result) ;
}