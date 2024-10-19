"use strict";

const value = sessionStorage.getItem("manuel");

if(value === null){
    window.location.replace("../index.html") ;
}
