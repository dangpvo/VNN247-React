import React from "react";
import "./Discover.css";
import SectionHeading from "../../../components/sectionHeading/SectionHeading";
import { discover } from "../../../assets/assets";

const Discover = () => {
  return (
    <>
      <section className="discover">
        <div className="container">
          <SectionHeading title={"Discover"} />

          <div className="content">
            {discover.map((item) => (
              <div className="box">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <h1 className="title">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
