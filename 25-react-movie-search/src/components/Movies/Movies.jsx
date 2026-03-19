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

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search.trim());
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=85ececc1&s=${query}`)
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
  }, [query]);

  if (loading) return <h2>Cargando peliculas...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          placeholder="batman, avengers, etc"
          onChange={handleSearch}
        ></input>
        <button type="submit">Buscar</button>
      </form>
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
