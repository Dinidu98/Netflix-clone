import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import backgroundImage from "../assets/home1.jpg";
// import MovieLogo from "../assets/movieLogo.png";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch,useSelector } from "react-redux";
import { getMovies,getGenres } from "../store/store";
import Slider from "../components/Slider";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded)
  const movies =useSelector((state)=>state.netflix.movies)


  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getGenres())
  },[])

  useEffect(()=>{
    if(genresLoaded)
      dispatch(getMovies({type:"all"}))
  },[genresLoaded])

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <Container>
      <NavBar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            {/* <img src={MovieLogo} alt="Movie Logo" /> */}
            <h1>Interstellar</h1>
            <p>
              With humanity teetering on the brink of extinction,
              <br />a group of astronauts travels through a wormhole in search
              of <br />
              another inhabitable planet.
            </p>
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />

    </Container>
  );
};

export default Netflix;

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(80%);
      object-fit: cover; 
      background-position: center;
      background-size: cover; 
      background-repeat: no-repeat; 
    }
    img {
      height: 100vh;
      width: 100vw;
      object-fit: cover; 
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      background: linear-gradient(to top, black, transparent);
      pointer-events: none;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        margin-left: 5rem;
        h1 {
          font-size: 4rem; 
          color: white;
          text-transform: uppercase; 
          letter-spacing: 0.3rem; 
        }
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin-top: 3rem;
        margin-left: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          z-index: 1;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

