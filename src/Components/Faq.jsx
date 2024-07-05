import React from 'react';
import Accordion from './Accordian';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../Style/Faq.css';

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a range of services including individual therapy, family counseling, and mental health assessments.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by contacting us through our website or by calling our office directly.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'Our operating hours are Monday to Friday, 7:00 AM to 6:00 PM. We are closed on weekends.',
  },
  {
    question: 'Do you offer virtual therapy sessions?',
    answer: 'Yes, we offer virtual therapy sessions for clients who prefer remote consultations.',
  },
  {
    question: 'What should I expect during my first session?',
    answer: 'During your first session, you will have the opportunity to discuss your concerns and goals with your therapist, who will then work with you to create a personalized treatment plan.',
  },
  {
    question: 'Are your services confidential?',
    answer: 'Yes, all sessions are confidential. We follow strict privacy policies to ensure your information is secure and protected.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'We accept a variety of insurance plans. Please contact our office to verify if your insurance is accepted.',
  },
  {
    question: 'What are the qualifications of your therapists?',
    answer: 'Our therapists are licensed professionals with extensive experience and training in various areas of mental health and therapy.',
  },
  
];

const Faq = () => {
  return (
    <div className='faq'>
      <Row>
        <Col lg={6} md={12}>
          <div className='faq-heading'>
            <h2>Frequently Asked Questions</h2>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className='faq-accordian'>
          <Accordion faq={faqData} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Faq;
