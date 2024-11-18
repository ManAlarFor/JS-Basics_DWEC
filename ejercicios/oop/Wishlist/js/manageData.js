'use strict';

let wishlist = new Wishlist();

wishlist.showData() ;

/**
 * Adds wishes to the list
 * @param {boolean} favourite 
 */
function moreWishes(favourite) {

    wishlist.addData(favourite)

}

/**
 * Removes a product from the table, with favourites preference
 */
function buyProduct() {

    wishlist.removeData() ;

}