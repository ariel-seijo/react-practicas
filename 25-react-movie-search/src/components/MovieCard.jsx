function MovieCard({ movie }) {
  return (
    <li className="card">
      <div>
        <h2>{movie.Title}</h2>
        <h4>{movie.Year}</h4>
        {movie.Poster !== "N/A" && (
          <img src={movie.Poster} alt={movie.Title} />
        )}
      </div>
    </li>
  );
}

export default MovieCard;