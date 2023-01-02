import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function MovieCard({element}) {
  return (
    <Card>
      <Card.Img variant="top" src={element.posterURL} style={{width:"90px"}}/>
      <Card.Body>
        <Card.Title>name : {element.name}</Card.Title>
        <Card.Text>rating :  {element.rating}</Card.Text>
        <Card.Text>description:  {element.description}</Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;