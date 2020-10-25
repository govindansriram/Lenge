import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Redirect } from 'react-router-dom'

import './WorkoutCard.css';

export default class WorkoutCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/profile' />
    }
  }

  render() {
    return (

      <div className='card-wrapper'>
        {this.renderRedirect()}
        <Card onClick={this.setRedirect}>;
          <CardBody>
            <CardTitle className="card-text-diff">{this.props.workout.difficulty}</CardTitle>
            <hr/>
            <CardText className="card-text-time">{this.props.workout.time}</CardText>
            <hr/>

            {/* map this later */}
            <CardText className="card-text-exercises">{this.props.workout.exercise1}</CardText>
            <CardText className="card-text-exercises">{this.props.workout.exercise2}</CardText>
            <CardText className="card-text-exercises">{this.props.workout.exercise3}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}