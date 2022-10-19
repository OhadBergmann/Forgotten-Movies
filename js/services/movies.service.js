'use strict'

const TMDB_KEY = 'c59ff57d00e327630382a6119087226e';

var gGenres = [];

function getGenres(cb) {
    const XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
            const res = JSON.parse(XHR.responseText);
            cb(res);
        }
    }
  
    XHR.open('GET', `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_KEY}`, true);
    XHR.send();
}