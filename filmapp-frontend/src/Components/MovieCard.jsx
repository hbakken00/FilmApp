import { Link } from "react-router-dom";

export default function MovieCard({movie}){
    
    if(!movie){
        return
    }
const {title, publish_year,movie_img} =movie;
const imdbImg = movie_img
? `https://covers.openlibrary.org/b/id/${movie.movie_img}-M.jpg`
: "null";
const imdb_id= `https://www.amazon.com/s?k=${encodeURIComponent(movie.title + " movie")}`;
    return (
        <article className="Filmvisning">
           <img id= "img" src={imdbImg}/>
           <h2> {title} </h2>
            <p id="publish"> ( {publish_year} )</p>
            <a id="IMDB"href={imdb_id}></a>
        
        </article>
    )
    
}