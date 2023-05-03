import { Routes, Route } from "react-router-dom";
import Welcome from "../screens/welcome/Welcome";
import Game from "../screens/game/Game";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default Routing;
