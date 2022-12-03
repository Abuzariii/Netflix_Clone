import React, { useState, useEffect } from "react";
import classes from "./RowCard.module.css";
import { motion } from "framer-motion";

export default function RowCard(props) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState(null);

  async function fetchStuff() {
    await fetch(props.genre)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      });
  }
  useEffect(() => {
    fetchStuff();
  }, []);
  return (
    <React.Fragment>
      <h1 className={classes.genreTitle}>{props.title}</h1>
      <div className={classes.poster}>
        {movies &&
          movies.results.map((movie) => (
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              src={`${BASE_IMG_URL}${movie.poster_path}`}
            ></motion.img>
          ))}
      </div>
    </React.Fragment>
  );
}
