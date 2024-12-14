import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/store";
import "./TrendingNow.css"

const TrendingNow = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    dispatch(getMovies({ type: "movie" }));
  }, [dispatch]);

  return (
    <div className="trending-container">
      <h1 className="trending-heading">Trending Now</h1>

      <div className="trending-movies">
        {movies.slice(0, 6).map((movie, index) => (
          <div
            key={movie.id} className="movie-card">
            <div
              className="movie-image"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.image})`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}

            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <h1 className="movie-number">
                  {index + 1}
                </h1>
                <h1 className="movie-name">
                  {movie.name}
                </h1>
                <div className="recently-added">
                  <h5>Recently Added</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
