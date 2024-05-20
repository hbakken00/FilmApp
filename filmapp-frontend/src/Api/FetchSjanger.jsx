// src/Api/GenreListFetch.jsx

import React, { useEffect, useState, Link } from 'react'
import MovieCard from '../Components/MovieCard';
import client from "./sanityClient"



// Groq QUERY
const query = `*[_type == "genre"]{    
  _id,
  name
}`;


// funksjon for å fetche sjangere fra sanity client

const FetchSjanger  = () => {
    const [sjanger, setSjanger] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);
  

  useEffect(() => { 
    const fetchSjanger  = async () => {
 

      try {
        const sjangerData = await client.fetch(query)
        console.log(sjangerData)
        setSjanger(sjangerData); 
      } catch (error) {
        console.error('Error ved fetch av sjangere:', error.message);  // logger error 
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
    {sjanger.map((genre, index) => (
      <li key={index}>
        <Link to={`/sjanger/${genre._id}`}>{genre.name}</Link>
      </li>
    ))}
  </ul>
</section>
  )
}

export default FetchSjanger ;

