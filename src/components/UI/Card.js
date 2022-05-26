import React from 'react';
import './Card.css';

const Card = (props) =>{
    //any value set on the class named props
    //is added to this long string of class names
    //which is then finally set on the div inside of the card.
    const classes = 'card ' + props.className;

    return(
        <div className= {classes}>
        {props.children}
        </div>
    );
}

export default Card;