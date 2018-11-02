import React, { Component } from 'react';
//import './Post.css';

function Post (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.title}/>
    </div>
  );  
}

export default Post;
  