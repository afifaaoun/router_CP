import React, {useState} from 'react'

const AddMovie = ({handelAdd}) => {

    let [posterURLL,setPosterURLture]=useState()
    let [namee,setName]=useState()
    let [ratingg,setRating]=useState()
    let [descriptionn,setDescription]=useState()
    let [trailerr,setTrailer]=useState()

const AddNewwMovie =()=>{
  handelAdd({
              id          : Date.now(),
              name        : namee,
              rating      : ratingg,
              description : descriptionn,
              posterURL   : posterURLL,
              trailer     : trailerr
            })
}

  return (
    <div>
        posterURL    :    <input type='text' onChange={(event)=>setPosterURLture(event.target.value)}/>
        name         :    <input type='text' onChange={(event)=>setName(event.target.value)}/> 
        rating       :    <input type='text' onChange={(event)=>setRating(event.target.value)}/> 
        description  :    <input type='text' onChange={(event)=>setDescription(event.target.value)}/> 
        trailer      :    <input type='text' onChange={(event)=>setTrailer(event.target.value)}/> 
        <button onClick={AddNewwMovie}>
          Add
          </button>
    </div>
  )
}

export default AddMovie

