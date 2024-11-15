'use strict';

/**
 * Shows the data in the database
 */
function showData() {

    const body = document.getElementById("table");
    body.innerHTML = "" ;

    dbRequest = indexedDB.open(dbName, versionBD);

    dbRequest.onsuccess = function (event) {

        starWarsDB = event.target.result;
        canalBD = starWarsDB.transaction(tablaBD, "readonly").objectStore(tablaBD);


        canalBD.getAll().onsuccess = function (event) {

            let registros = event.target.result;

            if(registros.length > 0){

                for (let registro of registros) {
                    let linea = document.createElement("tr"), // creo una fila
                        campoNombre = document.createElement("td"), // creo una celda para el nombre
                        campoHomeworld = document.createElement("td"), // creo una celda para la clave
                        campoSpecies = document.createElement("td"), // creo una celda para la clave

                        campoUpdate = document.createElement("td"), // creo una celda para el botón 'Update'
                        botonUpdate = document.createElement("button"),// creo un botón
                        campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                        botonBorrar = document.createElement("button");// creo un botón

                    campoNombre.innerHTML = registro.name; // escribo el nombre contenido en el array
                    campoHomeworld.innerHTML = registro.homeworld; // escribo la clave contenida en el array
                    campoSpecies.innerHTML = registro.species; // escribo la clave contenida en el array


                    botonUpdate.textContent = "Update";
                    botonUpdate.className = "btn btn-warning";
                    botonUpdate.addEventListener('click', function () {
                        updateData(registro.name,registro.homeworld,registro.species); 
                        deleteData(registro.id);
                    });

                    campoUpdate.appendChild(botonUpdate);


                    botonBorrar.textContent = "Borrar" // etiqueto el botón
                    botonBorrar.className = "btn btn-danger"; // asigno el botón a una clase
                    botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                        deleteData(registro.id); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                    });
                    campoBorrar.appendChild(botonBorrar); // añado el botón a la celda

                    linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                    linea.appendChild(campoHomeworld); // añado a la línea la celda con la clave
                    linea.appendChild(campoSpecies); // añado a la línea la celda con la clave
                    linea.appendChild(campoUpdate); // añado a la línea la celda con el botón
                    linea.appendChild(campoBorrar); // añado a la línea la celda con el botón

                    body.appendChild(linea); // añado al tbody 'body' la línea 
                }

            } else {

                body.innerHTML = "No existing data"

            }

        }
    };
}

showData() ;