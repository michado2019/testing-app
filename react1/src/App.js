import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BottomLayout, TopLayout } from "./Layout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

//Mode useContext
const themes = {
  light: {
    foreground: "000000",
    background: "",
  },
  dark: {
    foreground: "#f2f2f2",
    background: "#22222a",
  },
};

//create context
export const ThemesContext = createContext(themes.light);

function App() {
 const [darkMode, setDarkMode] = useState(false)
 const value = darkMode ? themes.dark : themes.light
 const toggle = () => {
  setDarkMode(prev => !prev)
 }
  return (
    <ThemesContext.Provider value={value}>
      <div className="App">
        <TopLayout />
        <Routes>
          <Route path="/" element={<Home toggle={toggle}/>} />
          <Route path="/about" element={<About toggle= {toggle}/>} />
        </Routes>
        <BottomLayout />
      </div>
    </ThemesContext.Provider>
  );
}

export default App;
