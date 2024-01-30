import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import arch from "./archi.png";
import gmn from "./gmn.png";
import ios from "./ios.png";
import login from "./login.png";
import movi from "./moviflix.png";
import todo from "./todo.png";
import travel from "./travel.png";

const ProjectModal = ({ show, handleClose, title, description, imgSrc }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title style={{ color: "#f75023" }}>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ color: "rgb(111, 107, 128)" }}>
      <img src={imgSrc} alt={title} style={{ maxWidth: "100%" }} />
      <p style={{ marginTop: "50px" }}>{description}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose} className="AM">
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    imgSrc: "",
  });

  const handleModalShow = (title, description, imgSrc) => {
    setModalContent({ title, description, imgSrc });
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  const projects = [
    {
      imgSrc: movi,
      title: "Moviflix",
      description:
        "🚀A React web app! 🎉🎬 Explore a curated collection of captivating movie images with details fetched from a dynamic API. Click on any image to reveal a modal packed with fascinating information about that specific movie.💻🌐",
    },
    {
      imgSrc: arch,
      title: "Architecture",
      description:
        "Successfully crafted a template for an Architect business website, meticulously utilizing HTML and CSS, with the added enhancement of Bootstrap for a polished and responsive design. 💻😉",
    },
    {
      imgSrc: gmn,
      title: "Guess My Number",
      description:
        "It is a Guess My Number game using JavaScript programming 💻In this game you have 10 tries and you have to find out a number which is guessed by the computer 🙌🏻",
    },
    {
      imgSrc: ios,
      title: "IOS Calculator",
      description:
        "Developed an iOS Calculator, leveraging the power of HTML, Bootstrap, and JavaScript to bring this project to life. This endeavor primarily consists of 80% JavaScript code and incorporates a range of JavaScript concepts, showcasing a substantial commitment to programming prowess. 😎💻",
    },
    {
      imgSrc: todo,
      title: "Todo App",
      description:
        "Constructed a stylish ToDo list utilizing the React.js framework, and in the process, I've honed my skills in effectively managing state like a seasoned professional! 💻✨",
    },
    {
      imgSrc: login,
      title: "Login Page",
      description:
        "Implemented a login page using a combination of HTML for structuring, CSS for styling, and JavaScript for dynamic functionalities. This collaborative trio ensures an aesthetically pleasing and responsive user interface, while the JavaScript component adds the necessary interactivity for a seamless and secure login experience. 💻🚀🔐",
    },
    {
      imgSrc: travel,
      title: "Traveler",
      description:
        "Crafted a captivating template for a traveling website, employing the versatile tools of HTML for structure and Bootstrap for enhanced styling and responsiveness. This project reflects a blend of creativity and technical finesse, ensuring an engaging and user-friendly experience. 😉💻",
    },
  ];
  return (
    <div className="containerProjects" id="Projects">
      <h3
        style={{
          color: "#f75023",
          fontSize: "250%",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Projects
      </h3>
      <div className="row R">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-sm-6 col-md-4 col-lg-4 col-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Card
              style={{
                width: "100%",
                marginTop: "20px",
              }}
              onClick={() =>
                handleModalShow(
                  project.title,
                  project.description,
                  project.imgSrc
                )
              }
            >
              <Card.Img
                variant="top"
                src={project.imgSrc}
                style={{ height: "230px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#f75023" }}>
                  {project.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <ProjectModal
        show={modalShow}
        handleClose={handleModalClose}
        imgSrc={modalContent.imgSrc}
        title={modalContent.title}
        description={modalContent.description}
      />
    </div>
  );
}
