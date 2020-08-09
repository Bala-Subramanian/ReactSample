import React from 'react';
import './card.css';

export const Card = function(props){
    return (
    <div className='card-container'>
        <img alt='monsters' src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x150`}></img>
        <h1>{props.monsters.name}</h1>
        <h1>{props.monsters.email}</h1>
    </div>)
}
// export const Card = function(props){
//     return <div className='card-list-from-card'>
//     {props.monsters.map(monst_single=>( //monsters_arg2 is passed from app.js
//          <h2 key={monst_single.id}> {monst_single.name} </h2>
//          ))}
//     </div>;
// }