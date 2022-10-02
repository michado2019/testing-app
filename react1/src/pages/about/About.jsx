import React from "react";
import "./About.css";
import { H1 } from "../../CustomHooks";

export default function About() {
  
  return (
    <div>
      <div className="aboutDiv">
        <div className="aboutDetail">
          <H1>About</H1>
          <p>
            Hello, this is an app built for Altschool Africa students for easy
            access to their academic status in school.{" "}
          </p>
        </div>
        <img src="altschool1.webp" alt="img" className="aboutBigImg" />
      </div>
    </div>
  );
}
