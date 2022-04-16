import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4000",
    /*Esta inicialmente apuntaba a JsonServer, ahora a la API */
});