import React from "react"
import users from "../../../filmapp-backend/schemaTypes/brukere"

// login "velg bruker funksjon"
const VelgBruker = ({ onUserSelect }) => { 
    return (
      <section className="bruker-valg">
        <header>
          <h1>Hvem skal se idag?</h1>
          <p>Velg bruker</p>
        </header>
        
        {users.map(user => ( // mapper brukere fra users i Sanity og generer knapper for hver bruker. Onclick med 
            <li key={user.id}>
              <button onClick={() => onUserSelect(user)}>  
                {user.name}
              </button>
            </li>
    ))}



      </section>
    )  // ikke ferdig 
} 

export default VelgBruker