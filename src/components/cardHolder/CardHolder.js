import React from 'react';
import Card from '../card/Card'
import './CardHolder.css'

const CardHolder = (props) => {
    const subscriptions = props.subscriptions
    return (
        <div className='cardHolder'>
            {subscriptions.map(item => <Card info={item} annual={props.isChecked} />)}
        </div>
    );
};

export default CardHolder;