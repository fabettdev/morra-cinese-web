import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/common.css";
import Routing from "./routing/Routing";
import { BrowserRouter } from "react-router-dom";
// import { SpaceBackground } from "morra-cinese-components";
import { ImageBackground } from "react-native";
import { StyleSheet, Platform, Dimensions, useWindowDimensions } from "react-native";

const root = createRoot(document.getElementById("root"));


function SpaceBackground(props) {
  const { height } = useWindowDimensions();

  const imageBackgroundHeight = Platform.OS === "web" ? (height > 768 ? "100vh" : Dimensions.get("window").height) : "100%";

  return (
    <ImageBackground
      source={props.bgImage}
      style={[spaceBackgroundStyle.container, { height: imageBackgroundHeight }]}
    >
      {props.children}
    </ImageBackground>
  );

}

const spaceBackgroundStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: Platform.OS === "web" ? "100vw" : "100%",
    justifyContent: "center",
    alignItems: "center"
  },
});


root.render(
  <BrowserRouter>
    <SpaceBackground
      bgImage={require("./assets/images/welcome/background.png")}
    >
      <Routing />
    </SpaceBackground>
  </BrowserRouter>
);
