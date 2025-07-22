import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieInfo.css";

function MovieView() {
  const { isFavorite, addToFavorites, removeFromFavorites, selectedMovie } =
    useMovieContext();

  if (!selectedMovie) {
    return <div className="movie-view">No movie selected</div>;
  }

  const favorite = isFavorite(selectedMovie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(selectedMovie.id);
    } else {
      addToFavorites(selectedMovie);
    }
  }

  return (
    <div className="movie-info-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
        />
      </div>
      <div className="movie-description">
        <h2>{selectedMovie.title}</h2>
        <p>
          <strong>Release Date:</strong>{" "}
          {selectedMovie.release_date?.split("-")[0]}
        </p>
        <p>
          <strong>Rating:</strong> {selectedMovie.vote_average.toFixed(1)} (
          {selectedMovie.vote_count} ratings)
        </p>
        <p>
          <strong>Overview:</strong> {selectedMovie.overview}
        </p>
        {favorite ? (
          <button className="favorited" onClick={onFavoriteClick}>Added To Your Favorites</button>
        ) : (
          <button onClick={onFavoriteClick}>Add To Your Favorites</button>
        )}
      </div>
    </div>
  );
}


export default MovieView;
