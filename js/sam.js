'use strict';


const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?',"");    
        }      
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            let  a, b;
                do {
                        a = prompt("Один из последних просотренных фильмов","");
                } 
                while (a == null || a == "" || a.length > 50 );
                do {
                    b = prompt("На сколько вы его оцениваете",""); 
                }
                while (b == null || b == "" || b.length > 50 );
                
            personalMovieDB.movies[a] = b;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
        }else if (personalMovieDB.count >= 30 ){
            alert("Вы киноман"); 
        }
        else {
            alert("Произошла ошибка"); 
        }    
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
            if (personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] == "" || isNaN(personalMovieDB.genres[i-1])){
                i--;
            }
        }
        personalMovieDB.genres.forEach(function (item, i ){
            console.log(`Любимый жанр # ${i+1} - ${personalMovieDB.genres[i]}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    }
}; 



personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();





console.log(personalMovieDB);


