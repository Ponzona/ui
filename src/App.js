import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <header className="header">
          <div className="logo">
            <div className="logo__side logo__side_left">
              <span className="letter letter_closer">cl</span>
              <span className="letter">o</span>
            </div>
            <div className="logo__side logo__side_right">
            <span className="letter letter_rotate-s">s</span>
              <span className="letter letter_rotate-e">e</span>
            </div>
          </div>
        </header>
        <aside className="aside">
          <h2>Aside content</h2>
        </aside>
        <main className="main">
          <h1>Main content</h1>
        </main>
      </div>
    );
  }
}

export default App;
