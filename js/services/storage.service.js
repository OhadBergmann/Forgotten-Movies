'use strict'


function loadFromStorage(key){
    return localStorage.getItem(key)
}

function saveToStorage(key,value){
    localStorage.setItem(key,value);
}
