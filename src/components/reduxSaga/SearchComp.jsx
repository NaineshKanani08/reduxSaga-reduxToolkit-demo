import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from '../../styles'
import { getMovies, setMovieName } from '../../redux/slices/movieSlice'

const SearchComp = () => {
    // const [searchValue, setSearchValue] = useState('spider')
    const dispatch = useDispatch()
    const { moviesList: { Error: error }, movieName } = useSelector((state) => state.movies)

    const classes = useStyles()

    useEffect(() => {
        const getData = setTimeout(() => {
            dispatch(getMovies(movieName))
        }, 500)
        return () => clearTimeout(getData)
    }, [movieName])


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getMovies(movieName))
    }
    return (
        <>
            <h2 className={classes.title}>Movie Search App</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    sx={{ m: 1, width: "55ch" }}
                    type="text"
                    value={movieName}
                    onChange={(e) => dispatch(setMovieName(e.target.value))} />
                <Button className={classes.searchBtn} type='submit' variant="contained" disabled>Search</Button>
                {error && <p className={classes.error}>{error}</p>}
            </form>
        </>
    )
}

export default SearchComp