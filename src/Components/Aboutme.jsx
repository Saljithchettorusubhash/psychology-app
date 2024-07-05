import React from "react";
import Therapist from "../assets/Therapist.jpg";
import "../Style/AboutMe.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "./Button";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className="therapist">
            <img src={Therapist} alt="" />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="about-content">
            <h2>So, who am I?</h2>
            <p>
              Hello! I'm Alia, a psychotherapist with over a decade of
              experience in helping individuals navigate life's challenges. My
              empathetic and understanding approach is rooted in a genuine
              desire to see my clients thrive. Specializing in
              cognitive-behavioral therapy, I empower clients to uncover their
              strengths and develop new coping strategies for issues like
              anxiety, depression, and relationship challenges. I also advocate
              for mental health awareness, integrating mindfulness and self-care
              into my practice. Outside of work, I enjoy nature, yoga, and
              reading. Let's embark on this journey together to unlock your best
              self. Reach out today to start making positive changes in your
              life!
            </p>
            <br />
            <Button text="Contact Me" className="primary align-left" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Aboutme;
