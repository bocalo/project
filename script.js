const numberOfFilms = +prompt("How many movies have yoy seen?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const a = prompt("One of the last seen movies", ""),
	b = prompt("Your mark to this movie", ""),
	c = prompt("One of the last seen movies", ""),
	d = prompt("Your mark to this movie", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
