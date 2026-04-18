import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap';
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
import picYolo from "./yolo-sign-langauge-detection.png";
import picTriage from "./AI-Real-Estate-Triage-System.jpeg";
import picAnime from "./rel2anime.jpg";

// Projects data categorized
const projects = [
  {
    image: pic7,
    title: "VAND 3.0 Challenge (CVPR 2025)",
    category: "AI & Deep Learning",
    description: "Developed an unsupervised anomaly detection system leveraging CLIP's vision-language model to identify and localize defects in industrial images. Achieved 85.4 percent image-AUC for the VAND 3.0 Challenge (CVPR 2025).",
    githubLink: "https://github.com/Arish7777/CVPR-Challenge-Advanced-Scenarios-for-Unsupervised-Anomaly-Detection",
  },
  {
    image: picYolo,
    title: "Sign Language Detection (YOLOv11 + WebRTC)",
    category: "AI & Deep Learning",
    description: "A state-of-the-art YOLOv11 object detection model for American Sign Language (ASL) combined with a full-featured WebRTC Web Application for real-time, low-latency streaming and remote viewing. Fine-tuned on 25 ASL classes with FastAPI server, WebRTC signaling, room management, and automatic global tunneling via ngrok. Detects signs in real-time and broadcasts annotated video and translated sentences to remote viewers.",
    githubLink: "https://github.com/Arish7777/AI-Based-Sign-Language-Recognition-YOLOv11-and-Interactive-WebRTC-Communication-System",
  },
  {
    image: picTriage,
    title: "AI-Powered Real Estate Lead Triage System",
    category: "AI & Deep Learning",
    description: "An AI-powered lead scoring and triage system for real estate professionals. Automatically score, classify, and prioritize incoming leads using rule-based scoring and LLM-powered intent analysis. Features smart lead scoring evaluating Location, Budget, Timeframe, Contact Completeness, and Message Quality. Includes AI intent analysis, automatic tier assignment (HOT, MEDIUM, LOW, JUNK), interactive dashboard with visual analytics, hot leads report, PWA support, and a modern glassmorphism UI.",
    githubLink: "https://github.com/Arish7777/AI-Powered-Real-Estate-Lead-Triage-System",
  },
  {
    image: picAnime,
    title: "Real2Anime — AI Photo to Anime",
    category: "Generative AI",
    description: "A cutting-edge AI-powered web application that transforms real-world photos into stunning anime-style artwork. Leveraging the power of AnimeGANv2 and Deep Learning, it offers AI-powered transformation, a futuristic UI/UX with neon aesthetics and glassmorphism, real-time processing via a FastAPI backend, responsive design for all devices, adjustable output size for high-resolution results, and one-click download of transformed images.",
    githubLink: "https://github.com/Arish7777/Real2Anime",
  },
  {
    image: pic8,
    title: "Secure Chat Application-SocketIO",
    category: "Cybersecurity & Web",
    description: "A secure, real-time chat application with end-to-end encryption, built using Flask, Flask-SocketIO, and custom client/server architecture.",
    githubLink: "https://github.com/Arish7777/Secure_Chat_App",
  },
  {
    image: pic6,
    title: "Multi-Layer Neural Network",
    category: "AI & Deep Learning",
    description: "Implementing a multi-layer neural network from scratch to explore methodology and performance in training, evaluation, and optimization.",
    githubLink: "https://github.com/Arish7777/NeuralNetwork",
  },
  {
    image: pic5,
    title: "Online Inventory System",
    category: "Software Development",
    description: "A comprehensive, user-friendly software solution that streamlines inventory management processes for retail businesses.",
    githubLink: "https://github.com/Arish7777/Inventory_Management",
  },
  {
    image: pic1,
    title: "Book Recommend System",
    category: "AI & Deep Learning",
    description: "Recommends books based on popularity, description similarity, and user ratings using collaborative filtering.",
    githubLink: "https://github.com/zayamziamalik/Book-Recommender-System.git",
  },
  {
    image: pic2,
    title: "Scheduling Flights using CSP",
    category: "AI & Deep Learning",
    description: "An intelligent Web Application designed to solve the Airport Scheduling Problem using Constraint Satisfaction.",
    githubLink: "https://github.com/Arish7777/Airport-Scheduling-Problem-master",
  },
  {
    image: pic3,
    title: "OS Processes Comparison",
    category: "Cybersecurity & Systems",
    description: "An Operating System project analyzing efficiency differences between Multiprocessing and Multithreading algorithms.",
    githubLink: "https://github.com/Arish7777/Comparison-between-Multiprocessing-and-Multithreading--Operating-system",
  },
  {
    image: pic4,
    title: "Bank Managing System",
    category: "Software Development",
    description: "An OOP-based Bank Management System that automates account management and secure transactions.",
    githubLink: "https://github.com/Arish7777/Bank-Management-System",
  },
];

