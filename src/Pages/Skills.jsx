import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import reactIcon from "../assets/Image/svg/react.svg";
import htmlIcon from "../assets/Image/svg/html5.svg";
import bootstrapIcon from "../assets/Image/svg/bootstrap.svg";
import tailwindIcon from "../assets/Image/svg/tailwind.svg";
import jsIcon from "../assets/Image/svg/Js..svg"
import expressIcon from "../assets/Image/svg/express.svg"



const Skills = () => {
  const skills = [
    { name: "React", icon: reactIcon },
    { name: "Html", icon: htmlIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Js", icon: jsIcon },
    { name: "Express", icon: expressIcon },



  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">Tech Stack</h2>

        <Row className=" g-4 justify-content-center main-section">
          {skills.map((skill, index) => (
            <div
              className={`d-flex justify-content-center skill-icon floating-card icon-${index}`}
              key={index}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`icon icon-${index}`}
              />
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
