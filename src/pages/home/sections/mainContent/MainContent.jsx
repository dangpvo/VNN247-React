import React from "react";
import "./MainContent.css";
import Popular from "../popular/Popular";
import PopularPost from "../popularPost/PopularPost";

const MainContent = () => {
  return (
    <section className="main-content">
      <Popular />
      <PopularPost />
    </section>
  );
};

export default MainContent;
