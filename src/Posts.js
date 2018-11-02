import React, { Component } from 'react';
// import './Posts.css';
import Post from './Post';
import postsJson from './postsJson';

class Posts extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      posts: postsJson
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
