import React, { useEffect, useState } from 'react'

const HvaSkalJegSe = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error] = useState(null)

  useEffect(() => { // kaller imbd api fordi den andre var fucka til dette + den andre egner seg bedre til å mappe ut sjangre fant jeg ut!
    const fetchFilmer = async () => {
      const url = 'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies'
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '14536ac053msh92dbe7539474928p1a546fjsnc6640c6bf5f6',
          'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        },
      }

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const result = await response.json()

        console.log(result); // Logger resultatet av api kallet i konsoll for å sjekke strukturen og endepunktene
        setMovies(result.data.list || []); // endepunkt data.list
      } catch (error) {

        console.error('Error fetching movies:')


      } finally {
        setLoading(false);       // stopper loading av kallet med finally 
      }
    }

    fetchFilmer(); // kjører fetchen
  }, [])

  if (loading) return <p>Laster inn ...</p>;
  if (error) return <p>{error}</p>;

  return (  // returnerer HTML med liste over filmer til endepunktene 
    <section className="film-liste-hvaskaljegse">
      <h2>Hva skal jeg se?</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title.originalTitleText?.text}</h3>
            <img src={movie.title.primaryImage?.imageUrl} alt={movie.title.originalTitleText?.text} />
            <p>{movie.title.titleText?.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HvaSkalJegSe;
