import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './footers.css';

const Footers = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <motion.p 
              className="mb-0 footer-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              © {currentYear} Muhammad Arish Khan. All Rights Reserved.
            </motion.p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <motion.div 
              className="footer-icons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="https://github.com/Arish7777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icon-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-arish-248471283/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icon-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="mailto:muhammadarishkhan555@gmail.com" 
                className="footer-icon-link"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a 
                href="tel:+92 355 4657687" 
                className="footer-icon-link"
                aria-label="Phone"
              >
                <i className="fas fa-phone"></i>
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footers;