import React, { useState, useEffect } from "react";
import "./StatusChecker.css";
import { H1 } from "../../CustomHooks";
import {
  auth,
  getRedirectResult,
  onAuthStateChanged,
} from "../../firebaseConfig";

export default function StatusChecker() {

  //states
  const [user, setUser] = useState({})
  //Handle redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  //Get signedIn user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL } = user;
        setUser({displayName, photoURL})
      } else {
      }
    });
  }, []);

  
  return (
    <div className="statusChecker-wrapper">
            <div className="statusChecker-div">
              <h1 className="statusChecker-name">Hi, {user.displayName}</h1>
              <img src={user.photoURL} alt='img' className="statusChecker-img" />
            </div>
            <H1 className="statusChecker-title">
              Enter student ID to check status
            </H1>
            <input type="text/number" className="statusChecker-input" />
            <button className="statusChecker-btn">Submit</button>
    </div>
  );
}
