"use strict"


/**
 * Controls the login, if incorrect of shorter than 3 a message is displayed
 */
function login(){
    document.getElementById("size").style.display = "none";
    document.getElementById("incorrect").style.display = "none";

    let username = document.getElementById("username").value ;
    let password = document.getElementById("password").value ;
    
    if ((username.length < 3) || (password.length < 3)){

        document.getElementById("size").style.display = "block";

    } else if((username!=="manuel")||(password!=="dejame")){

        document.getElementById("incorrect").style.display = "block";

    } else {

        document.getElementById("incorrect").style.display = "none";
        document.getElementById("correct").style.display = "block";

        const myTimeout = setTimeout(runSite, 2000);

        function runSite() {
            document.getElementById("login").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
        }

    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

}

