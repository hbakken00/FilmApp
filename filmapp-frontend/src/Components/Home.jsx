import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import client from "../Api/sanityClient"
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const [user, setUser] = useState(null);
  const [additionalMovies, setAdditionalMovies] = useState([])


  useEffect(() => {

    const selectedUser = localStorage.getItem("selectedUser");
     // henter ut brukerne fra local storae
    if (selectedUser) {
      setUser(JSON.parse(selectedUser));
    }
  }, []);

  useEffect(() => {
    const fetchAdditionalMovies = async () => {
      if (user && user.preferredGenres) {
        try {
          const genresIds = user.preferredGenres.map((genre) => genre._ref)
          const additionalMoviesData = await client.fetch( // la groq query her rett i fetcen

          `*[_type == "user" && _id != $userId && count(preferredGenres[_ref in $genresIds]) > 0]{
            favoriteMovies[]-> {
              _id,
              title,
              description,
              "posterUrl": poster.asset->url,
              imdb_id,
              cover_image,
              releaseYear,
              "genres": genres[]->name
            }
          }`,
            { userId: user._id, genresIds }
          )
          setAdditionalMovies(additionalMoviesData.flatMap(user => user.favoriteMovies))
        } catch (error) {
          console.error('error ved fetching av sammenligning av favoritter:', error.message)
        }
      }
    }

    fetchAdditionalMovies()
  }, [user])

  if (!user) {
    return <p>Laster inn ..</p>;
  }

  return (
    <main className="main-innhold">
      <header>
        <h1>Velkommen, {user.name}!</h1>
      </header>
      <article>
        <section>
          <header>
            <h2>Favorittfilmer</h2>
          </header>
          <ul>
            {user.favoriteMovies?.map((movie) => ( // map av favoritt filmer i sanity of skriver ut til moviecard
              <li key={movie._id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          
          </ul>
        </section>

        <section>
          <header>
            <h2>Foretrukne Sjangere</h2>
          </header>
          <ul>
            {user.preferredGenres?.map((genre) => ( // map av foretrukne sjangerliste i sanity og skriver ut (for valgt bruker)
              <li key={genre}>{genre.name}</li>
            )) || <li> feil i map av brukernes sjangere i sanity</li>}
            
          </ul>
        </section>
          
        <section>
          <header>
            <h2>Andre brukeres favorittfilmer:</h2>
          </header>
          <ul>
            {additionalMovies.length > 0 ? (
              additionalMovies.map((movie) => (
                <li key={`additional-movie-${movie.title}`}>
                  <MovieCard movie={movie} />
                </li>
              ))
            ) : (
              <li>Feil i map av fetch for foretrukne sjangere og favoritter fra sanity... </li> // har problemer med key prop 
            )}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default HomeComponent;
