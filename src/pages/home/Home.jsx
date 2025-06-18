import React from "react";
import "./Home.css";
import Hero from "./sections/hero/Hero";
import SideContent from "./sideContent/SideContent";
import MainContent from "./mainContent/MainContent";
import Discover from "./discover/Discover";

const Home = () => {
  return (
    <>
      <Hero />
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
