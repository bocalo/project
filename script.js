let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many movies have you already seen?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How many movies have you already seen?", "");
	}
}

//start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("One of the last seen movies", "").trim(),
			b = prompt("Your mark to this movie", "").trim();

		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("done");
		} else {
			console.log("error");
			i--;
		}
	}
}

//rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("You have seen a few movies");
	} else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
		console.log("You are a classical viewer");
	} else if (personalMovieDB.count > 30) {
		console.log("You are a cinephile");
	} else {
		console.log("an error occurred");
	}
}

//detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(
			`Your favorite genre is number: ${i}`
		);
	}
}
writeYourGenres();
