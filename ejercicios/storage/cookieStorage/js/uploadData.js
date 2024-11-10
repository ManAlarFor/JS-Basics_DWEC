'use strict';

let data = []; 

function uploadData(){

    //Regex to check if the introduced data is correct
    let noNumReg = /^([^0-9]*)$/ ;

    //Error field reset
    document.getElementById("error").innerHTML = "" ;

    if (navigator.cookieEnabled == true) { 
        const name = document.getElementById("name").value; 
        const surname = document.getElementById("sur").value; 

        if(name == "" || surname == ""){

            document.getElementById("error").innerHTML = "Los campos tienen que estar completos" ;

        } else if (!noNumReg.test(name) || !noNumReg.test(surname)) {

            document.getElementById("error").innerHTML = "Los nombres y apellidos no pueden contener numeros" ;

        } else {

            saveData(name, surname);

            document.getElementById("name").value = "" ;
            document.getElementById("sur").value = "" ; 

        }

    } else {
        alert("El uso de cookies está desactivado");
    }

    showData(); 
}