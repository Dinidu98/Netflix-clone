import React, { useState } from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import "./styles/Card.css"


const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [trailerId, setTrailerId] = useState(null);
  const [errorCard,setErrorCard]=useState(false)
  const navigate = useNavigate();

  

  const KEY="AIzaSyD1S5_j-_rIeHKIKX0T9sRmvf2YIfL9L9I"

  useEffect(() => {
    if (isHovered && movieData.name) {
      const fetchTrailer = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`,
            {
              params: {
                part: "snippet",
                q: `${movieData.name} official trailer`,
                key: KEY,
                type: "video",
                maxResults: 1,
              },
            }
          );
          const videoId = response.data.items[0]?.id?.videoId;
          setTrailerId(videoId);
        } catch (error) {
          setErrorCard(true)
        }
      };
      fetchTrailer();
    }
  }, [isHovered, movieData.name]);



const handleClick = () => {
    navigate("/player", { state: { trailerId, errorCard } });
};





  return (
    <div
    className="card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="ima"
        onClick={() => navigate("/player")}

      />
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
             
              onClick={()=>navigate("/player")}
              alt={movieData.title || "Movie poster"}
            />


            <iframe
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie"
      />




          </div>
          <div className="info-container">
            <h3 className="name" 
            onClick={handleClick}
            >
              {movieData.name}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="play"
                  onClick={handleClick}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck title="Remove from List" />
                ) : (
                  <AiOutlinePlus  title="Add to my list" />
                )}
              </div>
              <div className="info">
              <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres ">
              <ul >
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Card);
