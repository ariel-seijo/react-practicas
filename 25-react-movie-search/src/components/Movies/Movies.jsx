import { useState, useEffect } from "react";
import "./Movies.css";

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
    if (!query) return;

    setLoading(true);
    setError(null);
    setMovies([]);

    fetch(`https://www.omdbapi.com/?apikey=85ececc1&s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          setError("Película no encontrada!");
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar las películas");
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          value={search}
          placeholder="batman, avengers, etc"
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Buscar
        </button>
      </form>

      {loading && <h2 className="loading">Cargando...</h2>}

      {error && <h2 className="error">{error}</h2>}

      {!loading && !error && movies.length > 0 && (
        <ul className="movies">
          {movies.map((movie) => (
            <li key={movie.imdbID} className="card">
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
      )}

      {!loading && !error && movies.length === 0 && query && (
        <h3 style={{ textAlign: "center", opacity: 0.7 }}>
          No se encontraron resultados
        </h3>
      )}
    </div>
  );
}

export default Movies;
