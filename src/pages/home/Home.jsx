import React, { useEffect, useState } from "react";
import "./Home.css";
import LatestNews from "./sections/latestNews/LatestNews";
import WeatherForecast from "./sections/weatherForecast/WeatherForecast";
import HotNews from "./sections/hotNews/HotNews";
import Lottery from "./sections/lottery/Lottery";
import GeneralNewsSection from "../../components/generalNewsSec/GeneralNewsSection";
import { useNewsCtx } from "../../context/NewsContext";

const Home = () => {
  const { homeData } = useNewsCtx();

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
