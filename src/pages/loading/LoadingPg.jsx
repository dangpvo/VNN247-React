import React, { useEffect } from "react";
import "./LoadingPg.css";
import { useLocation } from "react-router-dom";
import { useNewsCtx } from "../../context/NewsContext";

const LoadingPg = () => {
  const { fetchHomeData } = useNewsCtx();

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === "/") {
      // Load data cho trang Home
      fetchHomeData();
    } else if (currentPath.startsWith("/article")) {
      // Load data cho bài viết
    } else {
      // Load data mặc định hoặc cho trang khác
    }
  }, [currentPath]);

  return (
    <div className="loading-wrapper">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingPg;
