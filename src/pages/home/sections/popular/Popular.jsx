import React from "react";
import "./Popular.css";
import SectionHeading from "../../../../components/sectionHeading/SectionHeading";
import { popular } from "../../../../assets/assets";
import Slider from "react-slick";

const Popular = () => {
  var settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="popular">
        <SectionHeading title={"Popular"} />
        <Slider {...settings}>
          {popular.map((item) => (
            <div className="item">
              <div className="box shadow">
                <div className="image row">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="category category1">
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">{item.title.slice(0, 50)}...</h1>
                  <div className="date">
                    <i class="bxr  bx-calendar-alt"></i>
                    <label htmlFor="">{item.date}</label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Popular;
