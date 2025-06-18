import React from "react";
import "./MainContent.css";
import Popular from "../sections/popular/Popular";
import PopularPost from "../sections/popularPost/PopularPost";
import Life from "../sections/life/Life";
import Music from "../sections/music/Music";

const MainContent = () => {
  return (
    <section className="main-content">
      <Popular />
      <PopularPost />
      <Life />
      <Music />
    </section>
  );
};

export default MainContent;
