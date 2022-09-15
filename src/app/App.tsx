import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Navbar } from "../widgets/components/Navbar";
import { Suspense } from "react";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/ui";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
