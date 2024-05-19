import { Link } from "react-router-dom";
import FilmDatabase from "../Api/FilmDatabase";
import client from "../Api/sanityClient";
import movie from "../../../filmapp-backend/schemaTypes/movie";
import { useState, useEffect } from "react";


const MovieCard = async () => { 
    const query = `
*[_type=='movie']{
"title": title,
"imdb_id": imdb_id,
"genres": genres[]->{
    name
};`
const movies = await client.fetch(query)
return movies; 
};

const showMovies = () => {
    const [movies, setMovies] = useState ([])

    useEffect (() => {
        MovieCard().then(setMovies);
    }, []);
return (
    <article>
        {movies.map(movie =>(
            <section key={movie.imdb_id}>
                <h2>{movie.title}</h2>
                <p>Genres: {movie.genres.join(',')}</p>
            </section>
        ))}
    </article>
)
}
showMovies
export default MovieCard