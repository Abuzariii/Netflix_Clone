import classes from "./Banner.module.css";
import requests from "../../requests";
import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

export default function Banner() {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState(null);

  async function fetchStuff() {
    await fetch(`${requests.netflixOriginals}`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      });
  }
  useEffect(() => {
    fetchStuff();
  }, []);
  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + ". . . . .";
    } else {
      return string;
    }
  }

  return (
    <div className={classes.firstDiv}>
      {movies && (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(17, 17, 17)), url("${BASE_IMG_URL}${movies.results[4].backdrop_path}")`,
          }}
        >
          <h1 className={classes.title}>{movies.results[4].original_name}</h1>
          <p className={classes.overview}>
            {truncateString(movies.results[4].overview, 81)}
          </p>
          <div className={classes.buttonsDiv}>
            <div className={classes.playDiv}>
              <BsFillPlayFill className={classes.playBtn} />
              <p>Play</p>
            </div>
            <div className={classes.addListDiv}>
              <BsPlus className={classes.addListBtn} />
              <p>My List</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
