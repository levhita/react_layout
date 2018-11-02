import React, { Component } from 'react';
import suggestions  from "./data/suggestions.json";

function Suggestions(props){
    return (
        <div className="suggestions">
            {suggestions.map(item => (
              <div>
              <p>{item.description}</p>
              <img src={item.img} width="250" /> 
              </div>
          ))}
        </div>
    );
}

export default Suggestions;