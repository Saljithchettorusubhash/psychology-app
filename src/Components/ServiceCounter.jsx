import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Counter from './Counter';
import { faUsers, faClipboardCheck, faCalendarAlt, faAward } from '@fortawesome/free-solid-svg-icons';
import '../Style/ServiceCounter.css'

const ServiceCounter = () => {
  return (
    <div>
      <section className="counter-service">
      <Row className="justify-content-center">

                <Col lg={2} md={2 } sm={2}></Col>

        <Col lg={4} md={4} sm={4} className="counter-col-service ml-3">
          <Counter icon={faClipboardCheck} end={5000} title="Successful Treatments" />
        </Col>
        <Col lg={4} md={4} sm={4} className="counter-col mr">
          <Counter icon={faAward} end={20} title="Years of Experience" />

        </Col>
        <Col lg={2} md={2 } sm={2}></Col>

      </Row>
    </section>
    </div>
  )
}

export default ServiceCounter
