import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  preventDefault = ( event ) => {
    event.preventDefault();
    event.stopPropagation();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <form
            class="box upload-box"
            method="post"
            action=""
            enctype="multipart/form-data"
          >
          <div class="box__input">
            <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
            <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
            <button class="box__button" type="submit">Upload</button>
          </div>
          <div class="box__uploading">Uploading&hellip;</div>
          <div class="box__success">Done!</div>
          <div class="box__error">Error! <span></span>.</div>
        </form>

      </div>
    );
  }
}

export default App;
