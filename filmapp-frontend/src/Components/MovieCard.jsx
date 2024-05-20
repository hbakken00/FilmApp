import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

//api for moviecard
export const filmDatabase = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=%3CREQUIRED%3E',
        params: {q: query},
        headers: {
            'X-RapidAPI-Key': 'c68fd6996amsh6da0d7a3ede5ab6p16be71jsn3a48a3384c43',
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
    };

    

    try{
        const response = await axios.request(options);
        return response.data;
    } catch (error){
        console.error(error);
    }

};

//moviecard componente

const MovieCard = ({movie}) => {
    return(
        <section className="Movie-card">
            <h3>{movie}</h3>
            <a href={'https://www.imdb.com/title/${movie.imdb_id}'}target="_blank" rel="noopener noreferrer">Mer om filmen</a>
        </section>
    )
}

export default MovieCard
