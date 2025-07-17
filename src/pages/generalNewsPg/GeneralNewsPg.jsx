import React from "react";
import "./GeneralNewsPg.css";
import { popular } from "../../assets/assets";

const GeneralNewsPg = ({ title }) => {
  return (
    <main className="container">
      <div className="gNewsPg-title">
        <h1>{title.toUpperCase()}</h1>
      </div>
      <div className="gNewsPg-wrapper">
        {popular.map((item) => (
          <div className="box shadow">
            <div className="image">
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
                <label>{item.date}</label>
                <label>VnExpress</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GeneralNewsPg;
