import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;