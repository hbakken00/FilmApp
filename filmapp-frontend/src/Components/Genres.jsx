// src/Pages/GenrePage.jsx

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import client from "../Api/sanityClient"
import MovieCard from './MovieCard';

// Groq QUERY for fetching movies of a genre
const query = `*[_type == "movie" && references($genreId)]{
  _id,
  title,
  imdbUrl
}`;

const GenrePage = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([])
  const [genreName, setGenreName] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const sjangerData = await client.fetch(`*[_type == "genre" && _id == $genreId]{name}`, { genreId });
        if (sjangerData.length > 0) {
          setGenreName(sjangerData[0].name)
        }

        const filmData = await client.fetch(query, { genreId })
        setMovies(filmData);
      } catch (error) {
        console.error('Error fetching movies:', error.message)
      }
    }

    fetchMovies();
  }, [genreId])



  return (
    <section className="genre-movies">
      <h2>{genreName}</h2>
      <p>{movies.length} Filmer er lagret </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GenrePage
