import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import { App } from "./App";
import { ThemeProvider } from "./components/theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
