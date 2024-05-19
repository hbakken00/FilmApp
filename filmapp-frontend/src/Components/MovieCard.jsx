import { Link } from "react-router-dom";
import client from "../Api/sanityClient";
import { useState, useEffect } from "react";
import movie from "../../../filmapp-backend/schemaTypes/movie";
import genre from "../../../filmapp-backend/schemaTypes/genre";


const fetchMovies = async () => { 
    const query = `
*[_type=='movie']{
"title": title,
"imdb_id": imdb_id,
"genres": genres[]->{
    name
},
"cover_image": cover_image } `; 
const movies = await client.fetch(query)
return movies; 
};

const MovieCard = () => {
    const [movies, setMovies] = useState ([]);

    useEffect (() => {
        fetchMovies().then(setMovies);
    }, []);
return ( 
    <article> 
        {movie.map(movie =>(
            <section key={movie.imdb_id}>
                <h2>{movie.title}</h2>
                <img src ={movie.cover_image} alt={`${movie.title} poster`}/>
                <p>Genres: {movie.genres.map((genre) => genre.name).join(',')}</p>
                <Link to =  {`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">View on IMDB</Link>
            </section>
        ))}
    </article> 
)
}

export default MovieCard;