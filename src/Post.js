import React, { Component } from 'react';
//import './Post.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.img} alt={this.props.title}/>
      </div>
    );
  }
}
  
  export default Post;
  