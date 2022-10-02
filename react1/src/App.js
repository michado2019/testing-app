import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BottomLayout, TopLayout } from "./Layout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Switch from "@mui/material/Switch";
import { DarkMode, WbSunnyOutlined } from "@mui/icons-material";
import { provider, auth, signInWithRedirect } from "./firebaseConfig";
import StatusChecker from "./pages/statusChecker/StatusChecker";
import UserNotSignedIn from "./UserNotSignedIn";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [signedOut, setSignedOut] = useState(false);

  //Themes
  const themes = {
    dark: {
      background: "#000000",
      foreground: "#ffffff",
    },
    light: {
      background: "#ffffff",
      foreground: "#eeeeee",
    },
  };
  const { dark, light } = themes;

  //handle switch
  function toggle(e) {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  }

  //Handle sign in
  function handleSignIn() {
    signInWithRedirect(auth, provider);
  }

  //Handle sign out
  const handleSignOut = () => {
    auth.signOut();
    setSignedOut(true);
  };

  return (
    <div>
      <div
        className="App"
        style={{
          background: darkMode ? dark.background : light.background,
          color: darkMode ? dark.foreground : light.foreground,
        }}
      >
        <div className="appSwitchAndSignIn-btn_div">
          <div className="appSwitch-div">
            <DarkMode />
            <Switch onClick={toggle} />
            <WbSunnyOutlined />
          </div>
          <div className="appBtns-div">
            {signedOut ? (
              <div>
                <button onClick={handleSignIn} className="signIn-button">
                  Sign in
                </button>
              </div>
            ) : (
              <button onClick={handleSignOut} className="signOut-button">
                Signout
              </button>
            )}
          </div>
        </div>
        <TopLayout />
        {signedOut ? (
          <UserNotSignedIn />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/status" element={<StatusChecker />} />
          </Routes>
        )}
        <BottomLayout />
      </div>
    </div>
  );
}
export default App;
