import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button } from '@mui/material'
import useStyles from '../../styles'
import { getMovie, setMovie } from '../../redux/slices/movieSlice'
const Movie = () => {
    const dispatch = useDispatch()
    const { movie } = useSelector((state) => state.movies)
    const navigate = useNavigate()
    const classes = useStyles()
    const { id } = useParams()

    useEffect(() => {

        id && dispatch(getMovie(id))
    }, [id])

    const handleBack = () => {
        dispatch(setMovie({}))
        navigate(-1)
    }
    if (movie && !Object.keys(movie).length) return <Typography variant="h5" component="h5" className={classes.title}>Loading...</Typography>
    return (
        <section className={classes.section}>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
                <Typography align="left" variant="h3" gutterBottom component="h2">
                    {movie.Title}
                </Typography>
                <Typography align="left" variant="h5" gutterBottom component="h5">
                    Year: {movie.Year}
                </Typography>
                <Typography align="left" variant="body1" gutterBottom component="p">
                    {movie.Plot}
                </Typography>
                <Typography align="left" variant="h6" gutterBottom component="h6">
                    Director:  {movie.Director}
                </Typography>
                <Button variant="contained" onClick={() => handleBack()}>Back</Button>
            </div>
        </section >
    )
}

export default Movie