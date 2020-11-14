import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Redirect } from "react-router-dom";

import "./WorkoutCard.css";

export const WorkoutCard = props => (
  <div className="card-wrapper">
    {/* {this.renderRedirect()} */}
    <Card>
      <CardBody>
        <CardTitle className="card-text-diff">
          {props.workout.exercise1}
        </CardTitle>
        <CardText className="card-text-time">
          Reps: {props.workout.rep1}
        </CardText>
        <CardText className="card-text-exercises">
          Rest Time: {props.workout.restTime1}
        </CardText>
        <CardText className="card-text-exercises">
          Sets: {props.workout.set1}
        </CardText>
        <CardText className="card-text-exercises">
          Weight: {props.workout.weight1}
        </CardText>
        <hr />
        <CardTitle className="card-text-diff">
          {props.workout.exercise2}
        </CardTitle>
        <CardText className="card-text-time">
          Reps: {props.workout.rep2}
        </CardText>
        <CardText className="card-text-exercises">
          Rest Time: {props.workout.restTime2}
        </CardText>
        <CardText className="card-text-exercises">
          Sets: {props.workout.set2}
        </CardText>
        <CardText className="card-text-exercises">
          Weight: {props.workout.weight2}
        </CardText>
        <hr />
        <CardTitle className="card-text-diff">
          {props.workout.exercise3}
        </CardTitle>
        <CardText className="card-text-time">
          Reps: {props.workout.rep3}
        </CardText>
        <CardText className="card-text-exercises">
          Rest Time: {props.workout.restTime3}
        </CardText>
        <CardText className="card-text-exercises">
          Sets: {props.workout.set3}
        </CardText>
        <CardText className="card-text-exercises">
          Weight: {props.workout.weight3}
        </CardText>
      </CardBody>
    </Card>
  </div>
);

export default WorkoutCard;
