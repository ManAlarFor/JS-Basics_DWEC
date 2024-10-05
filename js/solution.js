"use strict"

function solution(result) {

    if(isNaN(result)){

        document.getElementById("result").innerHTML = "No data provided";

    } else {

        if(result!==Infinity){
            document.getElementById("op1").value = result;
            document.getElementById("result").innerHTML = `The result is ${result}`;
        }

    }

}