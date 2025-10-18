import React, { useState } from "react";
import "./hotNews.css";
import SectionHeading from "../../../../components/sectionHeading/SectionHeading";
import { assets } from "../../../../assets/assets";
import Slider from "react-slick";
import { formatDate } from "../../../../utils/formatDate";
import { useNewsCtx } from "../../../../context/NewsContext";

const HotNews = () => {
  const { homeData, newsData } = useNewsCtx();
  const [items, setItems] = useState(newsData.home.hotNews);

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="hotnews container">
        <SectionHeading title={"Tâm Điểm"} />
        <div className="content">
          <Slider {...settings}>
            {items.map((item) => (
              <div className="item">
                <div className="box shadow">
                  <div className="image">
                    <img
                      src={
                        item.source.toLowerCase() !== "dantri"
                          ? item.image || assets.defaultImgBig
                          : assets.defaultImgBig
                      }
                      alt=""
                      onClick={() => window.open(item.link, "_blank")}
                    />
                    <div className="category category1">
                      <span>Tâm điểm</span>
                    </div>
                  </div>
                  <div className="text">
                    <h1
                      className="title"
                      onClick={() => window.open(item.link, "_blank")}
                    >
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
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HotNews;
