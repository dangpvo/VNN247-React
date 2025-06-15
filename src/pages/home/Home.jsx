import React from "react";
import "./Home.css";
import Hero from "./sections/hero/Hero";
import MainContent from "./sections/mainContent/MainContent";
import SideContent from "./sections/sideContent/SideContent";

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
    </>
  );
};

export default Home;
