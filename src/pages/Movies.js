import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'




export default function Movies() {
    const movies = useSelector((state) => state)
    return (
        <>
        <div>
            <Home />
        </div>
        <div>
            {movies.map((movie) => {
                return(
                    <p>{movie.title}</p>
                )
            })}
        </div>
        </>
    )
}
