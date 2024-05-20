// src/Components/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";

// MovieCard component
const MovieCard = ({ movie }) => {
  return (
    <section className="movie-card">
      <h3>{movie.title}</h3>
      <img src={movie.cover_image} alt={movie.title} />
      <p>{movie.plot}</p>
      <Link to={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">View Details on IMDB</Link>
    </section>
  );
}

export default MovieCard;