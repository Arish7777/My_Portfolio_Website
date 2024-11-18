import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './contacts.css';
import pic1 from './AI_Services1.png';
import pic2 from './AI_Services2.png';
import pic3 from './AI_Services3.png';
import pic4 from './AI_Services4.png';
import Github from './github.png';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Facebook from './facebook.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message) => {
    setErrorMessage(message);

    // Reset the error message to re-trigger the animation
    setTimeout(() => {
      setErrorMessage('');
    }, 4000); // Matches the duration of the CSS `fadeOut` animation
  };

  const validateForm = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      showError('Please enter your name.');
      return false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      showError('Please enter a valid email address.');
      return false;
    }

    if (!message) {
      showError('Please enter your message.');
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const name = form.current.from_name.value;

    emailjs
      .sendForm('service_m7ussod', 'template_lree3xf', form.current, {
        publicKey: 'KczScmJ0sqhtH1cmA',
      })
      .then(
        () => {
          form.current.reset();
          setThankYouMessage(`Thank you, ${name}, for reaching out!`);
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });

            setTimeout(() => {
              window.location.href = '/';
            }, 500);
          }, 2500);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <motion.section
      id="contactPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        id="clients"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Services Section */}
      </motion.div>

      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>

        {thankYouMessage && (
          <motion.div
            className="thank-you-message"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{thankYouMessage}</h2>
          </motion.div>
        )}

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <motion.input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="submitBtn"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Submit
          </motion.button>
        </form>

        <AnimatePresence>
          {errorMessage && (
            <motion.div
              className="error-popup"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
