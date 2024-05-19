import React from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";

// login "velg bruker" funksjon
const VelgBruker = ({ onUserSelect, users }) => { // parameter som sendes med til App.jsx
  console.log("VelgBruker rendered"); // Debug output av VelgBruker
  console.log("Users:", users); // Debug output for å sjekke users
  return (
    <section className="bruker-valg">
      <header>
        <h1>Hvem skal se idag?</h1>
        <p>Velg bruker</p>
      </header>
      <nav>
        <ul className="bruker-knapper">
          {users.map(user => (
            <li key={user._id}>
              <button onClick={() => onUserSelect(user)}>{user.name}</button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

VelgBruker.propTypes = {// måtte legge inn denne fordi proptype error i konsollen 
  onUserSelect: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default VelgBruker;

// har forsøkt å gjøre dette så semantisk som mulig med section for innholdskropp, header, nav og ul <li>



