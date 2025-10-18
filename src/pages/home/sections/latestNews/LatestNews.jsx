import React, { useEffect, useState } from "react";
import "./LatestNews.css";
import { useNewsCtx } from "../../../../context/NewsContext";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { homeData, newsData } = useNewsCtx();
  const [items, setItems] = useState(newsData?.home?.latestNews || []);

  return (
    <>
      {/* <div>{items[1].title}</div> */}
      <section className="latestnews container">
        <div className="latestnews-left">
          <div
            className="latestnews-left__title"
            onClick={() => window.open(items[0].link, "_blank")}
          >
            {items[0].title}
          </div>
          <div className="latestnews-left__details">
            <span className="latestnews__cat">{"Tin mới "}</span> |{" "}
            <span className="latestnews__src">{items[0].source}</span>
          </div>
          <div
            className="latestnews-left__img shadow"
            onClick={() => window.open(items[0].link, "_blank")}
          >
            <img src={items[0].image} alt="" className="latestnews__img" />
          </div>
        </div>
        <div className="latestnews-right">
          <div className="news-card-horizontal-1">
            <div className="news-card-hori-1__left">
              <div
                className="news-card-hori-1__title"
                onClick={() => window.open(items[1].link, "_blank")}
              >
                {items[1].title}
              </div>
              <div className="news-card-hori-1__desc">
                {items[1].description.slice(0, 70)}...
              </div>
              <div className="news-card-hori-1__details">
                <span className="latestnews__cat">{"Tin mới "}</span>|{" "}
                <span className="latestnews__src">{items[1].source}</span>
              </div>
            </div>
            <div
              className="news-card-hori-1__right shadow"
              onClick={() => window.open(items[1].link, "_blank")}
            >
              <img src={items[1].image} alt="" className="latestnews__img" />
            </div>
          </div>

          <div className="news-card-horizontal-1">
            <div className="news-card-hori-1__left">
              <div
                className="news-card-hori-1__title"
                onClick={() => window.open(items[2].link, "_blank")}
              >
                {items[2].title}
              </div>
              <div className="news-card-hori-1__desc">
                {items[2].description.slice(0, 70)}...
              </div>
              <div className="news-card-hori-1__details">
                <span className="latestnews__cat">{"Tin mới "}</span>|{" "}
                <span className="latestnews__src">{items[2].source}</span>
              </div>
            </div>
            <div
              className="news-card-hori-1__right shadow"
              onClick={() => window.open(items[2].link, "_blank")}
            >
              <img src={items[2].image} alt="" className="latestnews__img" />
            </div>
          </div>

          <div className="news-card-horizontal-1">
            <div className="news-card-hori-1__left">
              <div
                className="news-card-hori-1__title"
                onClick={() => window.open(items[3].link, "_blank")}
              >
                {items[3].title}
              </div>
              <div className="news-card-hori-1__desc">
                {items[3].description.slice(0, 70)}...
              </div>
              <div className="news-card-hori-1__details">
                <span className="latestnews__cat">{"Tin mới "}</span>|{" "}
                <span className="latestnews__src">{items[3].source}</span>
              </div>
            </div>
            <div
              className="news-card-hori-1__right shadow"
              onClick={() => window.open(items[3].link, "_blank")}
            >
              <img src={items[3].image} alt="" className="latestnews__img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
