import React from "react";
import "./generalNewsSection.css";
import Slider from "react-slick";
import SectionHeading from "../sectionHeading/SectionHeading";
import { popular } from "../../assets/assets";

const GeneralNewsSection = ({
  title,
  isContainer = true,
  rows = 4,
  items = [],
  category = "",
}) => {
  var settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: isContainer ? 2 : 1,
    speed: 500,
    rows: rows || 4,
    slidesPerRow: 1,
    dots: true,
    arrows: false,
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
      <section className={`g-news-sec ${isContainer ? "container" : ""}`}>
        <SectionHeading title={title} />
        <Slider {...settings}>
          {items.map((item) => (
            <div className="item">
              <div className="box shadow">
                <div className="image row">
                  <div className="img">
                    <img
                      src={item.image}
                      alt=""
                      onClick={() => window.open(item.link, "_blank")}
                    />
                  </div>
                  <div className="category category1">
                    <span>{category}</span>
                  </div>
                </div>
                <div className="text row">
                  <h1
                    className="title"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    {item.title.length > 80
                      ? item.title.slice(0, 80) + "..."
                      : item.title}
                  </h1>
                  <div className="date">
                    <label>{item.pubDate}</label>
                    <label>{item.source}</label>
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

export default GeneralNewsSection;
