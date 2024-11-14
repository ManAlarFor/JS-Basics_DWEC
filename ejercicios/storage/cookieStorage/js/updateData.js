'use strict';

function updateData(name, surname){

    deleteData(name) ;

    let nameField = name  ? decodeURIComponent(name.trim()) : ''; 

    //Data fields change
    document.getElementById("name").value = nameField ;
    document.getElementById("sur").value = surname ;


}