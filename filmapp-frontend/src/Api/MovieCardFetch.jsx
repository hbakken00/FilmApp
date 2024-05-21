
// fetcher titler fra https://moviesdatabase.p.rapidapi.com/titles/x/upcoming og skriver dem ut til MovieCard
import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard';
import client from './sanityClient';


const MovieCardFetch = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error] = useState(null)

  useEffect(() => { //// fetcher titler fra https://moviesdatabase.p.rapidapi.com/titles/x/upcoming og skriver dem ut til MovieCard, må skrive en fetch til for sjanger 
    
    const fetchFilmer = async () => {
      const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '14536ac053msh92dbe7539474928p1a546fjsnc6640c6bf5f6',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      }

      try {
        console.log('Fetching movies...'); // logger for å debugge 

        const response = await fetch(url, options)
        const result = await response.json()

        if (response.ok) {
          if (Array.isArray(result.results)){
            setMovies(result.results); 


            for(const movie of result.results) {
              await client.create({
                _type: 'movie',
                title: movie.title,
                imdb_id: movie.imdb_id,
                plot: movie.plot,
                genres: movie.genres,
              });
            }

          }
          }


        console.log(result) // Logger resultatet av api kallet i konsoll for å sjekke strukturen og endepunktene


      } catch (error) {

        console.error('Error fetching movies:', error.message);  // logger error 


      } finally {
        setLoading(false);  // stopper loading av kallet med finally 
      }
    }

    

    fetchFilmer(); // kjører fetchen
  }, [])



  if (loading) return <p>Laster inn ...</p>;
  if (error) return <p>{error}</p>;

  return (  // returnerer film-liste-hvaskaljegse seksjon med MovieCard hvor hver film som blir presentert
    <section className="film-liste-hvaskaljegse">
    <h2>Hva skal jeg se?</h2>
    <ul>
      {movies.map((movie, index) => ( // mapper arrayen i api kallet og skriver ut til MovieCard
        
        <li key={index}>
          <MovieCard
            movie={{
              title: movie.originalTitleText?.text || 'Unknown title',
              cover_image: movie.primaryImage?.url || '',
              releaseYear: movie.releaseYear?.year || 'No release year available',
              imdb_id: movie.id || ''
            }}
          />
          </li>

      ))}
    </ul>
  </section>
  )
}

export default MovieCardFetch;
