"use strict";

class Wishlist {

    amoutFav = 0;

    constructor() {
        this.wishlist = new Array();
    }

    /**
     * Adds data to the database
     * @param {boolean} favourite 
     */
    async addData(favourite) {

        document.getElementById("error").innerHTML = "";

        if (window.localStorage) {

            let num = randomNum(1, 20);

            let wish = await recieveAPIData(num);

            saveData(wish, favourite);

        }

        this.showData();
    }

    /**
     * Removes the last item from the stored array in localStorage and updates it
     */
    removeData() {

        let data = JSON.parse(localStorage.getItem("wishes"));

        // Checks if the data exists
        if (Array.isArray(data) && data.length > 0) {

            let num ;

            if(wishlist.amoutFav > 0){

                do{

                    num = randomNum(0,data.length-1);

                }while(!data[num].fav)

            } else {

                num = randomNum(0,data.length-1);

            }

            data.splice(num,1)

            // Updates the localStorage data
            localStorage.setItem("wishes", JSON.stringify(data));

            this.showData();
        } else {
            document.getElementById("error").innerHTML = "No data to remove";
        }
    }

    /**
     * Shows the data in localStorage
     */
    showData() {

        document.getElementById("table").innerHTML = "";

        // Resetea amoutFav para calcular los favoritos actuales
        this.amoutFav = 0;

        // Recieves the localStorage data
        const body = document.getElementById("table");
        let data = JSON.parse(localStorage.getItem("wishes"));

        // Checks if data is valid
        if (Array.isArray(data) && data.length > 0) {
            let num = 1;
            data.forEach((element) => {

                let line = document.createElement("tr"),
                    campoNum = document.createElement("td"),
                    img = document.createElement("img"),
                    campoName = document.createElement("td"),
                    campoImg = document.createElement("td");

                campoName.innerHTML = element.name;
                img.src = element.img;
                img.className = "w-25";

                if (element.fav) {

                    this.amoutFav++;

                    campoNum.innerHTML = `${num} (favourite)`;

                } else {

                    campoNum.innerHTML = num;

                }

                line.appendChild(campoNum);
                line.appendChild(campoName);
                campoImg.appendChild(img);
                line.appendChild(campoImg);

                body.appendChild(line);

                num++;
            });

        } else {
            body.innerHTML = 'No existing data';
        }
    }

}
