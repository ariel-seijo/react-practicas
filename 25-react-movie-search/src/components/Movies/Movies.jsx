import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=85ececc1&s=${search}`)
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
  }, [search]);

  if (loading) return <h2>Cargando peliculas...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <input
        value={search}
        placeholder="batman, avengers, etc"
        onChange={handleSearch}
      ></input>
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
