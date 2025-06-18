import React from "react";
import "./SideContent.css";
import SectionHeading from "../../../components/sectionHeading/SectionHeading";
import SocialMedia from "../sections/socialMedia/SocialMedia";

const SideContent = () => {
  return (
    <section className="side-content">
      <SectionHeading title={"Stay Connected"} />
      <SocialMedia />

      <SectionHeading title={"Subscribe"} />
      <div className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i class="bxr  bx-paper-plane"></i> SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default SideContent;
