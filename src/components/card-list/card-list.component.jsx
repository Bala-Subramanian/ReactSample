import React from 'react';
import './card-list.styles.css'

// import this Component in App.js
export const CardList = function(props){
     console.log(props);
     return <div className='card-list'>{props.children}</div>;
};