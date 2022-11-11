import React from 'react'
import SearchComp from './SearchComp'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Typography, CardMedia, Grid, CardContent } from '@mui/material'
const MovieList = () => {
    const { moviesList } = useSelector((state) => state.movies)
    return (
        <>
            <SearchComp />
            <Grid sx={{ flexGrow: 1 }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={3}>
                        {moviesList?.Search && moviesList?.Search?.length && moviesList?.Search.map((movie, index) => {
                            return (
                                <Grid key={index} item>
                                    <Card sx={{ maxWidth: "350" }}>
                                        <Link to={`/redux-saga-example/movie/${movie.imdbID}`}>
                                            <CardMedia
                                                component="img"
                                                height="350"
                                                image={movie.Poster}
                                                alt={movie.Title}
                                            /
                                            >
                                            <CardContent>
                                                <Typography variant='body2' color="text.primary">
                                                    {movie.Title}
                                                </Typography>
                                                <Typography variant='body2' color="text.primary">
                                                    ({movie.Year})
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default MovieList