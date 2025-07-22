
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { Link } from 'react-router-dom';

// Where movie is an object containing movie details
function MovieCard({movie}) {

    const {isFavorite, addToFavorites, removeFromFavorites, setSelectedMovie} = useMovieContext();

    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    function onMovieClick() {
        setSelectedMovie(movie);
    }
    
    return(
        <Link to="/MovieView">
            <div className="movie-card" onClick={onMovieClick}>
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </Link>
    )
}


export default MovieCard;