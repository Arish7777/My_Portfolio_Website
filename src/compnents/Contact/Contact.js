import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Removed unused assets

const ContactForm = () => {
  const form = useRef();
  const [thankYou, setThankYou] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.from_name.value;
    
    emailjs
      .sendForm('service_m7ussod', 'template_lree3xf', form.current, { publicKey: 'KczScmJ0sqhtH1cmA' })
      .then(() => {
        form.current.reset();
        setThankYou(`Thank you, ${name}, for reaching out!`);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => { window.location.href = '/'; }, 500); }, 2500);
      }, (err) => {
        console.error("FAILED...", err);
        setError("Failed to send message. Please try again. Error: " + (err.text || err.message || JSON.stringify(err)));
      });
  };

  return (
    <Row className="justify-content-center">
      <Col md={12}>
        <motion.div
          className="contact-form-wrapper"
          initial={{ rotateX: 0, rotateY: 0, scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Form className="contact-form p-5" ref={form} onSubmit={sendEmail}>
            <AnimatePresence mode="wait">
              {error && <motion.div className="alert alert-danger" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{error}</motion.div>}
              {thankYou && <motion.div className="alert alert-success" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{thankYou}</motion.div>}
            </AnimatePresence>

            <Row>
              <Col md={6} className="mb-4">
                <Form.Group><Form.Control type="text" name="from_name" placeholder="Name" required className="form-input" /></Form.Group>
              </Col>
              <Col md={6} className="mb-4">
                <Form.Group><Form.Control type="email" name="from_email" placeholder="Email" required className="form-input" /></Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-4">
              <Form.Control as="textarea" name="message" rows={4} placeholder="Tell me about the role, your company, or how we can collaborate..." required className="form-input" />
            </Form.Group>

            <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="submit-btn w-100" variant="outline-light">
                Send Message <i className="fas fa-paper-plane ms-2"></i>
              </Button>
            </motion.div>
          </Form>
        </motion.div>
      </Col>
    </Row>
  );
};

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-grid-texture" />
      <Container className="text-center py-5">
        <div className="links">
          <a href="https://www.linkedin.com/in/muhammad-arish-248471283/" target="_blank" rel="noreferrer" className="link-container"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Arish7777" target="_blank" rel="noreferrer" className="link-container"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/arish_1402/?igsh=YzljYTk1ODg3Zg%3D%3D" target="_blank" rel="noreferrer" className="link-container"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/share/1B5WJAmfM4/" target="_blank" rel="noreferrer" className="link-container"><i className="fab fa-facebook-f"></i></a>
        </div>

        <div id="contact-tilt-container" style={{ perspective: '1500px' }}>
          <motion.div
            className="contact-section-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const multiplier = 10;
              const xRotation = -((y - rect.height / 2) / rect.height) * multiplier;
              const yRotation = ((x - rect.width / 2) / rect.width) * multiplier;
              card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            }}
          >
            <h2 className="contact-subtitle">Contact me</h2>
            <p className="contact-subtext">Looking for an AI engineer or full-stack developer to join your team? Let's connect.</p>
            <ContactForm />
            <div className="contact-orb orb-1" />
            <div className="contact-orb orb-2" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
