import React from 'react';
import './Home.css';
import NavBar from '../../components/navbar/navbar';

function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
