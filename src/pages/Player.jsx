import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const youtubeVideoId = "zSWdZVtXT7E";

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
      <iframe
        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
