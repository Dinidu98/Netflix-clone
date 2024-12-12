import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/' element={<Signup/>}/>
        <Route exact path='/home' element={<Netflix/>}/>
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies/>}/>
        <Route exact path="/tvShows" element={<TvShows/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App