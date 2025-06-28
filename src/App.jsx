import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LoadingPg from "./pages/loading/LoadingPg";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

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
        <Route path="/" Component={<Home />}></Route>
        <Route path="*" Component={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
