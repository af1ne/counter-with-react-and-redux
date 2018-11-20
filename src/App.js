import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CounterContainer from './CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logos">
            <img src={logo} className="App-logo" alt="logo" />
            <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" className="App-logo" alt="logo" />
          </div>
          <p>
            Un compteur react avec redux :
          </p>
        </header>
        <CounterContainer />
      </div>
    );
  }
}

export default App;
