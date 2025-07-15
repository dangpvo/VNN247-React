import React from "react";
import "./Life.css";
import SectionHeading from "../../../../components/sectionHeading/SectionHeading";
import Slider from "react-slick";
import { lifestyle } from "../../../../assets/assets";

const Life = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="popular-post life container">
        <SectionHeading title={"Life Style"} />
        <div className="content">
          <Slider {...settings}>
            {lifestyle.map((item) => (
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
                    <h1 className="title">{item.title.slice(0, 25)}...</h1>
                    <div className="date">
                      <i className="bxr  bx-calendar-alt"></i>
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

export default Life;
