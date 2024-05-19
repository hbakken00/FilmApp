import { Link } from "react-router-dom";
import FilmDatabase from "../Api/FilmDatabase";
import client from "../Api/sanityClient";
import movie from "../../../filmapp-backend/schemaTypes/movie";


const MovieCard = (movie) =>{
    client.create({
        _type: 'movie',
        title: movie.title,
        imdbID: movie.id })

    return (
        <FilmDatabase>
        </FilmDatabase>
    )
    }

export default MovieCard