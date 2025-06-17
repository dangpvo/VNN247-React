import React from "react";
import "./MainContent.css";
import Popular from "../popular/Popular";
import PopularPost from "../popularPost/PopularPost";
import Life from "../life/Life";
import Music from "../music/Music";

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
