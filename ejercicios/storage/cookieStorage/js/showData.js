'use strict';

function showData() {

    document.getElementById("table").innerHTML = "" ;

    const body = document.getElementById("table"); 

    if (document.cookie && document.cookie.length > 0) { 

        let data = document.cookie.split(";");

        console.log(data) ;

        data.forEach(function (dato) {
            let linea = document.createElement("tr"), 
                campoName = document.createElement("td"), 
                campoSurname = document.createElement("td"), 
                campoBorrar = document.createElement("td"), 
                botonBorrar = document.createElement("button");

            let element = dato.split("="); 
            let cookieName = element[0].trim(); 
            let cookieSurname = element[1] ? decodeURIComponent(element[1].trim()) : ''; 

            campoName.innerHTML = decodeURIComponent(cookieName); 
            campoSurname.innerHTML = decodeURIComponent(cookieSurname); 

            botonBorrar.textContent = "Delete";
            botonBorrar.className = "btn btn-danger";
            botonBorrar.addEventListener('click', function () {
                deleteData(cookieName); 
                showData(); 
            });

            campoBorrar.appendChild(botonBorrar);

            linea.appendChild(campoName);
            linea.appendChild(campoSurname);
            linea.appendChild(campoBorrar);

            body.appendChild(linea);
        });
    } else {
        body.innerHTML = 'No existen datos almacenados';
    }
}

showData();
