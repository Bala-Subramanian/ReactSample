import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card';
// import this Component in App.js
// Always start the componentname with CAPITAL letter.
export const CardListFromCard = function(props){
     return (<div className='gridclass'>
               {props.monstersCard.map(monsterdetails => //monstersCard is passed in App.js
                    <Card key={monsterdetails.id} monsters={monsterdetails}></Card>
               )}              
          </div>)
}
export const CardList = function(props){
     // console.log(props.children); // will give the child components
     return <div className='card-list'>{props.children}</div>;
};

export const CardListSingle = function(arg1){
     return <div className='card-list-single'>
          {arg1.monsters_arg1.map(monst_single=>( //monsters_arg1 is passed from app.js
               <h2 key={monst_single.id}> {monst_single.name} </h2>))}
     </div>;
} 

