import React, { useState } from "react";
import { motion } from "framer-motion";
import "./skills.css";
import UIDesign from "./books.png";
import WebDesign from "./skillpic.png";
import AppDesign from "./thinking.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  const [hovered, setHovered] = useState(null); // Track which box is hovered

  // Animation Variants for Boxes
  const boxVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" },
  };

  // Animation Variants for Hover Content
  const contentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills">
      <motion.h1
        className="skillTitle"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="skillDesc"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        I am a skilled and passionate developer with expertise in creating
        visually appealing 
        and user-friendly applications. I specialize in solving real-world
        problems efficiently.
      </motion.p>

      <div className="container skillsContainer">
        <div className="row g-4 justify-content-center">
          {/* Education Box */}
          <motion.div
            className="col-lg-4 col-md-6"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="skillBox card h-100 bg-transparent"
              onMouseEnter={() => setHovered("education")}
              onMouseLeave={() => setHovered(null)}
              whileHover="hover"
            >
              <motion.div 
                className="card-img-wrapper"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={UIDesign} alt="Education" className="card-img-top" />
              </motion.div>
              <div className="card-body">
                <h2 className="card-title">Education</h2>
                {hovered === "education" ? (
                  <motion.div
                    className="hoverContent"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="timeline">
                      <div className="timeline-item">
                        <h5>BS Artificial Intelligence</h5>
                        <p>FAST National University, Karachi (2022-2026)</p>
                      </div>
                      <div className="timeline-item">
                        <h5>Intermediate</h5>
                        <p>Govt.Degree Malir Cantt College, Karachi (2020-2022)</p>
                      </div>
                      <div className="timeline-item">
                        <h5>Matriculation</h5>
                        <p>Army Public School, Karachi (2007-2020)</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <p className="card-text">Education is not preparation for life; education is life itself - John Dewey</p>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Box */}
          <motion.div
            className="col-lg-4 col-md-6"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="skillBox card h-100 bg-transparent"
              onMouseEnter={() => setHovered("skills")}
              onMouseLeave={() => setHovered(null)}
              whileHover="hover"
            >
              <motion.div 
                className="card-img-wrapper"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={WebDesign} alt="Skills" className="card-img-top" />
              </motion.div>
              <div className="card-body">
                <h2 className="card-title">Skills</h2>
                {hovered === "skills" ? (
                  <motion.div
                    className="hoverContent"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="skills-grid">
                      <div className="skill-category">
                        <h5>Programming</h5>
                        <p>C, C++, Java, HTML, CSS, JavaScript, Python, SQL</p>
                      </div>
                      <div className="skill-category">
                        <h5>AI & ML</h5>
                        <p>Machine Learning, Deep Learning, Computer Vision, Neural Networks</p>
                      </div>
                      <div className="skill-category">
                        <h5>Frameworks & Tools</h5>
                        <p>TensorFlow, PyTorch, Keras, Git, Jupyter, VS Code</p>
                      </div>
                      <div className="skill-category">
                        <h5>Cloud Services</h5>
                        <p>AWS, Google Cloud, Azure</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <p className="card-text">The expert in anything was once a beginner</p>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Why Hire Me Box */}
          <motion.div
            className="col-lg-4 col-md-6"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="skillBox card h-100 bg-transparent"
              onMouseEnter={() => setHovered("whyHire")}
              onMouseLeave={() => setHovered(null)}
              whileHover="hover"
            >
              <motion.div 
                className="card-img-wrapper"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={AppDesign} alt="Why Hire Me?" className="card-img-top" />
              </motion.div>
              <div className="card-body">
                <h2 className="card-title">Why Hire Me?</h2>
                {hovered === "whyHire" ? (
                  <motion.div
                    className="hoverContent"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="hire-me-points">
                      <div className="point">
                        <i className="fas fa-lightbulb"></i>
                        <p>Passionate about innovation and efficiency</p>
                      </div>
                      <div className="point">
                        <i className="fas fa-chart-line"></i>
                        <p>Proven track record in solving real-world problems</p>
                      </div>
                      <div className="point">
                        <i className="fas fa-graduation-cap"></i>
                        <p>Committed to lifelong learning and growth</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <p className="card-text">Strong relationships go a long way!</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
