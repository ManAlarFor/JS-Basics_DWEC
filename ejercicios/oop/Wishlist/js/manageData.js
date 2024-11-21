'use strict';

import { Wishlist } from "../classes/Wishlist.js";

let wishlist = new Wishlist();

wishlist.showData() ;


document.getElementById("moreWishes").addEventListener("click", function() {

    wishlist.addData(false)

}) 

document.getElementById("addFav").addEventListener("click", function() {

    wishlist.addData(true)

}) 


document.getElementById("buyProduct").addEventListener("click", function() {

    wishlist.removeData() ;

}) 
