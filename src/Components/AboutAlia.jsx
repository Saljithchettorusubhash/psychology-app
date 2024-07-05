import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Alia from "../assets/Alia-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../Style/AboutAlia.css";

const AboutAlia = () => {
  return (
    <div className="about-alia-container">
      <Row>
        <Col lg={6} md={12}>
          <div className="about-alia-image">
            <div className="alia-image-container">
              <img src={Alia} alt="Dr. Alia Johnson" />
            </div>
            <div className="alia-bio-description">
              <h4>Dr. Alia Johnson</h4>
              <p>Senior Therapist</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                michael.brown@aliapsychotherapy.com
              </p>
              <p>
                <FontAwesomeIcon icon={faInstagram} /> @michaelbrownLPC
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +1 212 555 0505
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="description-alia">
            <p>
              Dr. Alia Smith is a dedicated and compassionate licensed
              psychotherapist with over a decade of experience in the mental
              health field. Specializing in individual therapy, family
              counseling, and mental health assessments, Dr. Smith is committed
              to helping her clients navigate their emotional challenges and
              achieve personal growth. Outside of her practice, Dr. Smith is an
              avid advocate for mental health awareness, frequently sharing
              insights and advice on social media platforms. Her passion for
              helping others extends beyond her office, as she actively
              participates in community outreach programs and mental health
              initiatives.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutAlia;
