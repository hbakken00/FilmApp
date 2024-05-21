// src/Pages/GenrePage.jsx

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import client from "../Api/sanityClient"
import MovieCard from './MovieCard';

// Groq QUERY query for å fetche sjanger fra sanity
const query = `*[_type == "genre" && _id == $genreId][0]{
  _id,
  name,
  "movies": *[_type == "movie" && references(^._id)]{
    _id,
    title,
    description,
    "posterUrl": poster.asset->url,
    imdb_id,
    cover_image,
    releaseYear
  }
}`

;

const GenrePage = () => {
  const { genreId } = useParams();
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const genreData = await client.fetch(query, { genreId })
        setGenre(genreData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchGenre();
  }, [genreId])

  if (loading) return <p>Laster inn ...</p>
  if (error) return <p>{error}</p>
  if (!genre) return <p>Ingen data funnet</p>



  return ( // legger inn movieCard som displayer den akutelle filmen
    <section className="genre-movies">
      <h2>{genre.name}</h2>
      <p>{genre.movies.length} Filmer er lagret </p>
      <ul>
        {genre.movies.map((movie) => (
          <li key={movie._id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GenrePage
