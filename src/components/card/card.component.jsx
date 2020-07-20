import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <p> {props.monster.id} </p>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set5&size=200x200`} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email}</p>
        <p> {props.monster.phone} </p>
    </div>
)