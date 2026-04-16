import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import profile from "../assets/Image/jpg/my-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center gy-5">
          {/* LEFT */}
          <Col xs={12} md={5} className="text-center text-md-start">
            <h1 className="about-heading fw-semibold">
              Chronicle <br />
              <span className="text-secondary">Present → Past.</span>
            </h1>

            <Card className="profile-card border-0 shadow mt-4 mx-auto mx-md-0">
              <Image src={profile} fluid rounded />
            </Card>
          </Col>

          {/* RIGHT */}
          <Col xs={12} md={7}>
            <p className="about-text">
              Hey there! 👋 I'm <b>Mohammad Mustafa Ansari</b>, a
              <b> Full Stack Web Developer</b> with hands-on experience building
              modern web applications.
            </p>

            <p className="about-text">
              I specialize in creating responsive and scalable digital products
              using <b>React.js, JavaScript, Node.js and Express</b>.
            </p>

            <p className="about-text">
              Currently, I’m working on real-world projects where I design
              frontend interfaces and integrate REST APIs.
            </p>

            <p className="about-text">
              My goal is to craft clean, efficient, and user-friendly
              experiences.
            </p> 
          </Col>
        </Row>{" "}
      </Container>
    </section>
  );
};

export default About;
