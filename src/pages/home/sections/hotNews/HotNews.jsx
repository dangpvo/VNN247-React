import React from "react";
import "./hotNews.css";
import SectionHeading from "../../../../components/sectionHeading/SectionHeading";
import { ppost } from "../../../../assets/assets";
import Slider from "react-slick";

const HotNews = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
            {ppost.map((item) => (
              <div className="item">
                <div className="box shadow">
                  <div className="image">
                    <div className="img">
                      <img src={item.cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">{item.title.slice(0, 40)}...</h1>
                    <div className="date">
                      <label>VnExpress | </label>
                      <label htmlFor="">{item.date}</label>
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
