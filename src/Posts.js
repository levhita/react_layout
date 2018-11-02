import React, { Component } from 'react';
// import './Posts.css';
import Post from './Post';

class Posts extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      posts: [
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
      ]
    };
  
  }

  render() {
    return (
      <section>
        {this.state.posts.map(post => (
          <Post {...post}/>
        ))}
      </section>
    );
  }
}

export default Posts;
