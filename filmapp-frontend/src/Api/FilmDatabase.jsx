import MovieCard from '../Components/MovieCard';

const filmData= () => {

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
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()

}

export default filmData
