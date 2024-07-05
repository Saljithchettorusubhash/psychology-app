import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Style/CustomerService.css";
import Button from "./Button";

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="customer-service">
    <Row>
      <Col lg={6} md={12} sm={12}>
        <div className="customer-content">
          <h3>Empowering Your Journey to Optimal Health</h3>
          <p>
            Your vitality and well-being are our top priorities. We are
            dedicated to helping you achieve the best version of yourself,
            ensuring that you move with ease and live pain-free. Our goal is
            to provide you with personalized care that enhances your quality
            of life.
          </p>
        </div>
      </Col>
      <Col lg={6} md={12} sm={12}>
        <div className="customer-form">
          <Form >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Your Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button text="Send Details" className="primary"/>

          </Form>
        </div>
      </Col>
    </Row>
  </div>
  );
};

export default CustomerService;
