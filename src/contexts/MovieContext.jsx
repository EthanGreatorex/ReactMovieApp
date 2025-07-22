import { createContext, useState, useContext, useEffect } from "react";


const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);


    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    
    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieId));
    }

    const isFavorite  = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        selectedMovie,
        setSelectedMovie,
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
};