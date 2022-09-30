import React, { useContext } from "react";
import Switch from '@mui/material/Switch';
import {DarkMode, WbSunnyOutlined} from '@mui/icons-material'
import "./Home.css";
import { homepageImg } from "../../DataBase";
import { ThemesContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function Home(props) {

 //switch useContext
 const themes = useContext(ThemesContext)
 //Destructuring themes and props
 const {foreground, background} = themes
 const {toggle} = props

  const data = homepageImg.map((item) => {
    return (
      <div key={item.id} className="homeImg-div">
        <div>
          <img src={item.img} alt="img" className="homeImg" />
          <h1 className="homeClick">Click</h1>
        </div>
        <h1 className="homeBottom-text">{item.bottomText}</h1>
      </div>
    );
  });
  return (
    <div className="homeWrapper" style={{background: background, color: foreground}}>
      <div className="homeSwitch-div">
      <DarkMode />
      <Switch onClick={toggle}/>
      <WbSunnyOutlined />
      </div>
      <div className="homeFlex">
      <a href="https://thealtschool.com/software-engineering/" 
      target='_blank' rel='noreferrer'>
      <div className="homeImg-one">{data[0]}</div>
      </a>
      <a href="https://thealtschool.com/software-engineering/" 
      target='_blank' rel='noreferrer'>
      <div className="homeImg-two">{data[1]}</div>
      </a>
      <a href="https://thealtschool.com/careers/" 
      target='_blank' rel='noreferrer'>
      <div className="homeImg-three">{data[2]}</div>
      </a>
      <NavLink to='/welcomepage'>
      <div className="homeImg-four">{data[3]}</div>
      </NavLink>
      </div>
    </div>
  );
}
