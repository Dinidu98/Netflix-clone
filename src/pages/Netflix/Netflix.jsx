import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getGenres } from "../../store/store";
import Slider from "../../components/Slider";
import backgroundImage from "../../assets/home1.jpg";
import "./Netflix.css";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const trailerId = "zSWdZVtXT7E";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(getMovies({ type: "all" }));
  }, [genresLoaded, dispatch]);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? true : false);
    return () => (window.onscroll = null);
  };

  const handleClick = () => {
    if (trailerId) {
      navigate("/player", { state: { trailerId } });
    }
  };

  return (
    <div className="container">
      <NavBar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="containerHeader">
          <div className="logo">
            <h1>Interstellar</h1>
            <p>
              With humanity teetering on the brink of extinction,
              <br />a group of astronauts travels through a wormhole in search
              of <br />
              another inhabitable planet.
            </p>
          </div>
          <div className="buttons">
            <button onClick={handleClick} >
              <FaPlay />
              Play
            </button>
            <button >
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </div>
  );
};

export default Netflix;
