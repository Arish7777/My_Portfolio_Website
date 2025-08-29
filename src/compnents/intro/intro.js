import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./intro.css";
import bg from "./IMG_0808.JPG";
import btnImg from "./bag1.png";

const Intro = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Array of texts to cycle through
  const texts = ["Muhammad Arish Khan", "from FAST NUCES"];
  
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isTyping) {
      // Typing animation
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
          // Mark animation as complete after first text is fully typed
          if (currentTextIndex === 0) {
            setIsAnimationComplete(true);
          }
        }, 1200);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsTyping(true);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, currentTextIndex, isTyping, texts]);

  const [showModal, setShowModal] = useState(false);

  const handleHireMeClick = () => {
    setShowModal(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./Arish_Resume_Final (1).pdf";
    link.download = "Arish_Resume_Final (1).pdf";
    link.click();
    setShowModal(false);
  };

  // Function to handle the flip button click
  const handleFlipClick = () => {
    setShowContent(prev => !prev);
  };

  return (
    <motion.section
      id="intro"
      className="intro-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container fluid className="intro-container">
        <Row className="align-items-center justify-content-between h-100">
          {/* Desktop View - Fixed positioning */}
          <Col lg={6} md={12} className="d-none d-lg-block intro-content-col order-lg-1">
            <motion.div
              className="introcontent"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 20,
                duration: 1,
                delay: 0.2
              }}
            >
              <motion.span
                className="hello fw-bold badge bg-info text-dark mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Hello World,
              </motion.span>
              <motion.h1
                className="introtext display-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                I'm{" "}<br/>
                <span className="introname">
                  {displayText}
                  <span className={`cursor ${isTyping ? 'typing' : 'deleting'}`}>|</span>
                </span>
                <br />
                <span className="profession">AI Developer</span>
              </motion.h1>
              <motion.p
                className="intropara lead mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                As an AI Developer, I focus on building and implementing AI-driven
                solutions that harness data and machine learning algorithms to enhance
                technology, optimize processes, and bring intelligent automation to
                real-world applications.
              </motion.p>
              <motion.button
                className="hire-btn btn btn-outline-info mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleHireMeClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <img src={btnImg} alt="Hire Me" className="btnImg me-2" />
                Hire Me
              </motion.button>
            </motion.div>
          </Col>
          
          <Col lg={6} md={12} className="d-none d-lg-flex justify-content-center align-items-center image-col order-lg-2">
            <motion.img
              src={bg}
              alt="profile"
              className="bg img-fluid"
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                delay: 1.2, 
                duration: 1,
                y: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }
              }}
            />
          </Col>
          
          {/* Mobile View - 3D Card Flip with Depth */}
          <Col xs={12} className="d-lg-none mobile-flip-container">
            <div className="flip-card">
              <AnimatePresence mode="wait">
                {showContent ? (
                  <motion.div 
                    key="content"
                    className="flip-card-front"
                    initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                    animate={{ 
                      rotateY: 0, 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15,
                        duration: 0.6
                      }
                    }}
                    exit={{ 
                      rotateY: -90, 
                      opacity: 0, 
                      scale: 0.8,
                      transition: { 
                        duration: 0.5 
                      }
                    }}
                  >
                    <div className="introcontent">
                      <span className="hello badge bg-info text-dark fw-bold mb-3">Hello World,</span>
                      <h1 className="introtext display-4">
                        
                        I'm{" "}<br/>
                        <span className="introname">
                          {displayText}
                          <span className={`cursor ${isTyping ? 'typing' : 'deleting'}`}>|</span>
                        </span>
                        <br />
                        <span className="profession">AI Developer</span>
                      </h1>
                      <p className="intropara lead mt-4 text-center">
                        As an AI Developer, I focus on building and implementing AI-driven
                        solutions that harness data and machine learning algorithms to enhance
                        technology, optimize processes, and bring intelligent automation to
                        real-world applications.
                      </p>
                      <div className="d-flex flex-column flex-md-row gap-3">
                        <button
                          className="hire-btn btn btn-outline-info mt-4"
                          onClick={handleHireMeClick}
                        >
                          <img src={btnImg} alt="Hire Me" className="btnImg me-2" />
                          Hire Me
                        </button>
                        {/* Add the flip button */}
                        {isAnimationComplete && (
                          <motion.button
                            className="flip-btn btn btn-outline-warning mt-4"
                            onClick={handleFlipClick}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          >
                            <i className="fas fa-repeat me-2"></i>
                            Tap to see me
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="image"
                    className="flip-card-back"
                    initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                    animate={{ 
                      rotateY: 0, 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15,
                        duration: 0.6
                      }
                    }}
                    exit={{ 
                      rotateY: -90, 
                      opacity: 0, 
                      scale: 0.8,
                      transition: { 
                        duration: 0.5 
                      }
                    }}
                  >
                    <div className="flip-back-container d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={bg}
                        alt="profile"
                        className="bg img-fluid mobile-profile-img"
                      />
                      {/* Add back button under the image */}
                      <motion.button
                        className="flip-back-btn btn btn-outline-light mt-3"
                        onClick={handleFlipClick}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <i className="fas fa-arrow-left me-2"></i>
                        Back to info
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Col>
        </Row>
      </Container>

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
              If you really want to hire Muhammad Arish Khan, click below to
              download the resume.
            </p>
            <div className="modal-buttons d-flex justify-content-center gap-3">
              <Button
                variant="info"
                className="modal-btn download"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
              <Button
                variant="outline-secondary"
                className="modal-btn cancel"
                onClick={() => setShowModal(false)}
              >
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