'use strict'



function onInit(){
    (!loadFromStorage(GENRES_KEY) || loadFromStorage(GENRES_KEY).length < 0) ? getGenresApi(_funcGenerateGenresDOM) :
    _funcGenerateGenresDOM(getLocalGenres());
    
    
}


function _funcGenerateGenresDOM (res){
    var strHtml = '';
    console.log(res)
    for (let i = 0; i < 25; i++) {
        if(res[i]){
            strHtml +=`<button Class='genre-card' name="${res[i].name}">${res[i].name}</button>`;
        }
    }

    strHtml = $('section.ganre-selection').html().trim() + strHtml;
    $('section.ganre-selection').html(strHtml);
}