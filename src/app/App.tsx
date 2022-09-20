import "./styles/index.scss";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/ui";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { SideBar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};
