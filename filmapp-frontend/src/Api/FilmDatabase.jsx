import React, {useState} from 'react';
import axios from 'axios'; 

const film_data = ({type, value, onChange})=> {
  const [query, setQuery] = useState ('');
  const [results, setResults] = useState ([]);
  const [loading, setLoading] = useState(false)
  
    const fetchData =async () => {
      setLoading(true)
        
        const options = {
          method: 'GET',
          url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
          headers: {
            'X-RapidAPI-Key': 'c68fd6996amsh6da0d7a3ede5ab6p16be71jsn3a48a3384c43',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            setResults (response.data.results)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
}};
export default film_data