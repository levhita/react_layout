import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';

class App extends Component {
  
  
  render() {
    const posts = [
      {
        title: "DMV costume",
        img:"https://img-9gag-fun.9cache.com/photo/apm0YLE_460s.jpg"
      },
      {
        title: "Small human being a bro!",
        img: "https://img-9gag-fun.9cache.com/photo/arG4Bj6_460s.jpg"
      },
      {
        title: "Happy Halloween",
        img: "https://img-9gag-fun.9cache.com/photo/a2ZYbdd_460s.jpg"
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h1>FSL GAG</h1>
        </header>

        <Posts posts={posts}/>
      
      </div>
    );
  }
}

export default App;
