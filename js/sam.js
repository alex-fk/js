const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?',"");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}; 
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



console.log(personalMovieDB);

// // if (4 == 0) {
// //     console.log(true);
// // }else if (4 == 6) {
// //     console.log(false);
// // }else{
// //     console.log(false);
// // }

// // (num === 50) ? console.log("OK") : console.log("error");

// // switch (num) {
// //     case 49: 
// //         console.log('Неверно');
// //         break;
// //     case 100:
// //         console.log('Неверно');
// //         break;
// //     case 50:   
// //         console.log('В точку!');
// //         break;
// //     default:
// //         console.log('Не в этот раз');
// //         break;
// // }
// let num = 50;
// // while (num <= 55){
// //     console.log(num);
// //     num++;
// // }
// do {
//     console.log(num);
//     num++;  
// } 
// while (num < 55);

// for (let i =1; i < 8; i++){
//     if (i == 3){
//         // break;
//         continue;
//     }
//     console.log(i);
// }