//importerer apiet fra filmdatabasen
import film_data from "../../filmapp-frontend/src/Api/FilmDatabase";

// filmer

export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'imdb_id',
      title: 'IMDB ID',
      type: 'string',
    },
    {
      name: 'plot',
      title: 'Plot',
      type: 'text',
    },
    {
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'genre' } }],
    },
    {
      name: 'cover_image',
      title: 'Cover Image',
      type: 'url',
    },
    //la inn dette under - forklaringen kommer senere når jeg vet om det funker eller ei
    {
      name:'imdbfilm',
      type: 'string',
      title:'IMDB',
      inputComponent: film_data
    }
  ],
};
