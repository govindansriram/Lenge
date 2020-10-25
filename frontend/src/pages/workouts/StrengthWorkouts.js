import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';

import './StrengthWorkouts.css';

import strength from './strength.JPG';
import WorkoutCard from './WorkoutCard';

export default class StrengthWorkouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strengthWorkouts:
      [
        {
          difficulty: "Medium",
          time: "1 hr 30 min max",
          exercise1: "Benchpress Bodyweight - 10 reps x 5 sets",
          exercise2: "Squat 2x Bodyweight - 3 reps x 3 sets",
          exercise3: "Deadlift 2.5x Bodyweight - 5 reps x 1 set"
        },
        {
          difficulty: "Hard",
          time: "1 hr 30 min max",
          exercise1: "OHP - 0.65 1RMx15reps, 0.75 1RMx10reps, 0.9 1RMx5reps",
          exercise2: "Front Squat 225 - 20 reps",
          exercise3: "Romanian Deadlift - 15 reps x 3 sets"
        },
        {
          difficulty: "Hard",
          time: "1 hr max",
          exercise1: "Pushups (slow) - 25 reps x 4 sets",
          exercise2: "Sit ups (fast) - 100 reps x 4 sets",
          exercise3: "Pull ups - 8 reps x 3 sets"
        },
        {
          difficulty: "Easy",
          time: "1 hr 30 min max",
          exercise1: "Circuit:",
          exercise2: "Dumbell Benchpress -- Dumbell OHP -- Dumbells Rows",
          exercise3: "All to Failure x 5 sets"
        },
        {
          difficulty: "Medium",
          time: "1 hr max",
          exercise1: "Diamond Pushups - max x 3 sets",
          exercise2: "Bicep Curls - 15 reps x 3 sets",
          exercise3: "Chiin Ups - 6 reps x 3 sets"
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
    let workoutCards = this.state.strengthWorkouts.map(strengthWorkouts => {
      return (
        <li className="flex-item">
          <WorkoutCard workout={strengthWorkouts} />
        </li>
      )
    })
    return (
      <div className="workouts">
      <NavBar></NavBar>
      <header className="workouts-header">
        <img className="strength-image" src={strength} alt="strength-img"></img>
        <ul className="flex-container wrap-reversez">
          {workoutCards}
        </ul>
      </header>
    </div>
    )
  }
}
