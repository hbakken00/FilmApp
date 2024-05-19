import { Link } from "react-router-dom";
import FilmDatabase from "../Api/FilmDatabase";
import client from "../Api/sanityClient";
import movie from "../../../filmapp-backend/schemaTypes/movie";


const MovieCard = {
_type:'movie',
title: movie.title,
imdbId: movie.fields,
genre: {
    _type:'reference', 
    _ref: movie.genreId
}};

client.create(MovieCard)
.then(res => console.log('film lagret med id ${res.-id}'))
.catch(error => console.error('Error saving movie'))

export default MovieCard