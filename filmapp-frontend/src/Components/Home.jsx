import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

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
    
<main className="main-innhold">
      <header>
        <h1>Velkommen, {user.name}!</h1>
      </header>

      <article>
        <section>
          <header>
            <h2>Favorittiflmer</h2>
          </header>
          <ul>
            {user.movie?.length > 0 ? (    // for å sjekke om arrayene er definerte og ikke er tomme 
              user.movie.map((movie, index) => (
                <li key={index}><MovieCard movie={movie}/></li>
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
            {user.preferredGenres?.length > 0 ? ( // for å sjekke om arrayene er definerte og ikke er tomme 
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
