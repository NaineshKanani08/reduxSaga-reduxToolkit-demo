import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { Accept: "application/json", "Content-type": "application/json" },
});
export const movieInstance = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&`,
  // headers: { Accept: "application/json", "Content-type": "application/json" },
});

export const taskApi = axios.create({
  baseURL: `http://localhost:5000/`,
  // headers: { Accept: "application/json", "Content-type": "application/json" },
});



export default API;
