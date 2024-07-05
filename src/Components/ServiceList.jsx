import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faHeart,
  faChild,
  faComments,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import '../Style/ServiceList.css'

const services = [
  {
    title: "Individual Therapy",
    description:
      "Personalized one-on-one therapy sessions aimed at addressing and managing personal mental health issues, enhancing self-awareness, and fostering emotional growth.",
    icon: faUser,
  },
  {
    title: "Family Counseling",
    description:
      "Comprehensive counseling services designed to improve communication and resolve conflicts within families, promoting a healthier and more supportive home environment.",
    icon: faUsers,
  },
  {
    title: "Couples Therapy",
    description:
      "Specialized therapy sessions for couples to strengthen their relationship, address issues, and enhance emotional and physical intimacy.",
    icon: faHeart,
  },
  {
    title: "Child and Adolescent Therapy",
    description:
      "Focused therapy for children and adolescents to address emotional, behavioral, and mental health issues, promoting healthy development and coping strategies.",
    icon: faChild,
  },
  {
    title: "Group Therapy",
    description:
      "Facilitated group sessions where individuals with similar issues can share experiences, offer support, and learn from one another under the guidance of a licensed therapist.",
    icon: faComments,
  },
  {
    title: "Teletherapy",
    description:
      "Convenient and accessible therapy sessions conducted remotely via video or phone, allowing clients to receive professional help from the comfort of their own homes.",
    icon: faVideo,
  },
];

const ServiceList = () => {
  return (
    <div className="service-list">
      <Row>
        <Col lg={5} md={12} sm={12}>
          <div className="list-services">
            <h2>Our Comprehensive Services</h2>
            <p>
              At Aelia Psychotherapy, we offer a wide range of therapeutic
              services designed to meet the unique needs of each individual. Our
              experienced team is dedicated to providing compassionate and
              personalized care to help you achieve your mental health and
              wellness goals. Explore our services and discover how we can
              support you on your journey to well-being
            </p>
          </div>
        </Col >
        <Col className="therapy-service" lg={7} md={12} sm={12}>
          <Row className="first-service-row">
            {services.slice(0, 3).map((service, index) => (
              <Col lg={4} md={4} sm={12} key={index} className="service-first-col">
                <div className="service-list-card" key={index}>
                  <div className="service-list-title">
                    <FontAwesomeIcon icon={service.icon} size="3x" />
                    <div className="service-list-body">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="second-service-row"> 
            {services.slice(3).map((service, index) => (
              <Col lg={4} md={4} key={index} className="service-second-col">
                <div className="service-list-card" key={index}>
                  <div className="service-list-title">
                    <FontAwesomeIcon icon={service.icon} size="3x" />
                    <div className="service-list-body">

                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                    </div>
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

export default ServiceList;
