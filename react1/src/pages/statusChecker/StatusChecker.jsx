import React, { useState, useEffect } from "react";
import "./StatusChecker.css";
import { H1 } from "../../CustomHooks";
import {
  auth,
  getRedirectResult,
  onAuthStateChanged,
} from "../../firebaseConfig";

export default function StatusChecker() {
  const studentUser = {
    "ALT/SOE/000/0000": {
      name: "Anonymous One",
      email: "anonymous1@gmail.com",
      track: "Front-end Engineering",
      status: "Good",
      paid: "$30",
      balance: "$270",
      internship: "Altschool Africa, Lagos",
    },
    "ALT/SOE/000/6666": {
      name: "Anonymous Two",
      email: "anonymous2@gmail.com",
      track: "Back-end Engineering",
      status: "Poor",
      paid: "$100",
      balance: "$200",
      internship: "Altschool Africa, Abuja",
    },
    "ALT/SOE/000/7777": {
      name: "Anonymous Three",
      email: "anonymous3@gmail.com",
      track: "Cloud Engineering",
      status: "Excellent",
      paid: "$300",
      balance: "$300",
      internship: "Altschool Africa, Ibadan",
    },
  };

  //states
  const [user, setUser] = useState({});
  const [input, setInput] = useState({});

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
        setUser({ displayName, photoURL });
      } else {
      }
    });
  }, []);

  //Handle input change
  function handleChange(e) {
    e.preventDefault();
    let changedInput = e.target.value;
    setInput(changedInput);
  }

  //Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    const student = studentUser[input];
    if (student === undefined) {
      console.log("no");
    } else {
      const { name, email, track, status, paid, balance, internship } = student;
      document.getElementById("userDetails1").innerText = `Name: ${name}`;
      document.getElementById("userDetails2").innerText = `Email: ${email}`;
      document.getElementById("userDetails3").innerText = `Track: ${track}`;
      document.getElementById("userDetails4").innerText = `Status: ${status}`;
      document.getElementById("userDetails5").innerText = `Paid: ${paid}`;
      document.getElementById("userDetails6").innerText = `Balance: ${balance}`;
      document.getElementById(
        "userDetails7"
      ).innerText = `Internship placement: ${internship}`;
    }
  }
  return (
    <div className="statusChecker-wrapper">
      <div className="statusChecker-div">
        <h1 className="statusChecker-name">Hi, {user.displayName}</h1>
        <img src={user.photoURL} alt="img" className="statusChecker-img" />
      </div>
      <div className="statusChecker-div_two">
        <H1 className="statusChecker-title">
          Enter student ID to check status
        </H1>
        <form onSubmit={handleSubmit}>
          <input
            type="text/number"
            className="statusChecker-input"
            onChange={handleChange}
          />
          <button className="statusChecker-btn">Submit</button>
        </form>
      </div>
      <div className="studentDetails-div">
        <H1>Student Details</H1>
        <br />
        <div id="userDetails1"></div>
        <div id="userDetails2"></div>
        <div id="userDetails3"></div>
        <div id="userDetails4"></div>
        <div id="userDetails5"></div>
        <div id="userDetails6"></div>
        <div id="userDetails7"></div>
        </div>
    </div>
  );
}