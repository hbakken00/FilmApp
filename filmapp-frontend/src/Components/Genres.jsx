// src/Pages/GenrePage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../Api/sanityClient';

// Groq QUERY to fetch a genre and its movies
const genreQuery = `*[_type == "genre" && _id == $genreId][0]{
  _id,
  name,
  "movies": *[_type == "movie" && references(^._id)]{
    _id,
    title,
    description,
    "posterUrl": poster.asset->url
  }
}`;

const GenrePage = () => {
  const { genreId } = useParams();
  const [genre, setGenre] = useState(null);


  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const genreData = await client.fetch(genreQuery, { genreId });
        setGenre(genreData);
  
      } catch (error) {
        console.error('Error fetching genre:', error.message);
   
      }
    }

    fetchGenre()
  }, [genreId])


  return (
    <section className="genre-page">
      <h2>{genre.name}</h2>
      <p>{genre.movies.length} movies</p>
      <ul>
        {genre.movies.map((movie) => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <img src={movie.posterUrl} alt={movie.title} />
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GenrePage;
