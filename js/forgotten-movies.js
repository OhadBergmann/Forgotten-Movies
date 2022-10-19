'use strict'



function onInit(){
    (!loadFromStorage(GENRES_KEY) || loadFromStorage(GENRES_KEY).length < 0) ? getGenresApi(_funcGenerateGenresDOM) :
    _funcGenerateGenresDOM(getLocalGenres());
    
    
}


const _funcGenerateGenresDOM = (res) => {
    for (let i = 0; i < 25; i++) {
        if(res[i]){
            console.log(res[i])
            //res[i]
        } else{
            return;
        }
    }
}