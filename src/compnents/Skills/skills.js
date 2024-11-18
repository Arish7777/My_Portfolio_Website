import React, { useState } from "react";
import { motion } from "framer-motion";
import "./skills.css";
import UIDesign from "./books.png";
import WebDesign from "./skillpic.png";
import AppDesign from "./thinking.png";

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
        visually appealing <br />
        and user-friendly applications. I specialize in solving real-world
        problems efficiently.
      </motion.p>

      <div className="skillsContainer">
        {/* Education Box */}
        <motion.div
          className="skillBox"
          onMouseEnter={() => setHovered("education")}
          onMouseLeave={() => setHovered(null)}
          variants={boxVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img src={UIDesign} alt="Education" />
          <div>
            <h2>Education</h2>
            {hovered === "education" ? (
              <motion.div
                className="hoverContent"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <p>Current Education : BS Artificial Intelligence (2022-2026)</p>
                <p>University : FAST National University , Karachi</p>
                <p>College : Govt.Degree Malir Cantt College , Karachi (2020-2022)</p>
                <p>School : Army Public School , Karachi (2007-2020)</p>
              </motion.div>
            ) : (
              <p>Education is not preparation for life; education is life itself - John Dewey</p>
            )}
          </div>
        </motion.div>

        {/* Skills Box */}
        <motion.div
          className="skillBox"
          onMouseEnter={() => setHovered("skills")}
          onMouseLeave={() => setHovered(null)}
          variants={boxVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img src={WebDesign} alt="Skills" />
          <div>
            <h2>Skills</h2>
            {hovered === "skills" ? (
              <motion.div
                className="hoverContent"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <p>Programming : C, C++, Java, HTML, CSS, JavaScript, Python, SQL</p>
                <p>AI : Machine Learning, Deep Learning, Computer Vision, Neural Network</p>
                <p>AI Frameworks : TensorFlow, PyTorch, Keras, Git</p>
                <p>AI Tools : Jupyter Notebook, Google Colab, VS Code</p>
                <p>
                  Other Skills : Version control (Git), Cloud services (AWS, Google Cloud, Azure)
                </p>
              </motion.div>
            ) : (
              <p>The expert in anything was once a beginner</p>
            )}
          </div>
        </motion.div>

        {/* Why Hire Me Box */}
        <motion.div
          className="skillBox"
          onMouseEnter={() => setHovered("whyHire")}
          onMouseLeave={() => setHovered(null)}
          variants={boxVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img src={AppDesign} alt="Why Hire Me?" />
          <div>
            <h2>Why Hire Me?</h2>
            {hovered === "whyHire" ? (
              <motion.div
                className="hoverContent"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <p>Passionate about innovation and efficiency.</p>
                <p>Proven track record in solving real-world problems.</p>
                <p>Committed to lifelong learning and growth.</p>
              </motion.div>
            ) : (
              <p>Strong relationships go a long way!</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
