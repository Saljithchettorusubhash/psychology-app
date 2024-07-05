import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Adoloscent from "../assets/Adoloscent.jpg";
import Individual from "../assets/Individual.jpg";
import Nuero from "../assets/Nuero.jpg";
import Obesity from "../assets/Obesity.jpg";
import Parenting from "../assets/Parenting.jpg";
import Workshop from "../assets/Workshop.jpg";
import Animation from "../assets/TheraphyAnimation.json";
import Lottie from "lottie-react";
import "../Style/Service.css";

const content = [
  {
    heading: "Unlock Your Potential with Our Expert Services",
    subheading:
      "At Alia Psychotherapy, we understand that every individual's journey is unique. Our comprehensive range of services is designed to support your mental health and well-being at every stage of life. From individual therapy to specialized support for children and adolescents, our compassionate professionals are here to help you navigate life's challenges and achieve a balanced, fulfilling life. Explore our services and discover the path to your best self.",
  },
];

const serviceList = [
  {
    image: Adoloscent,
    title: "Individual Therapy",
    description:
      "Personalized one-on-one sessions to help you navigate life’s challenges and improve your emotional well-being.",
  },
  {
    image: Individual,
    title: "Child and Adolescent Psychotherapy",
    description:
      "Therapeutic support tailored for young individuals using conversation, play, and other creative media to foster emotional growth.",
  },
  {
    image: Nuero,
    title: "Parenting Support",
    description:
      "Guidance and tools for parents to nurture healthy relationships and emotional regulation within the family.",
  },
  {
    image: Obesity,
    title: "Obesity and Eating Disorders Psychotherapy",
    description:
      "Specialized therapy to address eating disorders and promote a healthier relationship with food and body image.",
  },
  {
    image: Parenting,
    title: "Neuro-affirming Psychotherapy",
    description:
      "Supportive therapy for neurodivergent individuals, embracing and affirming their unique experiences and perspectives.",
  }, 
  {
    image: Workshop,
    title: "Workshops & Seminars",
    description:
      "Educational sessions to provide valuable insights and practical tools for mental health and personal growth.",
  },
];

const Service = () => {
  return (
    <div className="Service">
      <Row>
        <Col xl={6} lg={6} md={12} >
          <div className="services-list">
            <Row>
              {serviceList.map((service, index) => (
                <Col xl={4} lg={6} md={6} sm={12} key={index} className="card-control" >
                  <div className="service-card ">
                    <div className="service-card-header">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-card-body">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>

        <Col xl={6} lg={6} md={12}>
          <div className="service-content">
            <div className="animation-lottie">
              <Lottie animationData={Animation} />
            </div>
            <h3>{content[0].heading}</h3>
            <p>{content[0].subheading}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Service;
