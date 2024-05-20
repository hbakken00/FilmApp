import React from "react";

const Favorites = ({favoriteMovie}) => {
    if (!favoriteMovie || favoriteMovie.length === 0) {
        return <p>Ingen favoritter desverre</p>
    }
    return (
        <ul>
            {favoriteMovie.map((favFilm, filmIndex) =>(
             <ul>
            <li key= {filmIndex}>
            <h3>{favFilm.filmIndex}</h3>
            <img><p>Her må vi fetche apiet til filmene for å vise bilder, sjanger og shit og vet ikke hvordan vi løser det enda</p></img> 
            <p></p>
           </li></ul> 
            ))}


        </ul>
    )



}
export default Favorites;

