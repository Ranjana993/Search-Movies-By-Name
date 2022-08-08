import React, { useState, useEffect } from 'react'
import "./SingleMovie.css"
import { NavLink, useParams } from "react-router-dom"
import { API } from '../../Context'

const SingleMovie = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState("")

    const getMovies = async (url) => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            if (data.Response === "True") {
                setMovie(data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const setTimerOut = setTimeout(() => {
            getMovies(`${API}&i=${id}`)
        }, 800);
        return () => clearTimeout(setTimerOut)
    }, [id])


    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='card_Single'>
            <div className="single_Movie">
                <img src={movie.Poster} alt="" />
            </div>
            <div className="content">
                <h2>{movie.Genre}</h2>
                <h4>{movie.Language}</h4>
                <h4>{movie.Country}</h4>
                <p>{movie.Released}</p>
                <p>{movie.Writer}</p>
                <h5>Rating <span>{movie.imdbRating}</span></h5>
                <NavLink to='/' className="btn">Go Back</NavLink>
            </div>
        </div>
    )
}

export default SingleMovie