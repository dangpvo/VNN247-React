import React from "react";
import "./LoadingSection.css";

const LoadingSection = () => {
  return (
    <div className="loading-section">
      <div className="spinner"></div>
      <p>Đang tải nội dung...</p>
    </div>
  );
};

export default LoadingSection;
