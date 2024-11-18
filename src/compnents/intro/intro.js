import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./intro.css";
import bg from "./shalwar_kameez.png";
import btnImg from "./bag1.png";

const Intro = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Muhammad", "Arish", "Khan"]; // Words for typing animation

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 500); // Adjust speed of typing effect
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex]);

  const [showModal, setShowModal] = useState(false);

  const handleHireMeClick = () => {
    setShowModal(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./Muhammad Arish Khan Resume Final.pdf";
    link.download = "Muhammad_Arish_Khan_Resume.pdf";
    link.click();
    setShowModal(false);
  };

  return (
    <motion.section
      id="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="introcontent"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        <motion.span
          className="hello"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hello,
        </motion.span>
        <motion.span
          className="introtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm{" "}
          <span className="introname">
            {words.slice(0, currentWordIndex).join(" ")}
          </span>
          <br />
          AI Developer
        </motion.span>
        <motion.p
          className="intropara"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          As an AI Developer, I focus on building and implementing AI-driven
          solutions
          <br /> that harness data and machine learning algorithms to enhance
          technology,
          <br /> optimize processes, and bring intelligent automation to
          real-world applications.
        </motion.p>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleHireMeClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <img src={btnImg} alt="Hire Me" className="btnImg" />
          Hire Me
        </motion.button>
      </motion.div>
      <motion.img
        src={bg}
        alt="profile"
        className="bg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Want to Hire Me?</h2>
            <p>
              If you really want to hire Muhammad Arish Khan, click below to
              download the resume.
            </p>
            <div className="modal-buttons">
              <button
                className="modal-btn download"
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>
              <button
                className="modal-btn cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Intro;
