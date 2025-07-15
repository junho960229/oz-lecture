// 기본 장르 설정 (const 사용)
const defaultGenre = "Unknown";

// 영화 배열 선언 (let 사용)
let movies = [];

// 영화 객체 하드코딩 (var 사용도 포함)
var movie1 = {
  title: "The Matrix",
  director: "Wachowskis",
  year: 1999,
  genre: "Sci-Fi"
};

var movie2 = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  genre: "Sci-Fi"
};

var movie3 = {
  title: "Parasite",
  director: "Bong",
  year: 2019,
  genre: "Drama"
};

// 배열에 영화 객체 추가
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);

// 영화 출력 함수 정의 (함수 선언문)
function printMovies(moviesArray) {
  console.log("Movie Collection:");

  for (let i = 0; i < moviesArray.length; i++) {
    let movie = moviesArray[i];

    // 빈 값 처리 (기본값 설정)
    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown";
    if (!movie.genre) movie.genre = defaultGenre;

    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
    );
  }

  console.log(`Total Movies: ${moviesArray.length}`);
}

// 함수 호출
printMovies(movies);
