'use strict';

/**
 * Shows the data in localStorage
 */
function showData() {

    document.getElementById("table").innerHTML = "";

    const body = document.getElementById("table");
    let data = JSON.parse(localStorage.getItem("pokedex"));

    if (data.length > 0) {
        data.forEach(function (element) {
            let line = document.createElement("tr"),
                campoNum = document.createElement("td"),
                campoName = document.createElement("td"),
                campoType1 = document.createElement("td"),
                campoType2 = document.createElement("td"),
                campoSprite = document.createElement("td"),
                campoBorrar = document.createElement("td"),
                botonBorrar = document.createElement("button"),
                campoUpdate = document.createElement("td"),
                botonUpdate = document.createElement("button"),
                imgSprite = document.createElement("img");

            campoNum.innerHTML = element.pokedexNum;
            campoName.innerHTML = element.name;
            campoType1.innerHTML = element.type1;
            campoType2.innerHTML = element.type2;
            imgSprite.src = element.sprite || "";
            campoSprite.appendChild(imgSprite);

            botonUpdate.textContent = "Update";
            botonUpdate.className = "btn btn-warning";
            botonUpdate.addEventListener('click', function () {
                deleteData(element.name); 
                updateData(element.pokedexNum, element.name, element.type1, element.type2, element.sprite); 
                showData(); 
            });

            campoUpdate.appendChild(botonUpdate);

            botonBorrar.textContent = "Delete";
            botonBorrar.className = "btn btn-danger";
            botonBorrar.addEventListener('click', function () {
                deleteData(element.name);
            });

            campoBorrar.appendChild(botonBorrar);

            line.appendChild(campoNum);
            line.appendChild(campoName);
            line.appendChild(campoType1);
            line.appendChild(campoType2);
            line.appendChild(campoSprite);
            line.appendChild(campoUpdate);
            line.appendChild(campoBorrar);

            body.appendChild(line);
        });
    } else {
        body.innerHTML = 'No existing data';
    }
}

showData() ;