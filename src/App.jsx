import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Body/Banner";
import RowCard from "./components/Body/RowCard";
import requests from "./requests";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <RowCard
        title="Netflix Originals"
        genre={`${requests.netflixOriginals}`}
      />
      <RowCard title="Trending" genre={`${requests.trending}`} />
      <RowCard title="Action Movies" genre={`${requests.actionMovies}`} />
      <RowCard title="Top Rated" genre={`${requests.topRated}`} />
      <RowCard title="Comedy Movies" genre={`${requests.comedyMovies}`} />
      <RowCard title="Horror Movies" genre={`${requests.horrorMovies}`} />
      <RowCard title="Documentaries" genre={`${requests.documentaries}`} />
      <Footer />
    </React.Fragment>
  );
}
