import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Navbar } from "./components/Navbar";
import { Suspense, useContext, useState } from "react";
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { useTheme } from "./components/theme/useTheme";
import { classNames } from "./components/halpers/classNames/classNames";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
