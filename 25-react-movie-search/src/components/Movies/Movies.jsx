import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setQuery(search.trim());
    setSearch("");
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?apikey=85ececc1&s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          setError("Película no encontrada!");
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
  }, [query]);

  {
    loading && <h2>Cargando...</h2>;
  }
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          placeholder="batman, avengers, etc"
          onChange={handleChange}
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <div>
              <h2>{movie.Title}</h2>
              <h4>{movie.Year}</h4>
              {movie.Poster !== "N/A" && (
                <img src={movie.Poster} alt={movie.Title} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movies;
