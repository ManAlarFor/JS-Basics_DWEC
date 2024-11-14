'use strict';

function updateData(dexNum, name, type1, type2 ,url){

    //Data fields change
    document.getElementById("dexNum").value = dexNum ; 
    document.getElementById("name").value = name ;
    document.getElementById("url").value = url ;
    document.getElementById("type1").value = type1 ;
    document.getElementById("type2").value = type2 ;

}