import { createContext, useContext, useEffect, useState } from "react";
import API from "../hooks/api";

const NewsContext = createContext();

export function NewsContextProvider({ children }) {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [loadDataError, setLoadDataError] = useState("");

  const [homeData, setHomeData] = useState(null);

  const fetchHomeData = async () => {
    try {
      const res = await API.get("/");
      setHomeData(res.data);
    } catch (error) {
      console.error("Fetch data failed:", error);
    }
  };

  const value = { homeData, fetchHomeData };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNewsCtx() {
  return useContext(NewsContext);
}
