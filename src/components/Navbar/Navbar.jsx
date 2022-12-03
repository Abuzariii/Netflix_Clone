import classes from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    });
  }, []);
  const bgTrans = {
    backgroundColor: "rgb(17, 17, 17, 0)",
  };
  const bgShow = {
    backgroundColor: "rgb(17, 17, 17)",
  };
  return (
    <nav style={navBg ? bgShow : bgTrans}>
      <div aria-current="page" className={classes.logoDiv}>
        <img
          className={classes.logo}
          src="https://netflix-clone-ebon-nu.vercel.app/f4070143e1f521da82a119eb78b434d0.png"
          alt=""
        />
      </div>
      <div className={classes.listDiv}>
        <p>Home</p>
        <p>Tv Shows</p>
        <p>Movies</p>
        <p>Recently Added</p>
        <p>My List</p>
      </div>
      <input
        type="search"
        placeholder="Title, genres, people"
        className={classes.searchInput}
      />
      <BsSearch className={classes.searchIcon} />
    </nav>
  );
}
