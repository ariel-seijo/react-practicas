import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=85ececc1&s=basdasadsdasan")
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          setError(data.Error);
          setMovies([]);
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar las peliculas");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Cargando peliculas...</h2>;
  if (error) return <h2>{error}</h2>;

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
