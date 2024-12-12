import React, { useState } from "react";
// import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';


const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [trailerId, setTrailerId] = useState(null);
  const navigate = useNavigate();

  

  // const KEY="AIzaSyD1S5_j-_rIeHKIKX0T9sRmvf2YIfL9L9I"

  // useEffect(() => {
  //   if (isHovered && movieData.name) {
  //     const fetchTrailer = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://www.googleapis.com/youtube/v3/search`,
  //           {
  //             params: {
  //               part: "snippet",
  //               q: `${movieData.name} official trailer`,
  //               key: KEY,
  //               type: "video",
  //               maxResults: 1,
  //             },
  //           }
  //         );
  //         const videoId = response.data.items[0]?.id?.videoId;
  //         setTrailerId(videoId);
  //       } catch (error) {
  //         console.error("Failed to fetch YouTube trailer:", error);
  //       }
  //     };
  //     fetchTrailer();
  //   }
  // }, [isHovered, movieData.name]);


  const addToList = async () => {
  try {
    // Fetch the existing movies
    const response = await axios.get("http://localhost:8000/addedMovies");
    const existingMovies = response.data;

    // Check if the movie already exists
    const movieExists = existingMovies.some(
      (movie) => movie.title === movieData.title
    ); // Replace 'title' with the unique identifier in your movieData

    if (movieExists) {
      toast.error("Movie already exists in the list!");
      return;
    }

    // Add the movie if it doesn't exist
    await axios.post("http://localhost:8000/addedMovies", { data: movieData });
    toast.success("Successfully added the movie!");
  } catch (error) {
    console.log(error);
    toast.error("An error occurred while adding the movie.");
  }
};






  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
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


            {/* <iframe
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie"
      /> */}




          </div>
          <div className="info-container">
            <h3 className="name" 
            onClick={() => navigate("/player")}
            >
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck title="Remove from List" />
                ) : (
                  <AiOutlinePlus onClick={addToList} title="Add to my list" />
                )}
              </div>
              <div className="info">
              <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default React.memo(Card);

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      iframe {
        width: fit-content;
        height: fit-content;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
        
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
