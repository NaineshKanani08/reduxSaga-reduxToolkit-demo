import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieName: "spider",
        moviesList: [],
        movie: {}
    },
    reducers: {
        getMovies(name) {
            return name
        },
        setMovies: (state, action) => {
            state.moviesList = action.payload
        },
        getMovie(name) {
            return name
        },
        setMovie: (state, action) => {
            state.movie = action.payload
        },
        setMovieName: (state, action) => {
            state.movieName = action.payload
        }
    }
})
export const { getMovies, setMovies, getMovie, setMovie, setMovieName } = movieSlice.actions
export default movieSlice.reducer