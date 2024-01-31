//const Api_key = process.env.React_App_Api_key;
//  const Api_key ='8aaf5bc93c7be110bbeb534fa9340877'

// const requests = {
//         fechTranding:`/trending/all/week?api_key=${Api_key}&language=en-US`,
//         fechNetflixOrginals:`/discover/tv?api_key=${Api_key}&with_networks=213`,
//         fechTopRatedMovies:`/movie/top_rated?api_key=${Api_key}&language=en-US`,
//         fechActtionMovies:`/discover/movie?api_key=${Api_key}&with_geners=28`,
//         fechComedyMovies:`/discover/movie?api_key=${Api_key}&with_geners=35`,
//         fechHorrorMovies:`/discover/movie?api_key=${Api_key}&with_geners=27`,
//         fechRomanceMovies:`/discover/movie?api_key=${Api_key}&with_geners=10749`,
//         fechDocumentaries:`/discover/movie?api_key=${Api_key}&with_geners=99`,
//         fecthTvShow:`tv/popular?api_key=${Api_key}&language=en-US&page=1`,


// }
// export default requests
const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};

export default requests;