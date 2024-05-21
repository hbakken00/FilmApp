
// fetcher titler fra https://moviesdatabase.p.rapidapi.com/titles/x/upcoming og skriver dem ut til MovieCard
import React, { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import client from './sanityClient';
import genre from '../../../filmapp-backend/schemaTypes/genre';

const MovieCardFetch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {/// fetcher titler fra https://moviesdatabase.p.rapidapi.com/titles/x/upcoming og skriver dem ut til MovieCard, må skrive en fetch til for sjanger 
    const fetchFilmer = async () => {
      const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '14536ac053msh92dbe7539474928p1a546fjsnc6640c6bf5f6',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        },
      };

      try {
        console.log('Henter filmer..'); // logger for å debugge 

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.ok) {
          if (Array.isArray(result.results)) {
            setMovies(result.results);
              // Under er en en for løkke / funksjon for å koble til sanity studio og apiet
            for (const movie of result.results) {
              const title = movie.originalTitleText?.text || 'Ukjent tittel';
              const imdb_id = movie.id || '';
              const plot = movie.plot || 'Ingen breskrivelse tilgjengelig';
              const genres = await hentGenres (movie.genres);
              const cover_image = movie.primaryImage?.url || '';

              console.log({
                title,
                imdb_id,
                plot,
                genres,
                cover_image,
              });

              if (title !== 'Ukjent tittel') {
                await client.create({
                  _type: 'movie',
                  title,
                  imdb_id,
                  plot,
                  genres,
                  cover_image: cover_image,
                });
              } else {
                console.warn('feil', movie, 'navn');
              }
            }
          }
        }

        console.log(result);// Logger resultatet av api kallet i konsoll for å sjekke strukturen og endepunktene

      } catch (error) {
        console.error('Error fetching movies:', error.message); // logger error 
        setError('Error fetching movies');
      } finally {
        setLoading(false);  // stopper loading av kallet med finally 
      }
    };

    fetchFilmer();
  }, []);
  const hentGenres = async (genreRef) => {
    try {
      //Prøvde å mappe ut sjangere men får at det er undefined.. 
      const sjangere = await Promise.all(
        genreRef.map(async (genreRef) => {
          const genreDoc = await client.getDocument(genreRef._ref);
          return genreDoc?.name || '';
        })
      );
      return sjangere;
    } catch (error) {
      console.error('Error fetching genres:', error.message);
      return [];}
    }
  if (loading) return <p>Laster inn vent litt...</p>;
  if (error) return <p>{error}</p>;

  return (   // returnerer film-liste-hvaskaljegse seksjon med MovieCard hvor hver film som blir presentert
    <section className="film-liste-hvaskaljegse">
      <h2>Hva skal jeg se?</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <MovieCard
              movie={{
                title: movie.originalTitleText?.text || 'Ukjent Tittel',
                cover_image: movie.primaryImage?.url || '',
                releaseYear: movie.releaseYear?.year || 'ingen utgivelses år',
                imdb_id: movie.id || '',
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieCardFetch;