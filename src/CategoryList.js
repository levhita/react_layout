import React, { Component } from 'react';

function CategoryList(props){
    return (
        <div className="category_list">
            <h3>{props.title}</h3>
            <ul>
                {props.items.map(item => (
                    <li><img src={'assets/'+item.icon} width="24" /> <a href={item.url}>{item.title}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;