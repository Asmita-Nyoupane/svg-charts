import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DThreeApp from "./App-d3.jsx";
import RechartApp from "./Rechart-App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <DThreeApp /> */}
    <RechartApp />
  </StrictMode>
);
