import React from "react";
import "./PopularPost.css";
import SectionHeading from "../../../../components/sectionHeading/SectionHeading";
import { popular, ppost } from "../../../../assets/assets";
import Slider from "react-slick";

const PopularPost = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesPerRow: 1,
  };

  return (
    <>
      <section className="popular-post">
        <SectionHeading title={"Popular Posts"} />
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
                      <i class="bxr  bx-calendar-alt"></i>
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

export default PopularPost;
