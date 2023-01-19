import Navbar from "./Components/Nabar/Navbar";
import Videos from "./Components/Videos/Videos";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { themeContext } from "./Contest";
import { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home/Home";

AOS.init({
  duration: 1000,
});
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;
