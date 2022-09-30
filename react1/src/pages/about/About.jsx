import React, {useContext} from "react";
import "./About.css";
import { H1 } from "../../CustomHooks";
import Switch from '@mui/material/Switch';
import {DarkMode, WbSunnyOutlined} from '@mui/icons-material'
import { ThemesContext } from "../../App";

export default function About(props) {

   //switch useContext
 const themes = useContext(ThemesContext)
 //Destructuring themes and props
 const {foreground, background} = themes
 const {toggle} = props
  return (
    <div style={{background: background, color: foreground}}>
       <div className="homeSwitch-div">
      <DarkMode />
      <Switch onClick={toggle}/>
      <WbSunnyOutlined />
      </div>
      <div className="aboutDiv" style={{background: background, color: foreground}}>
        <div className="aboutDetail">
          <H1>About</H1>
          <p>Hello, this is an app built for Altschool Africa students for easy access to their academic status in school. </p>
        </div>
        <img src="altschool1.webp" alt="img" className="aboutBigImg" />
      </div>
    </div>
  );
}
