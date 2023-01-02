import React, { useState ,useEffect} from 'react'
import AddMovie from './AddMovie'
import MovieCard from './MovieCard'

const MovieList = () => {
let Movies = [
    {id : 1 , posterURL :"https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/05/26130754/Rt21-UP-Featured1.jpg",name : "up", description :"disney", rating : "2 stars", },
    {id : 2 , posterURL :"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5280/5280024_so.jpg",name : "ice age", description :"disney", rating : "5 stars" },
    {id : 3 , posterURL :"https://m.media-amazon.com/images/M/MV5BZDIyYjM3N2EtOTU1MC00YTA4LTgzNjctMTNjODcxZTZhODU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",name : "Pinocchio", description :"disney", rating : "4 stars" },
    {id : 4 , posterURL :"https://trailers.apple.com/trailers/disney/raya-and-the-last-dragon/images/poster_2x.jpg",name : "Raya", description :"disney", rating : "4 stars" }
    ]
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
      search : <input type='search' onChange={event=> setSearch(event.target.value)}/>
      <button onClick={handelSearch}>
        search
      </button>
      {/* button pour le hide et show */}
      <button onClick={handelShow}>{show ? 'hide' : 'show'} </button>
      {show ? <AddMovie handelAdd={handelAdd}/>: null}
        {Movie.map(el => <MovieCard element ={el}/>)}
    </div>
  )
}

export default MovieList;
