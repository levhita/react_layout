import React, { Component } from 'react';
// import './Posts.css';
import Post from './Post';
import posts from './data/posts.json';

class Posts extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      posts: posts
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
