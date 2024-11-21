'use strict';

// Imports
import { Wishlist } from "../classes/Wishlist.js";

let wishlist = new Wishlist();

wishlist.showData() ;

/**
 * Adds Data to the database
 */
document.getElementById("moreWishes").addEventListener("click", function() {

    wishlist.addData(false)

}) 

/**
 * Adds Favourite Data to the database
 */
document.getElementById("addFav").addEventListener("click", function() {

    wishlist.addData(true)

}) 

/**
 * Deletes Data from the database
 */
document.getElementById("buyProduct").addEventListener("click", function() {

    wishlist.removeData() ;

}) 
