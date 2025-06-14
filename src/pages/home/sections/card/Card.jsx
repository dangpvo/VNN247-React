import React from "react";
import "./Card.css";

const Card = ({
  item: { id, cover, category, title, authorName, authorImg, time },
}) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
