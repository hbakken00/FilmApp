function film_data({}){
    const fetchData =async () => {
        
            const fetch = require('node-fetch');

            const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': 'c68fd6996amsh6da0d7a3ede5ab6p16be71jsn3a48a3384c43',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }}
            
            
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        

}};
export default film_data