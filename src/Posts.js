import React, { Component } from 'react';
// import './Posts.css';
import Post from './Post';

class Posts extends Component {
  
  render() {
    return (
      <section>
        {this.props.posts.map(post => (
          <Post {...post}/>
        ))}
      </section>
    );
  }
}

export default Posts;
