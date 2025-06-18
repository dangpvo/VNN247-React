import React from "react";
import Header from "./components/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
