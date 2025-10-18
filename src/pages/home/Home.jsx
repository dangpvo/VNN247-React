import React, { useEffect, useState } from "react";
import "./Home.css";
import LatestNews from "./sections/latestNews/LatestNews";
import WeatherForecast from "./sections/weatherForecast/WeatherForecast";
import HotNews from "./sections/hotNews/HotNews";
import Lottery from "./sections/lottery/Lottery";
import GeneralNewsSection from "../../components/generalNewsSec/GeneralNewsSection";
import { useNewsCtx } from "../../context/NewsContext";

const Home = () => {
  const { homeData, newsData } = useNewsCtx();

  return (
    <main>
      <LatestNews />
      <WeatherForecast />
      <HotNews />
      <div className="two-cols-sec container">
        <Lottery />
        <GeneralNewsSection
          title={"Tin giải trí"}
          isContainer={false}
          items={newsData.home.entertainment}
          category="Tin kinh tế"
        />
      </div>
      <GeneralNewsSection
        title={"Tin kinh tế"}
        rows={3}
        items={newsData.home.economy}
        category="Tin kinh tế"
      />
      <GeneralNewsSection
        title={"Tin giáo dục"}
        rows={3}
        items={newsData.home.education}
        category="Tin giáo dục"
      />
      <GeneralNewsSection
        title={"Tin đời sống"}
        rows={3}
        items={newsData.home.life}
        category="Tin kinh tế"
      />
      <GeneralNewsSection
        title={"Tin thể thao"}
        rows={3}
        items={newsData.home.sports}
        category="Tin kinh tế"
      />
      <GeneralNewsSection
        title={"Bài viết"}
        rows={2}
        items={newsData.home.articles}
        category="Bài viết"
      />
    </main>
  );
};

export default Home;
