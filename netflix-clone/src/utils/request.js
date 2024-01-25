const Api_key = process.env.React_App_Api_key;
// const Api_key ='8aaf5bc93c7be110bbeb534fa9340877'

const request = {
        fechTranding:`/trending/all/week?api_Key={Api_Key}&language=en-US`,
        fechNetflixOrginals:`/discover/tv?api_Key={Api_Key}&with_networks=213`,
        fechTopRatedMovies:`/movie/top_rated?api_Key={Api_Key}&language=en-US`,
        fechActtionMovies:`/discover/movie?api_Key={Api_Key}&with_gener=28`,
        fechComedyMovies:`/discover/movie?api_Key={Api_Key}&with_gener=35`,
        fechHorrorMovies:`/discover/movie?api_Key={Api_Key}&with_gener=27`,
        fechRomanceMovies:`/discover/movie?api_Key={Api_Key}&with_gener=10749`,
        fechDocumentaries:`/discover/movie?api_Key={Api_Key}&with_gener=99`,
        fecthTvShow:`tv/popular?api_key={Api_Key}&language=en-US&page=1`


}
export default request