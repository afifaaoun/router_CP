import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate} from 'react-router-dom';

function MovieCard({element}) {
  const navigate=useNavigate()

  return (
    <Card  style={{ width: '18rem' , boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)"}}  >
        <Card.Img className='image'  src={element.posterURL}/>
      <Card.Body >
      
        <Card.Title className='cardtitle'> name : {element.name}</Card.Title>
        <Card.Text> rating :  {element.rating}</Card.Text>
        <button type="button" className='btn' class="btn btn-warning"  onClick={()=> navigate(`/details/${element.id}`)}>show more</button>

      </Card.Body>
    </Card>

  );
}

export default MovieCard;