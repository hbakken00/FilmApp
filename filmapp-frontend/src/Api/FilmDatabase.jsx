function film_data({}){
    const fetchData =async () => {
        
        const axios = require('axios');

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
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
}};
export default film_data