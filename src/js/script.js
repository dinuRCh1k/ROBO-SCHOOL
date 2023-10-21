const number0fFilmls = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: number0fFilmls,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("Один из последних просмотренных фильмов", '');
const b = prompt("На сколько оцените его?", '');
const c = prompt("Один из последних просмотренных фильмов", '');
const d = prompt("На сколько оцените его?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);    