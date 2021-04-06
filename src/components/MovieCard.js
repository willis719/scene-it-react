import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function MovieCard(props) {
    const { Title, Poster, Year, imdbID } = props.movie
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Year}
                    </Card.Text>
                    <Button variant="primary">Add</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
