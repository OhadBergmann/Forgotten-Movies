'use strict'

const GENRES_KEY = 'genres-id-name';
const TMDB_KEY = 'c59ff57d00e327630382a6119087226e';

var gGenres;

function getGenresApi(cb) {
    const XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
            const res = JSON.parse(XHR.responseText);
            _saveAndCallGenres(res,cb);
        }
    }
  
    XHR.open('GET', `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_KEY}`, true);
    XHR.send();
}

function getLocalGenres (){
    gGenres = loadFromStorage(GENRES_KEY);
    return gGenres;
}

function _saveAndCallGenres(res,cb){
    gGenres = res.genres.map((genre)=>{
        if(genre.name.includes(' ')){
            genre.name = genre.name.replace(new CustomReplacer(' '));
        }
        return genre;
    });
    saveToStorage(GENRES_KEY, gGenres);
    cb(gGenres);
}