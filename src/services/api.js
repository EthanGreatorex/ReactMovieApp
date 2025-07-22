
const API_KEY = "5cff2d0924eeb3f6d5090d0471d4ce18";
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
    } else {
        const data = await response.json();
        return data.results;
    }
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    if (!response.ok) {
        throw new Error('Failed to search movies');
    } else {
        const data = await response.json();
        return data.results;
    }
}