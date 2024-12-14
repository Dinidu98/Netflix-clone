import React from 'react'
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../store/store";

const SelectGenre = ({ genres, type }) => {
    const dispatch = useDispatch();


    const handleChange = (e) => {
      const genreId = e.target.value;
      dispatch(fetchDataByGenre({ genre: genreId, type }));
    };

  return (
    <>
    <select
      style={{
        marginLeft: "50px",
        padding: "10px 20px",
        fontSize: "16px",
        fontFamily: "'Helvetica Neue', sans-serif",
        backgroundColor: "#141414",
        color: "white",
        border: "2px solid #333",
        borderRadius: "4px",
        appearance: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
      onChange={handleChange}
    >
      {genres.map((genre) => {
        return (
          <option
            value={genre.id}
            key={genre.id}
            style={{
              backgroundColor: "#141414",
              color: "white",
            }}
          >
            {genre.name}
          </option>
        );
      })}
    </select>
    </>
  );
}

export default SelectGenre;
