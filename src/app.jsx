import React from "react";
import { createRoot } from "react-dom/client";
import HeaderComponent from "./HeaderComponent";
import DoaComponent from "./DoaComponent";
import GroomBridesComponent from "./GroomBridesComponent";
import TimeDataComponent from "./TimeDateComponent";
import ResepsiAkadComponent from "./ResepsiAkadComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderComponent />
    <DoaComponent />
    <GroomBridesComponent />
    <TimeDataComponent />
    <ResepsiAkadComponent />
  </React.StrictMode>
);
