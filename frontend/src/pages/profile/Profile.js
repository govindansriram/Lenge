import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import NavBar from "../../components/navbar/navbar";

import "./Profile.css";

import profile from "./profile.JPG";
import profilePic from "./pic.JPG";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initTheme();
  }

  initTheme() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    theme && this.setState({ theme: theme });
  }

  render() {
    return (
      <div className="profile">
        <NavBar></NavBar>
        <header className="profile-header">
          <img className="profile-image" src={profile} alt="profile-img"></img>
          <img
            className="profilePic-image"
            src={profilePic}
            alt="profilePic-img"
          ></img>
        </header>
        <div className="profile-page">
          <h1 className="profile-name">Nanar Boursalian</h1>
          <h1 className="profile-email">nanarbb@yahoo.com</h1>
          <h1 className="profile-past">Past Workouts</h1>
          <div className="flex-item flex-container wrap-reversez">
          <Card className="card-wrapper">
            <CardBody>
              <CardTitle className="card-text-diff">Medium</CardTitle>
              <hr />
              <CardText className="card-text-time">about 55 minutes</CardText>
              <hr />
              <CardText className="card-text-exercises">5 min walk</CardText>
              <CardText className="card-text-exercises">Run 5 miles at 9 min pace</CardText>
              <CardText className="card-text-exercises">5 min walk</CardText>
            </CardBody>
          </Card>
          <Card className="card-wrapper">
            <CardBody>
              <CardTitle className="card-text-diff">Hard</CardTitle>
              <hr />
              <CardText className="card-text-time">1 hr max</CardText>
              <hr />
              <CardText className="card-text-exercises">Pushups (slow) - 25 reps x 4 sets</CardText>
              <CardText className="card-text-exercises">Sit ups (fast) - 100 reps x 4 sets</CardText>
              <CardText className="card-text-exercises">Pull ups - 8 reps x 3 sets</CardText>
            </CardBody>
          </Card>
          </div>
        </div>
      </div>
    );
  }
}
