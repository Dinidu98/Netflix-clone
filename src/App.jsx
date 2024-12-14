import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Netflix from './pages/Netflix/Netflix'
import Player from './pages/Player/Player'
import Movies from './pages/Movies/Movies'
import TvShows from './pages/TsShows/TvShows'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    < >
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Netflix/>}/>
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies/>}/>
        <Route exact path="/tvShows" element={<TvShows/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App