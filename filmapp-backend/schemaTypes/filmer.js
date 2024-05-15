export default { 
    name: "movie",
    title: "Movie",
    type: "document",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'imdbId', type: 'string', title: 'IMDB ID' },
        { name: 'genres', type: 'array', of: [{type: 'reference', to: {type: 'genre'}}], title: 'Genres' }
    ]
}