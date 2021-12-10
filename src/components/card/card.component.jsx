import React from 'react';
import './card.style.css'
export const Card = props => {
  return (
    <div className='card-container'>
    <h1> {props.monsters.name} < /h1>
    </div>
  )
}
