import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./intro.css";
import bg from "./Arish.jpeg";

const Intro = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const texts = ["Muhammad Arish", "from FAST NUCES"];
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          if (currentTextIndex === 0) setIsAnimationComplete(true);
        }, 1200);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, currentTextIndex, isTyping]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./Arish_Resume_Final (1).pdf";
    link.download = "Arish_Resume_Final (1).pdf";
    link.click();
    setShowModal(false);
  };

  return (
    <motion.section
      id="intro"
      className="intro-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="intro-grid-texture" />

      {/* Background image — pinned to RIGHT half on desktop, full on mobile */}
      <div className="intro-bg-wrapper">
        <motion.img
          src={bg}
          alt="Arish profile"
          className="intro-bg-image"
          initial={{ 
            opacity: 0, 
            scale: 1.15,
            filter: "blur(15px) brightness(0.7)" 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            filter: "blur(0px) brightness(1)",
          }}
          transition={{ 
            duration: 3.2, 
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        {/* Premium Glossy Sweep Reveal */}
        <motion.div 
          className="intro-glossy-sweep"
          initial={{ backgroundPosition: "200% 0%" }}
          animate={{ backgroundPosition: "-200% 0%" }}
          transition={{ 
            duration: 3.5, 
            delay: 0.2, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Continuous slow 'breathing' animation to keep it alive */}
        <motion.div 
          className="intro-bg-image-drifter"
          animate={{ 
            scale: [1, 1.02, 1],
            x: [0, 8, 0],
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <div className="intro-bg-overlay" />
      </div>

      <Container fluid className="intro-container px-4 px-lg-5">
        <Row className="intro-row align-items-center m-0">

          {/* ── LEFT: all text content ── */}
          <Col xs={12} lg={6} className="intro-text-col">
            <motion.div
              className="introcontent"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
            >
              {/* Hello badge */}
              <motion.span
                className="hello fw-bold badge bg-info text-dark mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Hello World,
              </motion.span>

              {/* Main heading */}
              <motion.h1
                className="introtext"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                I'm
                <br />
                <span className="introname">
                  {displayText}
                  <span className={`cursor ${isTyping ? "typing" : "deleting"}`}>|</span>
                </span>
                <br />
                <span className="profession">AI Engineer</span>
              </motion.h1>

              {/* Hire Me button */}
              <motion.button
                className="hire-btn btn btn-outline-info mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="hireBtnIconSvg me-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Hire Me
              </motion.button>
            </motion.div>
          </Col>

          {/* ── RIGHT: empty — image is the bg, this col just pushes layout ── */}
          <Col xs={12} lg={6} className="d-none d-lg-block" />

        </Row>
      </Container>

      {/* ── Hire Me Modal ── */}
      {showModal && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-content shadow-lg rounded"
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="modal-title mb-4">Want to Hire Me?</h2>
            <p className="modal-text mb-4">
              If you really want to hire Muhammad Arish Khan, click below to download the resume.
            </p>
            <div className="modal-buttons d-flex justify-content-center gap-3">
              <Button variant="info" className="modal-btn download" onClick={handleDownloadResume}>
                Download Resume
              </Button>
              <Button variant="outline-secondary" className="modal-btn cancel" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Intro;