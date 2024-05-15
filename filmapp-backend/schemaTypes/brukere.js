export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      { name: 'username', type: 'string', title: 'Username' },
      { name: 'favorites', type: 'array', of: [{type: 'reference', to: {type: 'movie'}}], title: 'Favorite Movies' },
      { name: 'preferredGenres', type: 'array', of: [{type: 'reference', to: {type: 'genre'}}], title: 'Preferred Genres' }
    ]
  };