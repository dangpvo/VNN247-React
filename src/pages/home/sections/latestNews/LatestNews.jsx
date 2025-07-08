import React, { useState } from "react";
import "./LatestNews.css";
import { hero } from "../../../../assets/assets";

const LatestNews = () => {
  const [items, setItems] = useState(hero);

  return (
    <>
      {/* <div>{items[1].title}</div> */}
      <section className="latestnews container">
        <div className="latestnews-left">
          <div className="latestnews-left__title">{items[0].title}</div>
          <div className="latestnews-left__details">
            <span className="latestnews__cat">{items[0].category + " "}</span> |
            <span className="latestnews__src"> VnExpress</span>
          </div>
          <div className="latestnews-left__img shadow">
            <img src={items[0].cover} alt="" className="latestnews__img" />
          </div>
        </div>
        <div className="latestnews-right">
          <div className="news-card-horizontal-1">
            <div className="news-card-hori-1__left">
              <div className="news-card-hori-1__title">{items[1].title}</div>
              <div className="news-card-hori-1__desc">
                {items[1].desc[0].para1.slice(0, 70)}...
              </div>
              <div className="news-card-hori-1__details">
                <span className="latestnews__cat">
                  {items[1].category + " "}
                </span>
                | <span className="latestnews__src">VnExpress</span>
              </div>
            </div>
            <div className="news-card-hori-1__right shadow">
              <img src={items[1].cover} alt="" className="latestnews__img" />
            </div>
          </div>

          <div className="news-card-horizontal-1">
            <div className="news-card-hori-1__left">
              <div className="news-card-hori-1__title">{items[2].title}</div>
              <div className="news-card-hori-1__desc">
                {items[2].desc[0].para1.slice(0, 70)}...
              </div>
              <div className="news-card-hori-1__details">
                <span className="latestnews__cat">
                  {items[2].category + " "}
                </span>
                | <span className="latestnews__src">VnExpress</span>
              </div>
            </div>
            <div className="news-card-hori-1__right shadow">
              <img src={items[2].cover} alt="" className="latestnews__img" />
            </div>
          </div>

          <div className="news-card-horizontal-1">
            <div className="news-card-hori-1__left">
              <div className="news-card-hori-1__title">{items[3].title}</div>
              <div className="news-card-hori-1__desc">
                {items[3].desc[0].para1.slice(0, 70)}...
              </div>
              <div className="news-card-hori-1__details">
                <span className="latestnews__cat">
                  {items[3].category + " "}
                </span>
                | <span className="latestnews__src">VnExpress</span>
              </div>
            </div>
            <div className="news-card-hori-1__right shadow">
              <img src={items[3].cover} alt="" className="latestnews__img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
