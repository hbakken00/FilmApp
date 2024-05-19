import React, {useState, useEffect} from 'react';
import MovieCard from '../Components/MovieCard';

const film_data= () => {
  const [data, setData] =useState([]);
  const [error, setError]= useState (null);
  const [loading, setLoading] = useState(true);

      useEffect(() => {
    const fetchData =async () => {
      try {       
        const axios = require('axios');
        const options = {
          method: 'GET',
          url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
          headers: {
            'X-RapidAPI-Key': 'c68fd6996amsh6da0d7a3ede5ab6p16be71jsn3a48a3384c43',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
        };

            const response = await axios.request(options);
            setData(response.data.results || []);
        } catch (error) {
            setError("Klarer ikke å hente data");
        } finally {
          setLoading(false);
        }
      MovieCard()
    };

    fetchData();
}, []);
    if (loading) return <p>Laster...</p>;
    if (error) return <p>{error}</p>;

return (
  <article>
    <h1>Film Data</h1>
    <ul> {data.map((item) =>(
      <li key={item.id}>{item.title}</li>
       
    ))}</ul>
  </article>
)
 };

export default film_data