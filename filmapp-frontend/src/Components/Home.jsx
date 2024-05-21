import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const HomeComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const selectedUser = localStorage.getItem("selectedUser");
    if (selectedUser) {
      setUser(JSON.parse(selectedUser));
    }
  }, []);

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
            {user.favoriteMovies?.map((movie) => (
              <li key={movie._id}>
                <MovieCard movie={movie} />
              </li>
            ))}
            {!(user.favoriteMovies?.length) && <li>Ingen favorittfilmer tilgjengelige</li>}
          </ul>
        </section>

        <section>
          <header>
            <h2>Foretrukne Sjangere</h2>
          </header>
          <ul>
            {user.preferredGenres?.map((genre) => (
              <li key={genre._id}>{genre.name}</li>
            ))}
            {!(user.preferredGenres?.length) && <li>Ingen foretrukne sjangere tilgjengelige</li>}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default HomeComponent;
