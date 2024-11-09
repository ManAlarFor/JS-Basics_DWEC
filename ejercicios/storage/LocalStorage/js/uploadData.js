'use strict';
let data = [];

/**
 * Sends the data to the other functions
 */
function uploadData() {

    //Regex to chexk if the introduced data is correct
    let noNumReg = /^([^0-9]*)$/ ;

    //Error field reset
    document.getElementById("error").innerHTML = "" ;

    if (window.localStorage) {
        const name      = document.getElementById("name").value; 
        const surname   = document.getElementById("sur").value; 
        const age       = document.getElementById("age").value;

        //Error Handling
        if(name == "" || surname == "" || age == ""){

            document.getElementById("error").innerHTML = "Los campos tienen que estar completos" ;


        } else if (!noNumReg.test(name) || !noNumReg.test(surname)) {

            document.getElementById("error").innerHTML = "Los nombres y apellidos no pueden contener numeros" ;

        } else{

            saveData(name, surname, age);
            showData(); 

            document.getElementById("name").value = "" ;
            document.getElementById("sur").value = "" ; 
            document.getElementById("age").value = "" ;

        }

    } else {
        alert("El navegador no soporta localStorage");
    }

}

