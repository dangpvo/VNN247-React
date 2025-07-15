import React from "react";
import "./Music.css";
import SectionHeading from "../../../../components/sectionHeading/SectionHeading";
import Slider from "react-slick";
import { popular } from "../../../../assets/assets";

const Music = () => {
  var settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
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
      <section className="music container">
        <SectionHeading title={"Music News"} />
        <div className="content">
          <Slider {...settings}>
            {popular
              .filter((val) => val.category === "fun")
              .map((item) => (
                <div className="item">
                  <div className="box shadow flexSB">
                    <div className="image">
                      <div className="img">
                        <img src={item.cover} alt="" />
                      </div>
                      <div className="category category1">
                        <span>{item.category}</span>
                      </div>
                    </div>
                    <div className="text">
                      <h1 className="title">{item.title.slice(0, 50)}...</h1>
                      <div className="date">
                        <i className="bxr  bx-calendar-alt"></i>
                        <label htmlFor="">{item.date}</label>
                      </div>
                      <p className="desc">{item.desc.slice(0, 250)}...</p>
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

export default Music;