/* ─── Mobile Sticky Pile Card ────────────────────────────────────────────── */
const MobilePileCard = ({ project, index, total, onOpen }) => {
  const stickyTop = 100 + index * 30;

  return (
    <div
      className="mobile-pile-spacer"
      style={{ zIndex: total - index }}
    >
      <motion.div
        className="mobile-pile-card"
        style={{ position: 'sticky', top: `${stickyTop}px` }}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <div className="folder-card" onClick={() => onOpen(project)}>
          {/* Back Plate */}
          <div className="folder-back"></div>
          {/* Animated Content (Project Image) */}
          <div className="folder-content-preview">
            <img src={project.image} alt={project.title} />
          </div>
          {/* Front Plate */}
          <div className="folder-front">
            <div className="folder-info">
              <h3 className="folder-title">
                {project.title.length > 30 ? project.title.substring(0, 30) + "..." : project.title}
              </h3>
              <span className="folder-tag">{project.category}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Deep Learning", "Generative AI", "Software Development", "Cybersecurity & Web", "Cybersecurity & Systems"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="works-grid-texture" />
      <Container fluid className="works-container text-center">
        <h2 className="worksTitle">Featured Projects</h2>
        <motion.p
          className="worksDesc"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Explore my portfolio filtered by technical domain.
        </motion.p>

        <motion.div 
          className="filter-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  className="active-pill"
                  layoutId="activePill"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>
        
        <Row className="justify-content-center g-5 mt-4 px-lg-5 desktop-projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <Col 
                xl={4} lg={6} md={6} sm={12} 
                key={project.title} 
                className="folder-col"
              >
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="folder-card"
                  onClick={() => openModal(project)}
                  whileHover="hover"
                >
                  <div className="folder-back"></div>
                  <motion.div 
                    className="folder-content-preview"
                    variants={{
                      initial: { y: 0, scale: 0.9 },
                      hover: { y: -80, scale: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img src={project.image} alt={project.title} />
                  </motion.div>
                  <div className="folder-front">
                    <div className="folder-info">
                      <h3 className="folder-title">
                        {project.title.length > 30 ? project.title.substring(0, 30) + "..." : project.title}
                      </h3>
                      <span className="folder-tag">{project.category}</span>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {/* ═══ Mobile Pile View (hidden on desktop) ═══ */}
        <div className="mobile-stack-container">
          <div className="mobile-pile-scene">
            {filteredProjects.map((project, index) => (
              <MobilePileCard
                key={project.title}
                project={project}
                index={index}
                total={filteredProjects.length}
                onOpen={openModal}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="project-modal-content"
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close-btn" onClick={closeModal}>
                  <i className="fas fa-times"></i>
                </button>
                
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-header-img" />
                
                <div className="modal-body text-start">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-footer">
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-github-link"
                    >
                      <i className="fab fa-github me-2"></i>
                      View Project on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.section>
  );
};

export default Works;
