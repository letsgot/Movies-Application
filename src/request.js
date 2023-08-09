
export const tmdbDetails = [

    { id: 1, name: 'Netflix Originals', url: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213` },
    { id: 2, name: 'Trending Now', url: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}` },
    { id: 3, name: 'Top Rated', url: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}` },
    { id: 4, name: 'Upcoming Movies', url: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}` },
    { id: 6, name: 'Action Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28` },
    { id: 7, name: 'Animation Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16` },
    { id: 8, name: 'Horror Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27` },
    { id: 9, name: 'Romance Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749` },
    { id: 10, name: 'TV Shows', url: `/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}` },
]