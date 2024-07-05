import React from "react";
import pauseicon from "../assets/pause_icon.png";
import playicon from "../assets/play_icon.png";
import { motion } from "framer-motion";
import "../Style/ContentSection.css";

const ContentSection = ({ imageData, count, setCount, play, setPlay }) => {
  return (
    <div className="contentSection">
      <div className="main-first">
        <div className="image-content">
          <p>{imageData}</p>
        </div>
        <div className="hero-explore">
          <br />
          <button>Book an Appointment</button>
        </div>
      </div>

      <div className="hero-dot-play">
        <div className="main-second">
          <ul className="hero-dots">
            <li
              onClick={() => setCount(0)}
              className={count === 0 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setCount(1)}
              className={count === 1 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setCount(2)}
              className={count === 2 ? "hero-dot orange" : "hero-dot"}
            ></li>
          </ul>
          <div className="play-video">
            <img
              onClick={() => setPlay(!play)}
              src={play ? pauseicon : playicon}
            />
            <p>See the video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
