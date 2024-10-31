"use strict"

    function randomNum(least,top) {

        let num = Math.floor(Math.random() * (top - least + 1) + least);

        return num ;

    }