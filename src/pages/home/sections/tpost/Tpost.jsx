import React from "react";
import "./Tpost.css";
import { tpost } from "../../../../assets/assets";

const Tpost = () => {
  return (
    <>
      <section className="tpost">
        {tpost.map((item) => (
          <div className="box flexSB">
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <div className="text">
              <h1 className="title">{item.title.slice(0, 35)}...</h1>
              <span>a year ago</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Tpost;
