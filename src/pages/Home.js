import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { createAddMovie, loading } from '../redux/actions'



export default function Home() {

    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies();
    }

    const fetchMovies = () => {
        dispatch(loading())
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.Search || []);
                if (data.Error) {
                    alert(data.Error)
                }
            })
    }


    const handleChange = (e) => {
        setSearch(e.target.value)
    }



    return (
        <div>
            <h1>Home</h1>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Movies</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Search your favorite movies" value={search} required/>
                    <Button type="submit">Search</Button>
                </Form>
            </Container>
            <Row>
                {movies.map((movie) => {
                        return (
                            <Col xs='12' sm='6' md='4' lg='3' className="mb-4">
                                <MovieCard movie={movie}/>
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}
