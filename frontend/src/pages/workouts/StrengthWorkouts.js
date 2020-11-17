import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar";

import "./StrengthWorkouts.css";

import jwt_decode from "jwt-decode";

import { isLoggedIn } from "../../components/Authentication";

import strength from "./strength.JPG";
import WorkoutCard from "./WorkoutCard";

export default function StrengthWorkouts() {

  const [strengthWorkouts,setStrengthWorkouts] = useState([]);

  const token = localStorage.getItem("usertoken");
  const decodedToken = jwt_decode(token);
  const email = decodedToken.identity.email;

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/email:" + email + "/difficulty:medium", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setStrengthWorkouts(data);
        })
      );
    };
    fetchPost();
  }, []);


  let workoutCards = strengthWorkouts.map(workout => {
    return (
      <li className="flex-item">
        <WorkoutCard workout={workout} />
      </li>
    );
  });

  return (
    <div className="workouts">
      <NavBar logged={isLoggedIn()} />{" "}
      <header className="workouts-header">
        <img className="strength-image" src={strength} alt="strength-img"></img>
        <ul className="flex-container wrap-reversez">{workoutCards}</ul>
      </header>
    </div>
  );
}
