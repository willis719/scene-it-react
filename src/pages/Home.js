import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { setData, setLoading } from '../redux/actions'



export default function Home() {

    const [search, setSearch] = useState('')
    // const [movies, setMovies] = useState([])

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.loading)
    const movies = useSelector((state) => state.data)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies();
    }

    const fetchMovies = () => {
        dispatch(setLoading(true))
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${search}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(setLoading(false))
                // setMovies(data.Search || []);
                dispatch(setData(data.Search || []))
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
                    <Form.Control onChange={handleChange} type="text" placeholder="Search your favorite movies" value={search} required />
                    <Button style={{ marginTop: '2%', marginBottom: '4%', width: '25%' }} type="submit">Search</Button>
                </Form>
            </Container>
            {/* If loading put loading... if not display movies */}
            {loading ? (
                'Loading...'
            ) : (
                <Container fluid>
                    <Row>
                        {movies.map((movie) => {
                            return (
                                <Col style={{display: 'flex', justifyContent: 'center'}} xs='12' sm='6' md='4' lg='3' className="mb-4">
                                    <MovieCard movie={movie} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            )}
        </div>
    )
}
