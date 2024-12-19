import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@natscale/react-calendar/dist/main.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import "@theme-toggles/react/css/[toggle name].css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>
  </StrictMode>
);
