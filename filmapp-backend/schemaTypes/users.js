
export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'favoriteMovies',
      title: 'Favorite Movies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'movie' } }],
    },
    {
      name: 'preferredGenres',
      title: 'Preferred Genres',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'genre' } }],
    },
  ],
};
