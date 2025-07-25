import { createContext, useContext, useEffect, useState } from "react";
import API from "../hooks/api";

const NewsContext = createContext();

export function NewsContextProvider({ children }) {
  const value = {};

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNewsCtx() {
  return useContext(NewsContext);
}
