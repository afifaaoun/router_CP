import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

    const Details = ({movies}) => {
    const ID = useParams()
    // console.log(ID)
    
    // le find est pour le recherche de l'id selectionné
let result= movies.find(el=> el.id === Number(ID.id) )
// console.log(movies)
// console.log(result)
const navigate= useNavigate();
  return (
    <div>
        <h3>{result.name}</h3>

        <iframe src={result.trailer} title="YouTube video player" frameborder="0" allow="accelerometer"  autoplay clipboard-write encrypted-media gyroscope picture-in-picture > </iframe>,
        <h5> brief description : </h5>
        <h5> {result.description}</h5>
        <button type="button" class="btn btn-warning"onClick={()=> navigate('/')}> back home</button>
    </div>
  )
}

export default Details