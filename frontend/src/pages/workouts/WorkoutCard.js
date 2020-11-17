import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

import "./WorkoutCard.css";

import { useHistory } from "react-router-dom";

import { addStrength } from "../../components/UserFunctions";

export const clickStrengthCard = (props, history) => {
  addStrength(props).then(res => {
    if (res.data === "Added strength") {
      history.push("/profile");
    } else {
      console.log(res.data);
    }
  });
};


export const WorkoutCard = (props) => {
  const history = useHistory();
return(
  <div className="card-wrapper">
    <Card>
      <CardBody>
        <CardTitle className="card-text-diff">
          {props.workout.Exercise_One.Exercise}
        </CardTitle>
        <CardText className="card-text-time">
          Reps: {props.workout.Exercise_One.Reps}
        </CardText>
        <CardText className="card-text-exercises">
          Rest Time: {props.workout.Exercise_One.Rest_time}
        </CardText>
        <CardText className="card-text-exercises">
          Sets: {props.workout.Exercise_One.Sets}
        </CardText>
        <CardText className="card-text-exercises">
          Weight: {props.workout.Exercise_One.Weight}
        </CardText>
        <hr />
        <CardTitle className="card-text-diff">
          {props.workout.Exercise_Two.Exercise}
        </CardTitle>
        <CardText className="card-text-time">
          Reps: {props.workout.Exercise_Two.Reps}
        </CardText>
        <CardText className="card-text-exercises">
          Rest Time: {props.workout.Exercise_Two.Rest_time}
        </CardText>
        <CardText className="card-text-exercises">
          Sets: {props.workout.Exercise_Two.Sets}
        </CardText>
        <CardText className="card-text-exercises">
          Weight: {props.workout.Exercise_Two.Weight}
        </CardText>
        <hr />
        <CardTitle className="card-text-diff">
          {props.workout.Exercise_Three.Exercise}
        </CardTitle>
        <CardText className="card-text-time">
          Reps: {props.workout.Exercise_Three.Reps}
        </CardText>
        <CardText className="card-text-exercises">
          Rest Time: {props.workout.Exercise_Three.Rest_time}
        </CardText>
        <CardText className="card-text-exercises">
          Sets: {props.workout.Exercise_Three.Sets}
        </CardText>
        <CardText className="card-text-exercises">
          Weight: {props.workout.Exercise_Three.Weight}
        </CardText>
      </CardBody>
      <Button disabled={false} onClick={() => clickStrengthCard(props.workout, history)}>
          Add to Workouts
        </Button>
    </Card>
  </div>
)};

export default WorkoutCard;
