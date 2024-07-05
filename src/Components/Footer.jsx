import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UpdatedLogo from "../assets/UpdatedLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../Style/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-first">
        <Row>
          <Col xl={4} lg={4} md={12}>
            <div className="Logo-content">
              <img src={UpdatedLogo} alt="Logo" />
              <p>
                I am a dedicated psychotherapist specializing in
                neurodivergence, eating disorders, and emotional wellness. My
                mission is to empower individuals to navigate their unique
                paths, fostering resilience and authenticity in their lives.
              </p>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12}>
            <div className="Contact-footer">
              <h5>Contact Me</h5>
              <p>
                <FontAwesomeIcon icon={faPhone} className="icon-phone" />&nbsp; &nbsp;555.123.4567
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon-envelope" />&nbsp; &nbsp;support@aliaspencer.com
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-map" />&nbsp; &nbsp;456 Wellness Avenue,
                
              </p>
              <p>
                <FontAwesomeIcon icon={faIdBadge} className="icon-id" />&nbsp; &nbsp;License #123456
              </p>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12}>
            <div className="Follow-footer">
              <h5>Follow Me</h5>
              <br/>
              <div className="icons">
              <p>
                <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
              </p>

              <p>
                <FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" />
              </p>
              <p>
                <FontAwesomeIcon icon={faInstagram} className="icon-instagram" />
              </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <div className="copyright-section">
            <p>
              Copyright © {currentYear} Alia Psychotherapist | Powered by Artemee Web
              Services
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
