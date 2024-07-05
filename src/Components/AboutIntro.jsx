import React, { useEffect, useState } from 'react';
import '../Style/AboutIntro.css';

const AboutIntro = () => {
  const words = ["Therapy", "Counseling", "Wellness", "Healing", "Support"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [words.length]);

  return (
    <div className='about-intro'>
      <div className='about-image'>
        <div className='about-overlay'>
          <div className='about-text'>
            <h3>
              Transforming Lives through Expert Care in {''}
              {words[currentWordIndex]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
