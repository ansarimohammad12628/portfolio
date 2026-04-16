import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import helloicon from "../assets/Image/svg/hello-text.svg";

const Home = () => {
  return (
    <section className="m-3 m-md-5">
      <Container className="hero-section p-4 p-md-5 rounded-5">
        <Row className="py-4 py-md-5">
          <Col xs={12} md={9}>
            <p className="intro-text h5 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 mb-3">
              <span>
                <img src={helloicon} alt="hello-icon" className="hello-img" />
              </span>

              <span className="h5 text-name">
                I'm{" "}
                <Typewriter
                  words={["Mohammad Mustafa Ansari , Junior Full Stack Web Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>

            <h2 className="hero-title">
              committed in crafting
              <br />
              unique, exceptional
              <br />
              digital experiences.
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
