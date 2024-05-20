import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// MovieCard component som tar med movie som prop fra movecardfetch og skriver ut HTML fra mappet array i API kallet (i fetch)
const MovieCard = ({ movie }) => {
  return ( // kan skrive mer sematisk da tilslutt
      <section className="movie-card">
     
      <h3>{movie.title}</h3>
      
      {movie.cover_image && <img src={movie.cover_image} alt={movie.title} />}
     
      <p> Utgitt: {movie.releaseYear}</p>
     
      {movie.imdb_id && (<Link to={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">Sjekk ut på IMDB</Link>)}
    
     </section>
  );
};
// la inn proptypes for å unngå masse rød tekst errors 
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover_image: PropTypes.string,
    releaseYear: PropTypes.number,
    imdb_id: PropTypes.string
  }).isRequired
};

export default MovieCard;
