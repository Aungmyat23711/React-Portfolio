import React from 'react';
import './style.css';
const Card = ({ emoji, heading, detail }) => {
  return (
    <div className='card'>
      <img src={emoji} alt='emoji' />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>Learn More</button>
    </div>
  );
};

export default Card;
