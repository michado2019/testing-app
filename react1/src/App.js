import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BottomLayout, TopLayout } from "./Layout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Switch from '@mui/material/Switch';
import {DarkMode, WbSunnyOutlined} from '@mui/icons-material'
import { SignInBtn } from "./CustomHooks";

function App() {
 const [darkMode, setDarkMode] = useState(false)
const themes = {
  dark:{
    background: '#000000',
    foreground: '#ffffff'
  },
  light:{
    background: '#ffffff',
    foreground: '#eeeeee'
  }
}
const {dark, light} = themes
 //handle switch
 function toggle(e){
  e.preventDefault()
  setDarkMode(prev => !prev)
 }
  return (
    <div>
      <div className="App" 
      style={{background: darkMode ? dark.background : light.background, color: darkMode ? dark.foreground : light.foreground }}>
      <div className="homeSwitchAndSignIn-btn_div">
     <div className="homeSwitch-div">
      <DarkMode />
      <Switch onClick={toggle} />
      <WbSunnyOutlined />
      </div>
      <SignInBtn>Sign in</SignInBtn>
     </div>
        <TopLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <BottomLayout />
      </div>
    </div>
  );
}

export default App;
