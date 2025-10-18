import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LoadingPg from "./pages/loading/LoadingPg";
import NotFoundPg from "./pages/notFoundPg/NotFoundPg";
import GeneralNewsPg from "./pages/generalNewsPg/GeneralNewsPg";
import ArticlesPg from "./pages/articlesPg/ArticlesPg";
import { useNewsCtx } from "./context/NewsContext";
import { pageKeysWithRSS } from "./data/pageKeysWithRSS";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const { loadingMap, isLoadingData, isHomeDataLoaded } = useNewsCtx();

  const [loading, setLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);

  const generalNewsPages = [
    {
      path: "/news",
      title: "Thời sự",
      pageKeysWithRSS: pageKeysWithRSS.news,
    },
    {
      path: "/international",
      title: "Thế giới",
      pageKeysWithRSS: pageKeysWithRSS.international,
    },
    {
      path: "/economy",
      title: "Kinh tế",
      pageKeysWithRSS: pageKeysWithRSS.economy,
    },
    {
      path: "/education",
      title: "Giáo dục",
      pageKeysWithRSS: pageKeysWithRSS.education,
    },
    {
      path: "/health",
      title: "Sức khỏe",
      pageKeysWithRSS: pageKeysWithRSS.health,
    },
    {
      path: "/entertainment",
      title: "Giải trí",
      pageKeysWithRSS: pageKeysWithRSS.entertainment,
    },
    {
      path: "/jobs",
      title: "Việc làm",
      pageKeysWithRSS: pageKeysWithRSS.jobs,
    },
    // {
    //   path: "/ennews",
    //   title: "Tin tiếng Anh",
    //   pageKeysWithRSS: pageKeysWithRSS.home
    // },
    {
      path: "/lawnpolicy",
      title: "Pháp luật",
      pageKeysWithRSS: pageKeysWithRSS.lawnpolicy,
    },
    {
      path: "/sports",
      title: "Thể thao",
      pageKeysWithRSS: pageKeysWithRSS.sports,
    },
    {
      path: "/life",
      title: "Đời sống",
      pageKeysWithRSS: pageKeysWithRSS.life,
    },
    {
      path: "/travel",
      title: "Du lịch",
      pageKeysWithRSS: pageKeysWithRSS.travel,
    },
    {
      path: "/science",
      title: "Khoa học",
      pageKeysWithRSS: pageKeysWithRSS.science,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loadingMap.home || !isHomeDataLoaded || !minTimePassed) {
    return <LoadingPg />;
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/articles" element={<ArticlesPg />}></Route>

            {generalNewsPages.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <GeneralNewsPg
                    title={item.title}
                    pageKeyWithRSS={item.pageKeysWithRSS}
                  />
                }
              ></Route>
            ))}

            <Route path="*" element={<NotFoundPg />}></Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
