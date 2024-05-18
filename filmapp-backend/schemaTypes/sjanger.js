export default {
  name: 'movie',
  type: 'document',
  title: 'Movie',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'imdb_id', type: 'string', title: 'IMDB ID' },
    { name: 'plot', type: 'text', title: 'Plot' },
    { name: 'genres', type: 'array', title: 'Genres', of: [{ type: 'reference', to: { type: 'genre' } }] }
  ]
};
