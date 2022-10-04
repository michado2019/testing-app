import React from "react";
import "./Home.css";
import { homepageImg } from "../../DataBase";
import { NavLink } from "react-router-dom";

export default function Home() {

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
    <div className="homeWrapper">
        <h1 className='homeStatus-info'>Click 'Check status' box to check student's status</h1>
        <div className="homeFlex">
          <a
            href="https://thealtschool.com/software-engineering/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="homeImg-one">{data[0]}</div>
          </a>
          <a
            href="https://thealtschool.com/software-engineering/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="homeImg-two">{data[1]}</div>
          </a>
          <a
            href="https://thealtschool.com/careers/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="homeImg-three">{data[2]}</div>
          </a>
          <NavLink to="status">
            <div className="homeImg-four">{data[3]}</div>
          </NavLink>
        </div>
    </div>
  );
}