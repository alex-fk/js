const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?',"");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}; 

const  a = prompt("Один из последних просотренных фильмов",""),
       b = prompt("На сколько вы его оцениваете",""),   
       c = prompt("Один из последних просотренных фильмов",""),
       d = prompt("На сколько вы его оцениваете","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);