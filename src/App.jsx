import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LoadingPg from "./pages/loading/LoadingPg";
import NotFoundPg from "./pages/notFoundPg/NotFoundPg";
import GeneralNewsPg from "./pages/generalNewsPg/GeneralNewsPg";
import ArticlesPg from "./pages/articlesPg/ArticlesPg";

const App = () => {
  const [loading, setLoading] = useState(true);

  const generalNewsPages = [
    {
      path: "/news",
      title: "Thời sự",
    },
    {
      path: "/international",
      title: "Thế giới",
    },
    {
      path: "/economy",
      title: "Kinh tế",
    },
    {
      path: "/education",
      title: "Giáo dục",
    },
    {
      path: "/health",
      title: "Sức khỏe",
    },
    {
      path: "/entertainment",
      title: "Giải trí",
    },
    {
      path: "/jobs",
      title: "Việc làm",
    },
    {
      path: "/ennews",
      title: "Tin tiếng Anh",
    },
    {
      path: "/lawnpolicy",
      title: "Pháp luật",
    },
    {
      path: "/sports",
      title: "Thể thao",
    },
    {
      path: "/life",
      title: "Đời sống",
    },
    {
      path: "/travel",
      title: "Du lịch",
    },
    {
      path: "/science",
      title: "Khoa học",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPg />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<ArticlesPg />}></Route>

        {generalNewsPages.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<GeneralNewsPg title={item.title} />}
          ></Route>
        ))}

        <Route path="*" element={<NotFoundPg />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
