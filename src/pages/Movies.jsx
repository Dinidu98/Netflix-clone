import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import CardSlider from "../components/CardSlider";
// import { onAuthStateChanged } from "firebase/auth";
// import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getGenres } from "../store/store";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";

const Movies = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded)
  const movies =useSelector((state)=>state.netflix.movies)
  const genres = useSelector((state) => state.netflix.genres);


  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getGenres())
  },[])

  useEffect(()=>{
    if(genresLoaded)
      dispatch(getMovies({ genres, type: "movie" }));
  },[genresLoaded])

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <div className="navbar">
        <NavBar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  )
}

export default Movies

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;