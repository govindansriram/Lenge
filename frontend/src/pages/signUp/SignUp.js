import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';

import './SignUp.css';

import signup from './signup.JPG';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.initTheme ()
  }

  initTheme () {
    let theme = JSON.parse(localStorage.getItem('theme'))
    theme && this.setState({theme:theme})
  }

  render() {
    return (
      <div className="signup">
      <NavBar></NavBar>
      <header className="signup-header">
        <img className="signup-image" src={signup} alt="signup-img"></img>
      </header>
    </div>
    )
  }
}