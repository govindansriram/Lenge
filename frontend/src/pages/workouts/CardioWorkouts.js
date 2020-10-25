import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';

import './CardioWorkouts.css';
import './StrengthWorkouts.css';

import cardio from './cardio.JPG';

import WorkoutCard from './WorkoutCard';

export default class CardioWorkouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardioWorkouts:
      [
        {
          difficulty: "Medium",
          time: "about 55 minutes",
          exercise1: "5 min walk",
          exercise2: "Run 5 miles at 9 min pace",
          exercise3: "5 min walk"
        },
        {
          difficulty: "Hard",
          time: "about 1 hr 30 min",
          exercise1: "5 min warm up - your choice",
          exercise2: "Run 2 miles",
          exercise3: "Swim 1000 meters"
        },
        {
          difficulty: "Easy",
          time: "about 1 hr",
          exercise1: "Burpees - 10 reps x 10 sets",
          exercise2: "100m Sprints - 2 reps x 10 sets",
          exercise3: "Walk 10m - 10 sets"
        },
        {
          difficulty: "Medium",
          time: "about 45 minutes",
          exercise1: "Hill Sprints",
          exercise2: "10 times",
          exercise3: "(Uphill Only)"
        },
        {
          difficulty: "Hard",
          time: "about 2 hours",
          exercise1: "Bike 2 miles",
          exercise2: "Run 2 miles",
          exercise3: "Swim 2 miles"
        }
      ]
    };
  }

  componentDidMount () {
    this.initTheme ()
  }

  initTheme () {
    let theme = JSON.parse(localStorage.getItem('theme'))
    theme && this.setState({theme:theme})
  }

  render() {
    let workoutCards = this.state.cardioWorkouts.map(cardioWorkouts => {
      return (
        <li className="flex-item">
          <WorkoutCard workout={cardioWorkouts} />
        </li>
      )
    })
    return (
      <div className="workouts">
      <NavBar></NavBar>
      <header className="workouts-header">
        <img className="cardio-image" src={cardio} alt="cardio-img"></img>
        <ul className="flex-container wrap-reversez">
          {workoutCards}
        </ul>
      </header>
    </div>
    )
  }
}