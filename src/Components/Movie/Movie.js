import React from 'react'
import "./Movie.css"
import { NavLink } from "react-router-dom"
import { useGlobalContext } from '../../Context'

const Movie = () => {
    const { movie, loading } = useGlobalContext()

    if (loading) {
        return (
            <div className='loading'>
                <h2>Loading.....</h2>
            </div>
        )
    }
    return (
        <div className='Movies'>
            <div className="Cards">
                {
                    movie.map((item) => {
                        const { Title, Poster, imdbID } = item
                        const movieName = Title.substring(0, 17)

                        return <NavLink to={`movie/${imdbID}`} key={item.imdbID} >
                            <div className="card">
                                <h2>{movieName.length >= 17 ? `${movieName}...` : movieName}</h2>
                                <img src={Poster} alt="" />
                            </div>
                        </NavLink>
                    })
                }
            </div>
        </div>
    )
}

export default Movie