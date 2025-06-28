import React from "react";
import "./Home.css";
import Hero from "./sections/hero/Hero";
import SideContent from "./sideContent/SideContent";
import MainContent from "./mainContent/MainContent";
import Discover from "./discover/Discover";
import LatestNews from "./sections/latestNews/LatestNews";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <LatestNews />
      <main>
        <div className="container">
          <MainContent />
          <SideContent />
        </div>
      </main>
      <Discover />
    </>
  );
};

export default Home;
