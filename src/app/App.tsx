import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/ui";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { SideBar } from "widgets/sidebar";
import { Suspense, useEffect, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
