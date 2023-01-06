import React from 'react';
import './App.css';

import MovieList from './components/MovieList';
import {Route, Routes} from "react-router-dom"
import movies from './components/data';
import Details from './components/Details';
import CarouselMovie from './components/CarouselMovie';


function App() {
  
  return (
    <div className="App">
{/* <MovieList/> */}


<Routes>
<Route path="/details/:id" element={<Details movies={movies}/>} />
<Route path="/" element={<MovieList/>}/>
</Routes>
<CarouselMovie/>
    </div>
  );
}

export default App;
