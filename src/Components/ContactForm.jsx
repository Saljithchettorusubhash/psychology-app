import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/ContactForm.css";
import Button from "./Button";

// Fix the default icon issue with react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ContactForm = () => {
  const position = [51.505, -0.09]; // Replace with your desired coordinates

  return (
    <div className="contact-form-container">
      <Row className="contact-form-row">
        <Col lg={6} md={12}>
          <div className="mail-form">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter the subject"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <Button text="Submit" className="primary" />
            </form>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="contact-page-card">
            <div className="contact-card-title">
              <h5>Dublin Location</h5>
              <br />
              <h5>
                424 E. Yosemite Ave, Suite C<br />
                Merced, CA 95340
              </h5>
            </div>
            <div className="contact-card-body">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 3009 Stratofortress
                Dr, Suite
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> (209) 726-9000
              </p>
              <p>
                <FontAwesomeIcon icon={faFax} /> (209) 385-3738
              </p>
              <br />
              <Button text="Visit" className="primary"  />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="contact-form-location mb-5">
        <Col lg={6} md={12}>
          <div className="map-location">
            <MapContainer
              center={position}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>Our Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="time-schedule">
            <h2>Find us on map</h2>
            <p>
              Discover your path to wellness with our expert services and
              compassionate care. Our team of professionals is dedicated to
              helping you achieve emotional and mental well-being.
            </p>
            <div className="social-media">
              <p>
                <FontAwesomeIcon icon={faInstagram} /> @aliapsychotherapist
              </p>
              <p>
                <FontAwesomeIcon icon={faFacebook} /> @aliapsychotherapist
              </p>
              <p>
                <FontAwesomeIcon icon={faTwitter} /> @aliapsychotherapist
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
