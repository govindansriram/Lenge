import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Redirect } from "react-router-dom";

import "./CardioCard.css";

export const CardioCard = props => (
  <div className="card-wrapper">
    {/* {this.renderRedirect()} */}
    <Card>
      <CardBody>
        <CardTitle className="card-text-diff">
          {props.workout.exercise1}
        </CardTitle>
        <CardTitle className="card-text-diff">
          {props.workout.exercise2}
        </CardTitle>
        <CardTitle className="card-text-diff">
          {props.workout.exercise3}
        </CardTitle>
        <hr />
        <CardText className="card-text-exercises">
          Sets: {props.workout.sets}
        </CardText>
      </CardBody>
    </Card>
  </div>
);

export default CardioCard;
