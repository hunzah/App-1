"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    let i = 0;
    while (i < 2) {
      const a = prompt("Один из последних просмотренных фильмов?", "");
      const b = prompt("На сколько его оцените?", "");
      i++;

      if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error blyad");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("You are bitch ass");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("You are regular ass");
    } else if (personalMovieDB.count > 30) {
      console.log("You are nerd ass mf");
    } else console.log("Error");
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function () {
    
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(
        `Ваш любимый жанр под номером ${i}`
      );
      if (personalMovieDB===null || personalMovieDB==="") {
       console.log ("Вы ввели некорректные данные или не ввели их вовсе");
       i--;   
      }
      else{
      personalMovieDB.genres[i - 1] = prompt(
        `Ваш любимый жанр под номером ${i}`);}
    }
    personalMovieDB.genres.forEach ((item, i)=> {
    console.log (`Любимый жанр ${i+1}- это${item}`) 
    })
  },
  toggleVisibleMyDB: function (a) {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
