import { call, fork, put, takeLatest } from "redux-saga/effects"
import { getMovie, getMovies, setMovie, setMovies } from "../slices/movieSlice"
import { movieInstance } from "../../service/API"
function* onLoadMoviesAsync({ payload }) {
    try {
        const fetchMovie = async (movieName) => {
            const res = await movieInstance.get(`&s=${movieName}`)
            return res
        }
        const result = yield call(fetchMovie, payload)
        if (result?.data /* && Object.keys(result.data).length */) {

            yield put(setMovies(result?.data))
        }
    } catch (err) {
        console.log('err', err)
    }
}

function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

function* getMovieDetailsAsync({ payload }) {
    try {
        const fetchMovie = async (movieId) => {
            const res = await movieInstance.get(`&i=${movieId}`)
            return res
        }
        const result = yield call(fetchMovie, payload)
        if (result?.data /* && Object.keys(result.data).length */) {

            yield put(setMovie(result?.data))
        }
    } catch (err) {
        console.log('err', err)
    }
}

function* getMovieDetails() {
    yield takeLatest(getMovie.type, getMovieDetailsAsync)
}

export const movieSagas = [fork(onLoadMovies), fork(getMovieDetails)]