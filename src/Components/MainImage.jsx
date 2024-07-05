import React, { useEffect, useState } from "react";
import Background from "./Background";
import Header from "./Header";
import ContentSection from "./ContentSection";
import '../Style/MainImage.css'; // Import the CSS file

const MainImage = () => {
  let imageData = [
    { text1: "Discover Your Path to Emotional Wellness" },
    { text1: "Transforming Lives, One Session at a Time" },
    { text1: "Empower Your Mind, Heal Your Soul" },
  ];

  const [count, setCount] = useState(0); // Start with the first image
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-image">
      <Header />
      <Background count={count} play={play} />
      <ContentSection
        imageData={imageData[count].text1}
        count={count}
        setCount={setCount}
        play={play}
        setPlay={setPlay}
      />
    </div>
  );
};

export default MainImage;
