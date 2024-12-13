import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { trailerId } = location.state || {};
  const { errorCard } = location.state || {};
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  useEffect(() => {
    setYoutubeVideoId(trailerId);
  }, [trailerId]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          zIndex: 1,
        }}
      >
        <BsArrowLeft
          onClick={() => navigate(-1)}
          style={{
            fontSize: "3rem",
            cursor: "pointer",
            color: "white",
          }}
        />
      </div>
      {errorCard ? (
        <p style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "1rem 2rem",
          borderRadius: "5px",
          textAlign:"center"
        }}>No Movie Available at the Moment<br/>Please Try Again Later</p>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="movie"
        />
      )}
    </div>
  );
};

export default Player;
