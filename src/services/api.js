import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
});

export default api;