//API Fetching for sjanger.
import React, {useEffect, useState} from "react";
import MovieCard from "../Components/MovieCard";

const FetchGenres = () => {
    const [movieType,setMovieType] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => { 
        const getGenres = async () => { 
            const url = 'https://imdb188.p.rapidapi.com/api/v1/getGenres';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'c68fd6996amsh6da0d7a3ede5ab6p16be71jsn3a48a3384c43',
                    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                setMovieType(response.movieType.results || []);
                console.log(result);
                
            } catch (error) {
                setError("feil på sjanger siden", error);
            } finally {
                setLoading(false);
            }
        }
        getGenres();
        console.log(getGenres, "dette funker")    


    }, []);
    
    if (loading)return <p>Loading Please Wait </p>
    if (error) return <p>{error}</p>
    
    
    return (
        <section>
        <h2>All Genres:</h2>
        <ul>
        {movieType.map((genre, item)=> ( 
            <li key={item}>
                <MovieCard>
            <p>{genre}</p> </MovieCard></li>
            ))} 
            </ul>
            </section>
            )
}

export default FetchGenres;
