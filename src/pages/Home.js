import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { createAddMovie, loading } from '../redux/actions'



export default function Home() {

    const [movie, setMovie] = useState('')

    const dispatch = useDispatch()

    const fetchMovies = (e) => {
        e.preventDefault()
        dispatch(loading())
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${movie}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(createAddMovie(data.Search))
            })
    }


    const handleChange = (e) => {
        setMovie(e.target.value)
    }



    return (
        <div>
            <h1>Home</h1>
            <Container>
                <Form onSubmit={fetchMovies}>
                    <Form.Label>Movies</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Search your favorite movie" value={movie} />
                    <Button type="submit">Submit</Button>
                </Form>
                <div>

                </div>
            </Container>
        </div>
    )
}
