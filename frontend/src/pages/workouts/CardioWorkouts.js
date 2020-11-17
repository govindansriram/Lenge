import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";

import "./CardioWorkouts.css";
import "./StrengthWorkouts.css";

import jwt_decode from "jwt-decode";

import { isLoggedIn } from "../../components/Authentication";

import cardio from "./cardio.JPG";

import CardioCard from "./CardioCard";

export default function CardioWorkouts() {

  const [cardioWorkouts, setCardioWorkouts] = useState([]);

  const token = localStorage.getItem("usertoken");
  const decodedToken = jwt_decode(token);
  const email = decodedToken.identity.email;

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/cardio:" + email + "/difficulty:medium", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response.json().then(data => {
          setCardioWorkouts(data);
        })
      );
    };
    fetchPost();
  }, []);

  let workoutCards = cardioWorkouts.map(workout => {
    return (
      <li className="flex-item">
        <CardioCard workout={workout} />
      </li>
    );
  });

  return (
    <div className="workouts">
      <NavBar logged={isLoggedIn()} />
      <header className="workouts-header">
        <img className="cardio-image" src={cardio} alt="cardio-img"></img>
        <ul className="flex-container wrap-reversez">{workoutCards}</ul>
      </header>
    </div>
  );
}
