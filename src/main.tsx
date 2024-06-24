import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CONFIG } from "lib/config";
import { PortalApp } from "features/portal/PortalApp";
import { FestivalOfColorsApp } from "features/portal/examples/festivalOfColors/FestivalOfColors";

// TODO - tree shaking to minimise bundle size
if (CONFIG.PORTAL_APP) {
  ReactDOM.render(
    <React.StrictMode>
      <FestivalOfColorsApp />
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  // Main Game
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
