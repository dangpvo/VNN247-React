import React, { useEffect } from "react";
import "./LoadingPg.css";
import { useLocation } from "react-router-dom";
import { useNewsCtx } from "../../context/NewsContext";
import { pageKeysWithRSS } from "../../data/pageKeysWithRSS";

const LoadingPg = () => {
  const { fetchHomeData, fetchDataForPage } = useNewsCtx();

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === "/") {
      // Load data cho trang Home
      // fetchHomeData();
      fetchDataForPage(pageKeysWithRSS.home);
    }
  }, [currentPath]);

  return (
    <div className="loading-wrapper">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingPg;
