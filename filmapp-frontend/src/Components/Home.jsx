import React, { useEffect, useState } from 'react'

const HomeComponent = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const selectedUser = localStorage.getItem('selectedUser')
    if (selectedUser) {
      setUser(JSON.parse(selectedUser))
    }
  }, [] )

  if (!user) {
    return <p>Laster inn ..</p>
  }

  return (
    <main>
      <header>
        <h1>Velkommen, {user.name}!</h1>
       
      </header>

      <article>
        <section>
          <header>
            <h2>Favorittfilmer</h2>
          </header>
          <ul>
            {user.favoriteMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </section>

        <section>
          <header>
            <h2>Foretrukne Sjangere</h2>
          </header>
          <ul>
            {user.preferredGenres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

export default HomeComponent
