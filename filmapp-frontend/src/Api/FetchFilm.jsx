import React, { useEffect, useState } from 'react';

const HvaSkalJegSe = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '14536ac053msh92dbe7539474928p1a546fjsnc6640c6bf5f6',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
        });
        const result = await response.json();
        console.log(result); // logger resultatet til konsollen
        setMovies(result.results || []); // "resultater" array
      } catch (error) {
        console.error('Error ved fetching av filmer:', error);
        setError('kunne ikke laste inn.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Laster inn ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="movie-list">
      <h2>Hva skal jeg se?</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HvaSkalJegSe;
