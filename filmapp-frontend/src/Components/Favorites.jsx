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
            <p></p>
           </li></ul> 
            ))}


        </ul>
    )



}
export default Favorites;

