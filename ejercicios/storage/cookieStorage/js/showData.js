'use strict';

function showData() {

    document.getElementById("table").innerHTML = "" ;

    const body = document.getElementById("table"); 

    if (document.cookie && document.cookie.length > 0) { 

        let data = document.cookie.split(";");

        data.forEach(function (dato) {
            let linea = document.createElement("tr"), 
                campoName = document.createElement("td"), 
                campoSurname = document.createElement("td"), 
                campoBorrar = document.createElement("td"), 
                botonBorrar = document.createElement("button"),
                campoUpdate = document.createElement("td"), 
                botonUpdate = document.createElement("button");

            let element = dato.split("="); 
            let cookieName = element[0].trim(); 
            let cookieSurname = element[1] ? decodeURIComponent(element[1].trim()) : ''; 

            campoName.innerHTML = decodeURIComponent(cookieName); 
            campoSurname.innerHTML = decodeURIComponent(cookieSurname); 

            botonUpdate.textContent = "Update";
            botonUpdate.className = "btn btn-warning";
            botonUpdate.addEventListener('click', function () {
                deleteData(cookieName); 
                cookieName = element[0]  ? decodeURIComponent(element[0].trim()) : ''; 
                updateData(cookieName, cookieSurname); 
                showData(); 
            });

            campoUpdate.appendChild(botonUpdate);

            botonBorrar.textContent = "Delete";
            botonBorrar.className = "btn btn-danger";
            botonBorrar.addEventListener('click', function () {
                deleteData(cookieName); 
                showData(); 
            });

            campoBorrar.appendChild(botonBorrar);

            linea.appendChild(campoName);
            linea.appendChild(campoSurname);
            linea.appendChild(campoUpdate);
            linea.appendChild(campoBorrar);

            body.appendChild(linea);
        });
    } else {
        body.innerHTML = 'No existen datos almacenados';
    }
}

showData();
