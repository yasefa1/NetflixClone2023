// import axios from "axios"
// const instance = axios.create(
//     {
//          baseUrl:`https://api.themoviedb.org/3`
//     }
// )
// export default instance;
// https://api.themoviedb.org/3/discover/tv?api_key=8aaf5bc93c7be110bbeb534fa9340877&with_networks=213

//https://api.themoviedb.org/3/discover/tv?api_key=8aaf5bc93c7be110bbeb534fa9340877&with_networks=213


import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;