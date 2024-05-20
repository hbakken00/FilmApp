import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const filmDatabase = async () => {
    const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=%3CREQUIRED%3E';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c68fd6996amsh6da0d7a3ede5ab6p16be71jsn3a48a3384c43',
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.movies || []; 
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movies = await filmDatabase();
                setMovies(movies);
            } catch (error) {
                setError("Failed to fetch the data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading, please wait...</p>;
    if (error) return <p>{error}</p>;
    if (!movies.length) return <p>No Movies, sorry :/</p>;

    return (
        <article>
            {movies.map(movie => (
                <section key={movie.imdb_id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.cover_image} alt={`${movie.title} poster`} />
                    <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
                    <Link to={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">View on IMDB</Link>
                </section>
            ))}
        </article>
    );
};

export default MovieCard;
