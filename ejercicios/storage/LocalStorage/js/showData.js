'use strict';

/**
 * Shows the data storaged in LocalStorage
 */
function showData() {

    document.getElementById("table").innerHTML = "" ;

    const table = document.getElementById("table");

    if (localStorage.getItem("localAccess") && JSON.parse(localStorage.getItem("localAccess")).length > 0) {
        data = JSON.parse(localStorage.getItem("localAccess"));

        data.forEach(function (element) {
            let line = document.createElement("tr"),
                campoName = document.createElement("td"),
                campoSurname = document.createElement("td"),
                campoBorrar = document.createElement("td"),
                campoAge = document.createElement("td"),
                botonBorrar = document.createElement("button");
        

            campoName.innerHTML = element.name;
            campoSurname.innerHTML = element.surname;
            campoAge.innerHTML = element.age;
        
            botonBorrar.textContent = "Delete" ;
            botonBorrar.className = "btn btn-danger";
            botonBorrar.addEventListener('click', function () {
                deleteData(element.name,element.surname,element.age);
            });

            campoBorrar.appendChild(botonBorrar);

            line.appendChild(campoName);
            line.appendChild(campoSurname);
            line.appendChild(campoAge);
            line.appendChild(campoBorrar);

            table.appendChild(line);
        });
    } else {
        table.innerHTML = 'No existen datos almacenados';
    }
    console.table(data);
}


showData() ;