import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Style/Counter.css';

const Counter = ({ icon, end, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // duration in ms
    const incrementTime = 10; // increment time in ms
    const totalIncrements = duration / incrementTime;
    const increment = end / totalIncrements;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="counter">
      <FontAwesomeIcon icon={icon} size="3x" className="counter-icon" />
      <div className="counter-number-wrapper">
        <span className="counter-number">{count}</span>
        <span className="counter-plus">+</span>
      </div>
      <div className="counter-title">{title}</div>
    </div>
  );
};

export default Counter;
