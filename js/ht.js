//создание перменной
const numberOfFilms = +prompt ('Now much films do you  saw?','');
// создание обЪекта со свойствами
const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// переменные с ответами
const a = prompt('Now much films do you saw?',''),
      b = prompt('Do you have opinion about it?',''),
      c = prompt ('Now much films do you saw?',''),
      d = prompt('Do you have opinion about it?','');

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[a] = d;  

console.log(personalMovieDB);