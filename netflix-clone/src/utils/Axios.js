import axios from "axios"
const Instance = axios.create(
    {
         baseUrl:"https://api.themoviedb.org/3"
    }
)
//  https://api.themoviedb.org/3/discover/tv?api_key=8aaf5bc93c7be110bbeb534fa9340877&with_networks=230