import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

export default function Watchlist() {

    const movies = useSelector((state) => {return state.movies})

    return (
        <Container fluid>
            <h2>My Movies</h2>
            <div>... Movies Here...</div>

            <Row style={{marginTop: '3%'}}>
                {movies.map((movie) => {
                        return (
                            <Col style={{display: 'flex', justifyContent: 'center'}} xs='12' sm='6' md='4' lg='3' className="mb-4">
                                <MovieCard movie={movie}/>
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )
}
