import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
    /*Esta inicialmente apuntaba a JsonServer, ahora a la API */
});

// Add a request interceptor
api.interceptors.request.use(function(config) {

    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token; //aca pido el token (en cada request)       
    }
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

export { api };