import React, { Component } from 'react';
import CategoryList from "./CategoryList";
import popular from "./data/popular.json";
import favorites from "./data/favorites.json";
import sections from "./data/sections.json";

function Categories(){
    return ( 
        <aside>
            <CategoryList title="Popular" items={popular}/>
            <CategoryList title="Favorites" items={favorites}/>
            <CategoryList title="Favorites" items={sections}/>
        </aside>
    );
}

export default Categories;