import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getGenres } from "../../store/store";
import SelectGenre from "../../components/SelectGenre";
import Slider from "../../components/Slider";
import NotAvailable from "../../components/NotAvailable";
import "./TvShows.css";

const TvShows = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    useEffect(() => {
        if (genresLoaded) dispatch(getMovies({ genres, type: "tv" }));
    }, [genresLoaded, genres, dispatch]);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className="container">
                <NavBar isScrolled={isScrolled} />
            
            <div className="data">
            <h1 style={{
                marginLeft:"50px",
                marginBottom:"50px"
            }}>Tv Shows</h1>
                <SelectGenre genres={genres} type="tv" />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
                
            </div>
        </div>
    );
};

export default TvShows;
