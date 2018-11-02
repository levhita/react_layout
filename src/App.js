import React, { Component } from 'react';
import './App.css';

import Categories from './Categories';
import Posts from './Posts';
import Suggestions from './Suggestions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <img className="brand" src="assets/logo.png"/>
          <ul className="menu">
            <li>Festival</li>
            <li>Hotel</li>
            <li>Memes</li>
          </ul>
        </nav>
        
        <Categories />
        <Posts/>
        <Suggestions/>
      
      </div>
    );
  }
}

export default App;
