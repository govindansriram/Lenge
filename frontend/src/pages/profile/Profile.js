import React, { Component, useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import NavBar from "../../components/navbar/navbar";

import "./Profile.css";

import profile from "./profile.JPG";
import profilePic from "./pic.JPG";

export default function Profile() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/users:nanarb@gmail.com", {
        method: "GET",
        mode: "cors",
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response =>
        response.json().then(data => {
          setName(data.first_name);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/users:nanarb@gmail.com", {
        method: "GET",
        mode: "cors",
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response =>
        response.json().then(data => {
          setLastName(data.last_name);
        })
      );
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://localhost:8000/users:nanarb@gmail.com", {
        method: "GET",
        mode: "cors",
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response =>
        response.json().then(data => {
          setEmail(data.email);
        })
      );
    };
    fetchPost();
  }, []);

  return (
    <div className="profile">
      <NavBar></NavBar>
      <header className="profile-header">
        <img className="profile-image" src={profile} alt="profile-img"></img>
      </header>
      <div className="profile-page">
        <img
          className="profilePic-image"
          src={profilePic}
          alt="profilePic-img"
        ></img>
        <h1 style={{marginTop: 30}}>{name} {lastName}</h1>
        <h1 style={{fontSize: 30}}>{email}</h1>
        <hr />
        <h1>Past Workouts</h1>
      </div>
    </div>
  );
}

// export default class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then(response => response.json())
//       .then(data => console.log(data))
//   }

//   initTheme() {
//     let theme = JSON.parse(localStorage.getItem("theme"));
//     theme && this.setState({ theme: theme });
//   }

//   render() {
//       return (
//     <div className="profile">
//     <NavBar></NavBar>
//     <header className="profile-header">
//       <img className="profile-image" src={profile} alt="profile-img"></img>
//     </header>
//     <div className="profile-page">
//       <img
//         className="profilePic-image"
//         src={profilePic}
//         alt="profilePic-img"
//       ></img>
//       {/* <h1>{name}</h1>
//       <h1>{lastName}</h1>
//       <h1>{email}</h1> */}
//       <h1>Above should be the information.</h1>
//     </div>
//   </div>
// );
//   }
// }
