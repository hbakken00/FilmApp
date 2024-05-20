// src/Api/GenreListFetch.jsx

import React, { useEffect, useState} from 'react'
import MovieCard from '../Components/MovieCard';
import client from "./sanityClient"
import { Link } from 'react-router-dom';




// Groq QUERY
const query = `*[_type == "genre"]|order(name){    
  _id,
  name,
  "movieCount": count(*[_type == "movie" && references(^._id)])
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

        setSjanger(sjangerData); 
        console.log(sjangerData)
        setLoading(false);

      } catch (error) {
        console.error('Error ved fetch av sjangere:', error.message);  // logger error 
        setLoading(false)
      }
    }

    fetchSjanger() // kjører fetchen
  }, [])

  if (error) return <p>{error}</p>

  return (  // returnerer seksjon med klasse sjanger-liste
  <section className="genre-list">
  <h2>Genres</h2>
  <ul>
    {sjanger.map((genre) => (
      <li key={genre._id}>
        <Link to={`/sjanger/${genre._id}`}>{genre.name} ({genre.movieCount})</Link>
      </li>
    ))}
  </ul>
</section>
  )
}

export default FetchSjanger ;

