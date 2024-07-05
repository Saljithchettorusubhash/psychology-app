import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import AliaImage from '../assets/about-second.jpg'
import '../Style/AboutSecond.css'

const AboutSecond = () => {
  return (
    <div className='aboutSecond'>
        <Row className='Aboutsection'> 
                <Col lg={6} md={12}>
                <div className='about-alia'>
                  <h3>About Our Practice</h3>
                  <p>At Aelia Psychotherapy, we create a nurturing and supportive environment for both clients and therapists. We offer a range of high-quality services, including individual therapy, family counseling, and mental health assessments. Our personalized therapy programs are crafted to help each client achieve their personal goals and foster overall well-being. We pride ourselves on our innovative approach and the use of the latest therapeutic techniques.</p>

                </div>
                </Col>
                <Col lg={6} md={12}>
                <div className='alia-image'>
                    <img src={AliaImage} alt=''/>

                </div>
                </Col>
        </Row>
      
    </div>
  )
}

export default AboutSecond
