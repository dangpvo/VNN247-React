import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <>
      <section className="social">
        <div className="social-box">
          <i className="bxl bx-facebook" />
          <span>12000 Likes</span>
        </div>
        <div className="social-box">
          <i className="bxl bx-instagram"></i>
          <span>5000 Followers</span>
        </div>
        <div className="social-box">
          <i className="bxl bx-youtube"></i>
          <span>5000 Subscribers</span>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
