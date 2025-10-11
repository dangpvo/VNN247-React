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
      <LatestNews />
      <WeatherForecast />
      <HotNews />
      <div className="two-cols-sec container">
        <Lottery />
        <GeneralNewsSection
          title={"Tin kinh tế"}
          isContainer={false}
          items={homeData.economy}
          category="Tin kinh tế"
        />
      </div>
      <GeneralNewsSection
        title={"Tin giáo dục"}
        rows={3}
        items={homeData.education}
        category="Tin giáo dục"
      />
      <GeneralNewsSection
        title={"Bài viết"}
        rows={2}
        items={homeData.articles}
        category="Bài viết"
      />
    </main>
  );
};

export default Home;
