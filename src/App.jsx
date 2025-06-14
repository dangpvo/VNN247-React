import React from "react";
import Header from "./components/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </>
  );
};

export default App;
