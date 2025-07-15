import React, { useEffect } from "react";
import "./Home.css";
import Hero from "./sections/hero/Hero";
import SideContent from "./sideContent/SideContent";
import MainContent from "./mainContent/MainContent";
import Discover from "./discover/Discover";
import LatestNews from "./sections/latestNews/LatestNews";
import Popular from "./sections/popular/Popular";
import PopularPost from "./sections/popularPost/PopularPost";
import Life from "./sections/life/Life";
import Music from "./sections/music/Music";
import WeatherForecast from "./sections/weatherForecast/WeatherForecast";
import HotNews from "./sections/hotNews/HotNews";
import Lottery from "./sections/lottery/Lottery";
import GeneralNewsSection from "../../components/generalNewsSec/GeneralNewsSection";

const Home = () => {
  return (
    <main>
      {/* <Hero /> */}
      <LatestNews />
      <WeatherForecast />
      <HotNews />
      <div className="two-cols-sec container">
        <Lottery />
        <GeneralNewsSection title={"Tin kinh tế"} isContainer={false} />
      </div>
      <GeneralNewsSection title={"Tin giáo dục"} rows={3} />
      <GeneralNewsSection title={"Bài viết"} rows={2} />
    </main>
  );
};

export default Home;
