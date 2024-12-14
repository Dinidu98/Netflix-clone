import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/store";

const TrendingNow = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    dispatch(getMovies({ type: "movie" }));
  }, [dispatch]);

  return (
    <div
      style={{
        marginLeft: "100px",
        marginRight: "100px",
        marginTop: "50px",
      }}
    >
      <h1 style={{ marginBottom: "50px" }}>Trending Now</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        {movies.slice(0, 6).map((movie, index) => (
          <div
            key={movie.id}
            style={{
              position: "relative",
              height: "300px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "300px",
                borderRadius: "10px",
                border: "none",
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                alignItems: "end",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 10px 20px rgba(0, 0, 0, 0.5)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <h1
                  style={{
                    position: "absolute",
                    top: "170px",
                    left: "-20px",
                    zIndex: "1",
                    fontSize: "100px",
                    color: "#ffffff",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7), 0 0 10px #ffffff",
                  }}
                >
                  {index + 1}
                </h1>
                <h1
                  style={{
                    marginBottom: "80px",
                    color: "#dbdbdb",
                    textShadow: "5px 5px 3px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {movie.name}
                </h1>
                <div
                  style={{
                    backgroundColor: "#e61c1c",
                    borderRadius: "8px 8px 0px 0px",
                    padding: "5px",
                  }}
                >
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
