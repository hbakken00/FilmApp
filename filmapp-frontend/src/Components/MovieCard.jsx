import { Link } from "react-router-dom";
import film_data from "../Api/FilmDatabase";


export default function MovieCard({movie}){
    
    if(!movie){
        return;
    }
const {title, publish_year,movie_img} =movie;
const imdbImg = movie_img

//her mangler jeg linkene til imdb apiet. for å få til bilde og koblingen til imdb så fort bruker clicker på film. 
? `https://covers.openlibrary.org/b/id/${movie.movie_img}-M.jpg`
: "null";
const imdb_id= `https://www.amazon.com/s?k=${encodeURIComponent(movie.title + " movie")}`;
    return (
        <article className="movie-card">
            <a id="IMDB"href={imdb_id}>
           <img id= "img" src={imdbImg}/>
           <h2> {title} </h2>
            <p id="publish"> ( {publish_year} )</p>
            </a>
        
        </article>
    )
    
}