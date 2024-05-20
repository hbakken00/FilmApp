// src/Api/GenreListFetch.jsx

import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard';



const FetchGenres  = () => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);
  

  useEffect(() => { // fetcher sjangere fra https://moviesdatabase.p.rapidapi.com/titles/utils/genres
    
    const fetchSjanger  = async () => {
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres'
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '14536ac053msh92dbe7539474928p1a546fjsnc6640c6bf5f6',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
        }

      try {
        console.log('Fetcher sjangere...'); // logger for å debugge 

        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const result = await response.json()

        console.log(result) // Logger resultatet av api kallet i konsoll for å sjekke strukturen og endepunktene


        setGenres(result.results); 
      } catch (error) {

        console.error('Error ved fetch av sjangere:', error.message);  // logger error 


      } finally {
        setLoading(false);  // stopper loading av kallet med finally 
      }
    }

    fetchSjanger(); // kjører fetchen
  }, [])

  if (loading) return <p>Laster inn ...</p>;
  if (error) return <p>{error}</p>;

  return (  // returnerer seksjon med klasse sjanger-liste
<section className="sjanger-list">
  
  <MovieCard movie={{ title: 'Sjangere', genres }} />

</section>
  )
}

export default FetchGenres ;

