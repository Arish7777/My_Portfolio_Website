import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./works.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from "./blank.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.jpg";
import pic6 from "./pic6.jpg";
import pic7 from "./pic7.jpg";
import pic8 from "./pic8.png";

// Projects data
const projects = [
  {
    image: pic7,
    title: "VAND 3.0 Challenge (CVPR 2025) — MVTec AD 2 Dataset” - Prompt-Based Anomaly Detection for Industrial Inspection Network",
    description: "Developed an unsupervised anomaly detection system leveraging CLIP’s vision-language model to identify and localize defects in industrial images. The model,trained solely on normal data, achieved 85.4 percent image-AUC and demonstrated robustness to real-world distribution shifts like lighting variations for the VAND 3.0 Challenge (CVPR 2025).",
    githubLink: "https://github.com/Arish7777/CVPR-Challenge-Advanced-Scenarios-for-Unsupervised-Anomaly-Detection",
  },
  {
    image: pic8,
    title: "Secure Chat Application-SocketIO",
    description: "A secure, real-time chat application with end-to-end encryption, built using Flask, Flask-SocketIO, and custom client/server architecture",
    githubLink: "https://github.com/Arish7777/Secure_Chat_App",
  },
  {
    image: pic6,
    title: "Multi-Layer Neural Network",
    description: "This project involves implementing a multi-layer neural network from scratch. The aim is to explore the workflow, methodology, and performance of neural networks while addressing challenges in training, evaluation, and optimization.",
    githubLink: "https://github.com/Arish7777/NeuralNetwork",
  },
  {
    image: pic5,
    title: "Online Inventory Management System",
    description: "The primary objective of the Inventory Management System (IMS) is to provide a comprehensive, user-friendly software solution that streamlines inventory management processes for retail businesses",
    githubLink: "https://github.com/Arish7777/Inventory_Management",
  },
  {
    image: pic1,
    title: "Book Recommend System",
    description: "This project recommends books to people on basis of popularity, similar description and similar ratings.",
    githubLink: "https://github.com/zayamziamalik/Book-Recommender-System.git",
  },
  {
    image: pic2,
    title: "Scheduling Flights using CSP",
    description: "A creative Web Application designed to Schedule the Flights.",
    githubLink: "https://github.com/Arish7777/Airport-Scheduling-Problem-master",
  },
  {
    image: pic3,
    title: "Processes Comparison Operating System",
    description: "This is an Operating System project that helps us to determine which algorithms work efficiently.",
    githubLink: "https://github.com/Arish7777/Comparison-between-Multiprocessing-and-Multithreading--Operating-system",
  },
  {
    image: pic4,
    title: "Bank Managing System",
    description: "A Bank Management System based on OOP Concepts that streamlines and automates banking operations such as account management and transactions.",
    githubLink: "https://github.com/Arish7777/Bank-Management-System",
  },
];

const Works = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle "See More" click
  const handleSeeMore = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects.length); // Loop through images
  };

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container fluid className="works-container text-center">
      <motion.h2
        className="worksTitle"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <motion.p
        className="worksDesc"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        The development of projects involves creating innovative solutions by designing, 
        coding, and implementing applications to meet specific user needs while ensuring 
        functionality, efficiency, and scalability. It combines creativity, technical expertise, 
        and problem-solving to bring ideas to life.
      </motion.p>
      <Row className="worksImgs g-4 justify-content-center">
        <AnimatePresence mode="wait">
          {projects.map((project, index) => (
            <Col lg={8} md={10} sm={11} key={index} 
              style={{
                display: currentImageIndex === index ? "block" : "none",
              }}
            >
              <motion.div
                className="h-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                  y: currentImageIndex === index ? 0 : 50,
                }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="works-card h-100 bg-transparent">
                  <div className="card-img-wrapper">
                    <motion.img
                      src={project.image}
                      alt={`Project ${index + 1}`}
                      className="card-img-top worksImg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  <Card.Body className="works-card-body">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <Card.Title className="works-card-title">{project.title}</Card.Title>
                      <Card.Text className="works-card-desc">{project.description}</Card.Text>
                      <motion.div
                        className="text-center mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <i className="fab fa-github me-2"></i>
                          View on GitHub
                        </a>
                      </motion.div>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
        ))}
          </AnimatePresence>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <motion.button
              className="works-btn"
              onClick={handleSeeMore}
              whileHover={{ scale: 1.1, backgroundColor: "var(--secondary-color)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              See More <i className="fas fa-arrow-right ms-2"></i>
            </motion.button>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Works;
