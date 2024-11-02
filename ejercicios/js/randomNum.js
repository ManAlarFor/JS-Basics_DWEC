"use strict"

    /**
     * Generates a random number by given minimum and maximum values(included)
     * @param {*} least 
     * @param {*} top 
     * @returns 
     */
    function randomNum(least,top) {

        let num = Math.floor(Math.random() * (top - least + 1) + least);

        return num ;

    }