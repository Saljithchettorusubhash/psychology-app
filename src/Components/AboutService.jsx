import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUsers,
  faSmile,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/AboutService.css";

const AboutService = () => {
  const features = [
    {
      icon: faLightbulb,
      title: "Focus On Solutions",
      description:
        "Our therapy sessions are solution-focused, helping you to identify and achieve your goals quickly and effectively.",
    },
    {
      icon: faUsers,
      title: "Professional Team",
      description:
        "Our team of licensed professionals is dedicated to providing the highest quality of care, tailored to meet your individual needs.",
    },
    {
      icon: faSmile,
      title: "Very Friendly Service",
      description:
        "We pride ourselves on creating a warm and welcoming environment where you can feel comfortable and supported.",
    },
    {
      icon: faDollarSign,
      title: "Affordable Prices",
      description:
        "We offer competitive pricing to ensure that our top-notch services are accessible to everyone.",
    },
  ];
  return (
    <div className="about-service">
      <Row>
        <Col lg={6} md={12}>
          <div className="about-service-content">
            <h2>Why Choose Our Services?</h2>
            <p>
              Our expert team provides compassionate, personalized care to
              support your mental health. Discover the unique benefits that set
              us apart and help you achieve lasting wellness. We offer a wide
              range of specialized services tailored to meet your unique needs,
              ensuring a holistic approach to your well-being. With our modern
              techniques and empathetic approach, we strive to make a positive
              difference in your life.
            </p>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <Row className="about-list">
            {features.map((feature, index) => (
              <Col md={6} className="feautre-index" key={index}>
                <div className="feautre-cards">
                  <div className="feautre-head">
                  <FontAwesomeIcon icon={feature.icon} size="3x" />
                  </div>
                  <br />
                  <br />
                  <div className="feautre-body">
                  <h3>{feature.title}</h3>
                  <br />
                  <p>{feature.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutService;
