import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=85ececc1&s=batman")
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <div>
              <h2>{movie.Title}</h2>
              <h4>{movie.Year}</h4>
              <img src={movie.Poster}></img>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movies;
