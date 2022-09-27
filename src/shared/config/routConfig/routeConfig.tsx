import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFound404 } from "pages/NotFound404";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOTFOUND = "notFount",
}

export const RoutPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOTFOUND]: "/*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutPath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutPath.about, element: <AboutPage /> },
  [AppRoutes.NOTFOUND]: { path: RoutPath.notFount, element: <NotFound404 /> },
};
