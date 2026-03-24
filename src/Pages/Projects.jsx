
import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import askandassociatedimage from "../assets/Image/png/Ask&Associated.png";
import smbd from "../assets/Image/png/smbd.png";
import ajmeria from "../assets/Image/png/ajmeria.png";

const Projects = () => {
  const projects = [
    {
      title: "Ask & Associates",
      image: askandassociatedimage,
      link: "https://askandassociates.com/",
    },

    {
      title: "SMBD Mount City",
      image: smbd,
      link: "https://smbdmountcity.com/",
    },

    {
      title: "Ajmeria",
      image: ajmeria,
      link: "https://ajmeria.com/",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">My Projects</h2>

        <Carousel indicators={false} interval={3000}>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <div className="project-slide ">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content d-flex justify-content-center align-items-center">
                <div className="down-part d-flex flex-column justify-content-center align-items-center mt-3  text-light p-4 rounded-3 bg-dark bg-opacity-75">
                  <h3>{project.title}</h3>

                  <Button
                    className="button "
                    variant="primary"
                    href={project.link}
                    target="_blank"
                  >
                    Visit Website
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Projects;
