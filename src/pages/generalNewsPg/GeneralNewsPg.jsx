import React, { useEffect, useState } from "react";
import "./GeneralNewsPg.css";
import { assets, popular } from "../../assets/assets";
import { useNewsCtx } from "../../context/NewsContext";
import LoadingSection from "../../components/loadingSection/LoadingSection";
import { formatDate } from "../../utils/formatDate";

const GeneralNewsPg = ({ title, pageKeyWithRSS }) => {
  const { fetchDataForPage, newsData, loadingMap } = useNewsCtx();

  useEffect(() => {
    fetchDataForPage(pageKeyWithRSS);
  }, []);

  const isLoading = loadingMap[pageKeyWithRSS.pageKey];
  const data = newsData[pageKeyWithRSS.pageKey];

  if (isLoading || !data) {
    return <LoadingSection />;
  }

  return (
    <main className="container">
      <div className="gNewsPg-title">
        <h1>{title.toUpperCase()}</h1>
      </div>
      <div className="gNewsPg-wrapper">
        {data.map((item) => (
          <div className="box shadow">
            <div className="image">
              <div className="img">
                <img src={item.image || assets.defaultImgBig} alt="" />
              </div>
              <div className="category category1">
                <span>{pageKeyWithRSS.category}</span>
              </div>
            </div>
            <div className="text row">
              <h1 className="title">
                {item.title.length > 65
                  ? item.title.slice(0, 65) + "..."
                  : item.title}
              </h1>
              <div className="date">
                <label>{item.source} | </label>
                <label>{formatDate(item.pubDate)}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GeneralNewsPg;
