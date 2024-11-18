"use strict"

class Wishlist {

    constructor() {
        this.wishlist = new Array();
        this.tamano = 0;
    }


    /**
     * Recieves the data from recieveAPIData.js and shows it
     */
    async addData() {

        document.getElementById("error").innerHTML = "" ;
    
        if (window.localStorage) {
    
            let num = randomNum(1,20) ;
    
            let wish = await recieveAPIData(num) ;
    
            saveData(wish);
    
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

            data.shift();

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

        // Recieves the localStorage data
        const body = document.getElementById("table");
        let data = JSON.parse(localStorage.getItem("wishes"));

        // Checks if data is valid
        if (Array.isArray(data) && data.length > 0) {
            let num = 1 ;
            data.forEach(function (element) {

                let line = document.createElement("tr"),
                    campoNum = document.createElement("td"),
                    img = document.createElement("img"),
                    campoName = document.createElement("td"),
                    campoImg = document.createElement("td");

                campoName.innerHTML = element.name ;
                campoNum.innerHTML = num ; 
                img.src = element.img ; 
                img.className = "w-25" ; 

                line.appendChild(campoNum);
                line.appendChild(campoName);
                campoImg.appendChild(img);
                line.appendChild(campoImg);

                console.log(element.img)

                body.appendChild(line);

                num++ ;
            });
        } else {
            body.innerHTML = 'No existing data';
        }
    }

}