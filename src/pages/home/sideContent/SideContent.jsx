import React from "react";
import "./SideContent.css";
import SectionHeading from "../../../components/sectionHeading/SectionHeading";
import SocialMedia from "../sections/socialMedia/SocialMedia";
import { assets, gallery } from "../../../assets/assets";
import Tpost from "../sections/tpost/Tpost";
import Slider from "react-slick";

const SideContent = () => {
  const category = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="side-content">
      <SectionHeading title={"Stay Connected"} />
      <SocialMedia />

      {/* <SectionHeading title={"Subscribe"} />
      <div className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="bxr  bx-paper-plane"></i> SUBMIT
          </button>
        </form>
      </div> */}

      <div className="banner">
        <img src={assets.sidebarBanner} alt="" />
      </div>

      <SectionHeading title={"Tiktok Post"} />
      <Tpost />

      <SectionHeading title={"Category"} />
      <div className="categories">
        {category.map((item) => (
          <div className="category category1">
            <span>{item}</span>
          </div>
        ))}
      </div>

      <SectionHeading title={"Gallery"} />
      <div className="gallery">
        <Slider {...settings}>
          {gallery.map((item) => (
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SideContent;
