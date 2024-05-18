import React from "react"
import users from "../../../filmapp-backend/schemaTypes/brukere"
import "../styles/main.scss"

// login "velg bruker" funksjon
const VelgBruker = ({ onUserSelect }) => {  // parameter som sendes med til App.jsx

  console.log("VelgBruker component rendered"); // Debug output
  console.log("Users:", users); // Debug output to check users data
    return (
     
     <section className="bruker-valg">
        <header>
          <h1>Hvem skal se idag?</h1>
          <p>Velg bruker</p>
        </header>
        <nav>
         <ul className="bruker-knapper">  
        {users.map(user => ( // mapper brukere fra users.js arrayen i Sanity og generer knapper for hver bruker. Onclick med 
            <li key={user.id}>
              <button onClick={() => onUserSelect(user)}>{user.name}</button>
           </li>
         ))}
         </ul> 
        </nav>
      </section>
    )  
} 

export default VelgBruker

// har forsøkt å gjøre dette så semantisk som mulig med section for innholdskropp, header, nav og ul <li> 