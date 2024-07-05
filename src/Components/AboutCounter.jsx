import React from "react";
import Row from "react-bootstrap/esm/Row";
import CounterSec from "./CounterSec";
import Col from "react-bootstrap/esm/Col";
import "../Style/AboutCounter.css";

const AboutCounter = () => {
  return (
    <div className="about-counter">
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className="counting">
            <CounterSec />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="about-counter-content">
            <h2>Why Choose Aelia Psychotherapy?</h2>
            <p>
              At Aelia Psychotherapy, we are dedicated to providing
              compassionate and effective mental health services. Our team of
              experienced therapists offers personalized care tailored to meet
              the unique needs of each client. Whether you seek individual
              therapy, family counseling, or mental health assessments, we are
              here to support your journey towards emotional well-being and
              resilience. Our evidence-based approaches and innovative
              techniques ensure the highest quality of care, helping you achieve
              your personal goals and improve your overall quality of life.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutCounter;
