import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Couples from "../assets/Couples.jpg";
import "../Style/ServiceRelation.css";

const ServiceRelation = () => {
  return (
    <div className="service-relation">
      <Row>
        <Col lg={6} md={12}>
          <div className="realtion-image">
            <img src={Couples} alt="" />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="relation-content">
            <h2>Rediscover Connection</h2>
            <p>
              At Aelia Psychotherapy, our Couples Therapy sessions are designed
              to help you and your partner navigate the complexities of your
              relationship. Through personalized, compassionate, and
              evidence-based approaches, we aim to foster deeper understanding,
              resolve conflicts, and enhance emotional and physical intimacy.
              Let us guide you towards a more fulfilling and resilient
              partnership.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceRelation;
