import { createContext, useContext, useEffect, useState } from "react";
import { fetchRSSFeeds } from "../services/rssService";
import { rssMapHome } from "../data/rssMap";

const NewsContext = createContext();

const CACHE_TTL = 3 * 60 * 1000; // 3 phút
const LIMIT_ITEMS = 5;

export function NewsContextProvider({ children }) {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [loadDataError, setLoadDataError] = useState("");

  const [newsData, setNewsData] = useState({}); // key: pageName, value: data
  const [loadingMap, setLoadingMap] = useState({});
  const [errorMap, setErrorMap] = useState({});

  const [homeData, setHomeData] = useState(null);
  const [isHomeDataLoaded, setIsHomeDataLoaded] = useState(false);

  const fetchDataForPage = async (pageKeysWithRSS) => {
    try {
      setLoadingMap((prev) => ({ ...prev, [pageKeysWithRSS.pageKey]: true }));

      const cached = localStorage.getItem(`${pageKeysWithRSS}_data`);
      const cachedTime = Number(
        localStorage.getItem(`${pageKeysWithRSS.pageKey}_time`)
      );
      const now = Date.now();

      if (cached && cachedTime && now - cachedTime < CACHE_TTL) {
        setNewsData((prev) => ({
          ...prev,
          [pageKeysWithRSS.pageKey]: JSON.parse(cached),
        }));
        return;
      }

      const resultObj = {};
      for (const [key, feeds] of Object.entries(pageKeysWithRSS.rss)) {
        const limit =
          pageKeysWithRSS.pageKey === "home"
            ? key === "latestNews"
              ? 4
              : key === "hotNews"
              ? 10
              : 2
            : LIMIT_ITEMS;
        resultObj[key] = await fetchRSSFeeds(feeds, limit);
      }

      localStorage.setItem(
        `${pageKeysWithRSS.pageKey}_data`,
        JSON.stringify(resultObj)
      );
      localStorage.setItem(`${pageKeysWithRSS.pageKey}_time`, now.toString());

      setNewsData((prev) => ({
        ...prev,
        [pageKeysWithRSS.pageKey]: resultObj,
      }));
      if (pageKeysWithRSS.pageKey === "home") {
        setIsHomeDataLoaded(true);
      }
    } catch (err) {
      console.error(`Error loading ${pageKeysWithRSS.pageKey}:`, err);
      setErrorMap((prev) => ({
        ...prev,
        [pageKeysWithRSS.pageKey]: "Failed to load data",
      }));
    } finally {
      setLoadingMap((prev) => ({ ...prev, [pageKeysWithRSS.pageKey]: false }));
    }
  };

  const fetchHomeData = async () => {
    try {
      setIsLoadingData(true);
      setLoadDataError("");

      // Kiểm tra cache (3 phút)
      const cached = localStorage.getItem("homeData");
      const cachedTime = Number(localStorage.getItem("homeDataTime"));
      const now = Date.now();
      if (cached && cachedTime && now - cachedTime < 3 * 60 * 1000) {
        setHomeData(JSON.parse(cached));
        setIsLoadingData(false);
        setIsHomeDataLoaded(true);
        return;
      }

      // Fetch từ RSS2JSON
      const resultObj = {};
      for (const [key, feeds] of Object.entries(rssMapHome)) {
        const limit = key === "latestNews" ? 4 : key === "hotNews" ? 10 : 2;
        resultObj[key] = await fetchRSSFeeds(feeds, limit);
      }

      localStorage.setItem("homeData", JSON.stringify(resultObj));
      localStorage.setItem("homeDataTime", now.toString());

      setHomeData(resultObj);
      setIsHomeDataLoaded(true);
    } catch (err) {
      console.error("Loading error:", err);
      setLoadDataError("⚠️ Could not load the news. Please try again later!");
      setIsHomeDataLoaded(false);
    } finally {
      setIsLoadingData(false);
    }
  };

  const value = {
    homeData,
    fetchHomeData,
    isLoadingData,
    isHomeDataLoaded,
    fetchDataForPage,
    newsData,
    loadingMap,
    errorMap,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNewsCtx() {
  return useContext(NewsContext);
}
