import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-5 bg-light">

     <Container className="p-3 p-md-5 rounded-5 bg-body-tertiary shadow-sm">

  {/* Heading */}
  <h1 className="fw-semibold mb-4 fs-3 fs-md-1">
    Ready to enhance your business with a visually engaging and empathetic style?
  </h1>

  <h2 className="fw-normal mb-4 fs-5 fs-md-3">
    Let's make it happen ✨
  </h2>

  {/* Button */}
  <Button 
    variant="dark" 
    className="rounded-pill px-4 py-2 mb-4 w-md-25"
  >
    Start a project
  </Button>

  <hr />

  {/* Bottom Section */}
  <Row className="align-items-center mt-4 text-center text-md-start">

    <Col xs={12} md={6}>
      <p className="text-muted mb-1">Connect</p>

      <a className="fw-normal h6 d-block text-dark text-break">
        ansarimohammad12628@gmail.com
      </a>
    </Col>

    <Col xs={12} md={6} className="mt-3 mt-md-0 text-center text-md-end">

      <a href="#" className="me-3 text-dark fs-4">
        <FaLinkedinIn />
      </a>

      <a href="#" className="me-3 text-dark fs-4">
        <FaXTwitter />
      </a>

      <a href="#" className="me-3 text-dark fs-4">
        <FaInstagram />
      </a>

      <a href="#" className="text-dark fs-4">
        <FaEnvelope />
      </a>

    </Col>

  </Row>

</Container>

    </section>
  );
};

export default Contact;