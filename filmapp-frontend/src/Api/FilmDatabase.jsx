import React,{useEffect, useState} from "react";
import MovieCard from "../Components/MovieCard";
import movie from "../../../filmapp-backend/schemaTypes/movie";

const filmDatabase= () => {
  const [movies, setMovies] = useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);


useEffect(() => {
    const fetchData =async () => {
      const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=%3CREQUIRED%3E';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c68fd6996amsh6da0d7a3ede5ab6p16be71jsn3a48a3384c43',
          'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        if(!response.ok) {
          throw new Error ('Error! status: ${response.status}');
        }
        const result = await response.text();
        setMovies(result.movies || []);
      } catch (error) {
        console.error(error);
        setError("fail to fetch the f data")
      } finally {
        setLoading(false);
      }
    }
    fetchData() },[]);
      if(loading)return <p>Loading Please Wait...</p>;
      if (error) return <p>{error}</p>
      if(!movies.length) return <p>No Movies, sorry :/ </p>



    return (
      <article>

        {movie.map((movies)=>
        <section key={movie.fields}>
          <h2>{movie.title}</h2>
          <img src ={movie.cover_image} alt={'${movie.title} poster'} />
          <a href ={'https://www.imdb.com/title/${movie.imdb_id}'} target="_blank" rel="noopener noreferrer">View on IMDB</a>
        </section>
        
        
        )}
      </article>
    )
}

export default filmDatabase
