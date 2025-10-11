import { createContext, useContext, useEffect, useState } from "react";
import { fetchRSSFeeds } from "../services/rssService";
import { rssMap } from "../data/rssMap";

const NewsContext = createContext();

export function NewsContextProvider({ children }) {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [loadDataError, setLoadDataError] = useState("");

  const [homeData, setHomeData] = useState(null);
  const [isHomeDataLoaded, setIsHomeDataLoaded] = useState(false);

  const fetchHomeData = async () => {
    try {
      setIsLoadingData(true);
      setLoadDataError("");

      // Kiểm tra cache (3 phút)
      const cached = localStorage.getItem("homeData");
      const cachedTime = localStorage.getItem("homeDataTime");
      const now = Date.now();
      if (cached && cachedTime && now - cachedTime < 3 * 60 * 1000) {
        setHomeData(JSON.parse(cached));
        setIsLoadingData(false);
        setIsHomeDataLoaded(true);
        return;
      }

      // Fetch từ RSS2JSON
      const resultObj = {};
      for (const [key, feeds] of Object.entries(rssMap)) {
        const limit = key === "latestNews" ? 4 : key === "hotNews" ? 10 : 2;
        resultObj[key] = await fetchRSSFeeds(feeds, limit);
      }

      localStorage.setItem("homeData", JSON.stringify(resultObj));
      localStorage.setItem("homeDataTime", now.toString());

      setHomeData(resultObj);
      setIsHomeDataLoaded(true);
    } catch (err) {
      console.error("Lỗi tải dữ liệu:", err);
      setLoadDataError("⚠️ Không thể tải tin tức. Vui lòng thử lại sau!");
      setIsHomeDataLoaded(false);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const value = { homeData, fetchHomeData, isLoadingData, isHomeDataLoaded };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNewsCtx() {
  return useContext(NewsContext);
}
