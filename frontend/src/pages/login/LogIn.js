import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';

import './LogIn.css';

import login from './login.JPG';

export default class LogIn extends Component {
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
      <div className="login">
      <NavBar></NavBar>
      <header className="login-header">
        <img className="login-image" src={login} alt="login-img"></img>
      </header>
    </div>
    )
  }
}