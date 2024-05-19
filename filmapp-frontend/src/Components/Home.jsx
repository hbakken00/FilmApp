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
  // foreløpig html struktur som mapper og skriver ut .. 
  // har ikke style enda og den mapper bare fra bruker,
  // js men skal egentlig mappe fra egen array fil i sanity som vi skal pushe API kallene til
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
            {user.favoriteMovies?.length > 0 ? (    // for å sjekke om arrayene er definerte og ikke er tomme 
              user.favoriteMovies.map((movie, index) => (
                <li key={index}>{movie.title}</li>
              ))
            ) : (
              <li>Ingen favorittfilmer tilgjengelige</li>
            )}
          </ul>
        </section>

        <section>
          <header>
            <h2>Foretrukne Sjangere</h2>
          </header>
          <ul>
            {user.preferredGenres?.length > 0 ? (
              user.preferredGenres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))
            ) : (
              <li>Ingen foretrukne sjangere tilgjengelige</li>
            )}
          </ul>
        </section>
      </article>
    </main>
  );
}

export default HomeComponent
