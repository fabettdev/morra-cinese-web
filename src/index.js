import React from "react";
import { createRoot } from "react-dom/client";
// Styles
import "./styles/common.css";
// Routing
import Routing from "./routing/Routing";
import { BrowserRouter } from "react-router-dom";
// Components
import { SpaceBackground } from "morra-cinese-components";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SpaceBackground
      bgImage={require("./assets/images/welcome/background.png")}
    >
      <Routing />
    </SpaceBackground>
  </BrowserRouter>
);
