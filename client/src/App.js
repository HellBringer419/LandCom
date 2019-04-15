import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BlockChainInteractor from './BlockChainInteractor';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <BlockChainInteractor />
      </div>
    );
  }
}

export default App;
