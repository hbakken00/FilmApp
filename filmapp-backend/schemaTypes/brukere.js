export default {
    name: 'Svante',
    title: 'User',
    type: 'document',
    fields: [
      { 
      name: 'Svante', 
      type: 'string', 
      title: 'Username' },
    { 
      name: 'favorites', 
      type: 'array', 
      of: [{type: 'reference', 
      to: {type: 'movie'}}], 
      title: 'Favorite Movies' 
    },
      { 
        name: 'preferredGenres', 
        type: 'array', 
        of: [{type: 'reference', 
        to: {type: 'genre'}}], 
        title: 'Preferred Genres' }
    ]
  }