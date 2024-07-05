import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Counter from './Counter';
import { faUsers, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import '../Style/CounterSection.css';

const CounterSection = () => {
  return (
    <section className="counter-section">
      <Row className="justify-content-center">
        <Col lg={2} md={2 } sm={2}></Col>
        <Col lg={4} md={4} sm={4} className="counter-col">
          <Counter icon={faUsers} end={52} title="Consultants" />
        </Col>
        <Col lg={4} md={4}  sm={4} className="counter-col">
          <Counter icon={faClipboardCheck} end={5000} title="Successful Treatments" />
        </Col>
        <Col lg={2} md={2 } sm={2}></Col>

      </Row>
    </section>
  );
};

export default CounterSection;
