
function login() {

    let user ;
    let pwrd ;
    let retry ;

    user = prompt("Enter your user");
    pwrd = prompt("Enter your password");


    if((user!=="Manuel")||(pwrd!=="dejapaso")){
        alert("Incorrect credentials.") ;
        retry = confirm("Would you like to try again?") ;

        if(retry === true){
            login() ;
        }

    } else {

        document.getElementById("mainContent").style.display = "block";

    }

}


window.onload = function () { 
    login(); 
};