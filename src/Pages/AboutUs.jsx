import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutIntro from "../Components/AboutIntro";
import AboutSecond from "../Components/AboutSecond";
import CounterSection from "../Components/CounterSec";
import Aboutme from '../Components/Aboutme'
import AboutCounter from "../Components/AboutCounter";
import AboutService from "../Components/AboutService";
import AboutStory from "../Components/AboutStory";
import AboutAlia from "../Components/AboutAlia";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutIntro/>
      <AboutCounter/>
<Aboutme/>
      <AboutSecond/>
      <AboutService/>
      <AboutStory/>
      <AboutAlia/>
      <Footer />
    </div>
  );
};

export default AboutUs;
