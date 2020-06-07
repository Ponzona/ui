import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <header className="app__header">
          <div className="logo">
            <div className="logo__side logo__side_left"></div>
            <div className="logo__side logo__side_right"></div>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
