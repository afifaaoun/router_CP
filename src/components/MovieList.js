import React, { useState ,useEffect} from 'react'
import AddMovie from './AddMovie'
import MovieCard from './MovieCard'
import Movies from "./data"


const MovieList = () => {

let [Movie,setMovie]= useState(Movies)
let [show,setShow]= useState(false)

const [search,setSearch]=useState()

const handelAdd = (newMovie)=>{
  setMovie([...Movie,newMovie])
}

useEffect(()=>{
      // traja3 l tableau ll etat initial
  setMovie(Movies)
},[search])


const handelSearch = ()=> {

  let res = Movies.filter(el => el.name === search || el.rating === search); 
  setMovie(res)
  if(search === "" || search === undefined){
    // traja3 l tableau ll etat initial
    setMovie(Movies)
  }
}

const handelShow =()=>{
  setShow(!show)
}
  return (
    <div>
      <div className='buttsearch'>
        search movie: <input type='search' onChange={event=> setSearch(event.target.value)}/>
        <button type="button" class="btn btn-warning" onClick={handelSearch}>
          search 
        </button>
      </div>
        <div className='buttadd'>
        {/* button pour le hide et show */}
        <button type="button" class="btn btn-warning" onClick={handelShow}>
          {show ? 'hide' : 'Click to add a new movie'} 
        </button>
      </div>
      {show ? <AddMovie handelAdd={handelAdd}/>: null}
      <div className='fond'>
        {Movie.map(el => <MovieCard element ={el}/>)}
        {(Movie.length === 0)? <h1> sorry ! There is no matched search</h1>
        : null
        }
      </div>
    </div>
  )
}

export default MovieList;