import React from "react";
import "./GeneralNewsPg.css";
import { popular } from "../../assets/assets";
import SectionHeading from "../../components/sectionHeading/SectionHeading";

const GeneralNewsPg = ({ title }) => {
  return (
    <main className="container">
      <div className="gNewsPg-title">
        <h1>{title.toUpperCase()}</h1>
      </div>
      <div className="gNewsPg-wrapper">
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
                  <i className="bxr  bx-calendar-alt"></i>
                  <label htmlFor="">{item.date}</label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GeneralNewsPg;
