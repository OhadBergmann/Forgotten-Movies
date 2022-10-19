'use strict'



function onInit(){
    (!loadFromStorage(GENRES_KEY) || loadFromStorage(GENRES_KEY).length < 0) ? getGenresApi(_funcGenerateGenresDOM) :
    _funcGenerateGenresDOM(getLocalGenres());
    
    
}


function onLoadMoviesForGenre(name){
    console.log('loading movies for the ' + name + ' genre')
}

function _funcGenerateGenresDOM (res){
    var strHtml = '';
    for (let i = 0; i < 25; i++) {
        if(res[i]){
            strHtml +=`<button Class='genre-card' onclick=onLoadMoviesForGenre('${res[i].name}')>${res[i].name}</button>`;
        }
    }

    strHtml = $('section.ganre-selection').html().trim() + strHtml;
    $('section.ganre-selection').html(strHtml);
}