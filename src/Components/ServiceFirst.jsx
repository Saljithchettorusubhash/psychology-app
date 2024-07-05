import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import ServiceCounter from './ServiceCounter'
import '../Style/ServiceFirst.css'

const ServiceFirst = () => {
  return (

    <div className='serviceFirst'>
        <Row>
            <Col lg={6} md={12}>
        <div className='service-first-content'>
        <h2>Why Choose Our Services?</h2>
        <p>At Aelia Psychotherapy, we are dedicated to providing exceptional mental health services that empower individuals to achieve their personal and emotional goals. Our comprehensive approach and experienced team ensure that every client receives personalized and compassionate care.

</p>
</div>
</Col>
<Col lg={6} md={12}>
<div className='service-timer'>
    <ServiceCounter/>

</div>
</Col>
</Row>


      
    </div>
  )
}

export default ServiceFirst
