import React from 'react';
import './Card.css'

const Card = (props) => {
    let info = props.info
    let cardStyle= info.name === 'Professional' ? 'card featured' : 'card'
    return (
        <div className={cardStyle}>
            <h3>{info.name}</h3>
            <h1>{props.annual ? info.monthlyPrice : info.yearlyPrice}</h1>
            <hr />
          {info.features.map(item => {
                return <><h3>{item}</h3> <hr /></>
              }
          )}
            <button>LEARN MORE</button>
        </div>
    );
};

export default Card;