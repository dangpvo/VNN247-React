import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ title }) => {
  return (
    <>
      <div className="heading">
        <h6>{title}</h6>
      </div>
    </>
  );
};

export default SectionHeading;
