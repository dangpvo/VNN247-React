import React, { useEffect } from "react";
import "./weatherForecast.css";
import { useNewsCtx } from "../../../../context/NewsContext";

const WeatherForecast = () => {
  const { isHomeDataLoaded } = useNewsCtx();

  useEffect(() => {
    if (!isHomeDataLoaded) return;

    // Tạo script
    const script = document.createElement("script");
    script.id = "weatherwidget-io-js";
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;

    // Thêm vào body
    document.body.appendChild(script);

    // Cleanup khi unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [isHomeDataLoaded]);

  return (
    <section className="weather-forecast container">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/10d82106d63/ho-chi-minh-city/"
        data-label_1="THỜI TIẾT"
        data-label_2="TP. HỒ CHÍ MINH"
        data-theme="original"
      >
        THỜI TIẾT TP HỒ CHÍ MINH
      </a>
    </section>
  );
};

export default WeatherForecast;
