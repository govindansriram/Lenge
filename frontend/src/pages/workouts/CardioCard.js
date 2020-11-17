import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

import { useHistory } from "react-router-dom";

import "./CardioCard.css";

import { addCardio } from "../../components/UserFunctions";

export const clickCardioCard = (props, history) => {
  addCardio(props).then(res => {
    if (res.data === "Added cardio") {
      history.push("/profile");
    } else {
      console.log(res.data);
    }
  });
};

export const CardioCard = (props) => {
  const history = useHistory();
  return (
    <div className="card-wrapper">
      <Card>
        <CardBody>
          <CardTitle className="card-text-diff">
            {props.workout.Exercise_One}
          </CardTitle>
          <CardTitle className="card-text-diff">
            {props.workout.Exercise_Two}
          </CardTitle>
          <CardTitle className="card-text-diff">
            {props.workout.Exercise_Three}
          </CardTitle>
          <hr />
          <CardText className="card-text-exercises">
            Sets: {props.workout.Circuit_sets}
          </CardText>
        </CardBody>
        <Button disabled={false} onClick={() => clickCardioCard(props.workout, history)}>
          Add to Workouts
        </Button>
      </Card>
    </div>
  );
};

export default CardioCard;
