import React from 'react';
import Card from '../card/Card'
import './CardHolder.css'

const CardHolder = (props) => {
    const subscriptions = props.subscriptions
    return (
        <div className='cardHolder'>
            {subscriptions.map(item => <Card info={item} />)}
        </div>
    );
};

export default CardHolder;