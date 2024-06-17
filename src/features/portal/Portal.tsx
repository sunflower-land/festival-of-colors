/**
 * Entry Point to Portal App
 * Include any initialisation logic, stylesheets + more here.
 */
import React from "react";
import "src/styles.css";

import { initialise } from "lib/utils/init";

import { FestivalOfColorsApp } from "./examples/festivalOfColors/FestivalOfColors";

initialise();

export const PortalApp: React.FC = () => {
  // Return your app
  return <FestivalOfColorsApp />;
};
