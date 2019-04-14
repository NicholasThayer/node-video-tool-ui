import React, { Component } from 'react';
import FileDrop from 'react-file-drop';
import logo from './logo.svg';
import './App.css';
import './file-drop.css';

class App extends Component {
  handleDrop = (files, evt) => {
    console.log('handleDrop', files, evt);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div className="file-drop-box">
          <FileDrop onDrop={this.handleDrop}>
            drop files!
          </FileDrop>
        </div>
      </div>
    );
  }
}

export default App;
