import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Family from '../assets/family.jpg';
import '../Style/ServiceFamily.css'

const ServiceFamily = () => {
  return (
    <div className="service-family">
      <Row>
        <Col lg={6} md={12}>
        <div className="family-image">
            <img src={Family} alt=""/>


        </div>
        </Col>
        <Col lg={6} md={12}>
       
        <div className="service-family-content">
            <h2>Strengthening Bonds with Family Therapy</h2>
            <p>
              At Aelia Psychotherapy, our Family Therapy sessions are designed
              to enhance communication, resolve conflicts, and foster a
              supportive home environment. Our experienced therapists work with
              families to understand dynamics, build stronger relationships, and
              navigate challenges together, creating a harmonious and resilient
              family unit.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceFamily;
