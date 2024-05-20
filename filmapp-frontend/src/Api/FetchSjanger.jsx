// src/Api/GenreListFetch.jsx

import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard';
import client from "./sanityClient"



// Groq QUERY
const query = `*[_type == "genre"]|order(name){    
  _id,
  name
}`;


// funksjon for å fetche sjangere fra sanity client

const FetchSjanger  = () => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);
  

  useEffect(() => { 
    const fetchSjanger  = async () => {
 

      try {
        const sjangerData = await client.fetch(query)
        console.log(sjangerData)
        setGenres(sjangerData); 
      } catch (error) {

        console.error('Error ved fetch av sjangere:', error.message);  // logger error 


      } finally {
        setLoading(false);  // stopper loading av kallet med finally 
      }
    }

    fetchSjanger() // kjører fetchen
  }, [])

  if (loading) return <p>Laster inn ...</p>;
  if (error) return <p>{error}</p>

  return (  // returnerer seksjon med klasse sjanger-liste
  <section className="genre-list">
  <h2>Sjangere</h2>
  <ul>
    {genres.map((genre, index) => (
      <li key={index}>
        <MovieCard movie={{ title: genre.name }} />
      </li>
    ))}
  </ul>
</section>
  )
}

export default FetchSjanger ;

