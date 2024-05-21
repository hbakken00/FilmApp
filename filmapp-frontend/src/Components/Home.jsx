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
            {user.favoriteMovies.map(
              (
                movie // mapper ut favoritter fra sanity
              ) => (
                <li key={movie._id}>{movie.title}</li>
              )
            )}

            {user.favoriteMovies.length === 0 && (
              <li>Ingen favorittfilmer tilgjengelige</li>
            )}
          </ul>
        </section>
        <section>
          <header>
            <h2>Foretrukne Sjangere</h2>
          </header>
          <ul>
            {user.preferredGenres.map(
              (
                genre // mapper ut foretrukne sjangere fra sanity og skriver dem ut
              ) => (
                <li key={genre._id}>{genre.name}</li>
              )
            )}
            {user.preferredGenres.length === 0 && (
              <li>Ingen foretrukne sjangere tilgjengelige</li>
            )}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default HomeComponent;
