"use strict"

/**
 * Controls the login, if incorrect of shorter than 3 a message is displayed
 */
function login(){

    document.getElementById("incorrect").innerHTML = "";

    let username = document.getElementById("username").value ;
    let password = document.getElementById("password").value ;


    if ((username.length < 3) || (password.length < 3)){

        document.getElementById("incorrect").innerHTML = "The password must be 3 at least 3 characters long";

    } else if((username!=="manuel")||(password!=="dejame")){

        document.getElementById("incorrect").innerHTML = "Wrong credentials";

    } else {

        document.getElementById("correct").innerHTML = `Welcome,${username}!` ;

        const myTimeout = setTimeout(runSite, 2000);

    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    /**
     * Runs the site and calls the cookie setter
     */
    function runSite() {

        setCookie(username, password, 1) ;

        window.location.replace("./ejercicios/main.html") ;
    }

}

