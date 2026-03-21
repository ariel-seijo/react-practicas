import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

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
      .then((res) => res.json())
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
      <SearchForm
        search={search}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {loading && <h2 className="loading">Cargando...</h2>}
      {error && <h2 className="error">{error}</h2>}

      {!loading && !error && movies.length > 0 && (
        <MovieList movies={movies} />
      )}

      {!loading && !error && movies.length === 0 && query && (
        <h3>No se encontraron resultados 😢</h3>
      )}

      {!loading && !error && movies.length === 0 && !query && (
        <h3>Buscá una película 👀</h3>
      )}
    </div>
  );
}

export default Movies;