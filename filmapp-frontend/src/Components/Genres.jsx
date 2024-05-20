//API Fetching for sjanger.

import { useEffect, useState } from "react";


const Genres = () => {
    const [movieType,setMovieType] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => { 
    const fetchGenres = async () => { 
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
 fetchGenres();
}, []);

    if (loading)return <p>Loading Please Wait </p>
    if (error) return <p>{error}</p>


return (
    <section>
        <h2>All Genres:</h2>
        <ul>
            <li>
                {movieType.map((genre, item)=> (
                    <li key={item}>
                        <p>{genre}</p> </li>
                )
                )}
            </li>
        </ul>
    </section>
)
}

export default Genres()
