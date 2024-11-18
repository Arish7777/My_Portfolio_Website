import React, { useRef, useState } from 'react';
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
  const [userName, setUserName] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.from_email.value;

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 3 seconds
      return;
    }

    emailjs
      .sendForm('service_m7ussod', 'template_lree3xf', form.current, {
        publicKey: 'KczScmJ0sqhtH1cmA',
      })
      .then(
        () => {
          form.current.reset();
          setUserName(name);
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
        },
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Services</h1>
        <p className="clientDesc">
          As an AI developer, I specialize in creating intelligent solutions by developing machine learning models,
          building conversational AI systems, and automating tasks using AI technologies.
          My services focus on enhancing efficiency, solving complex problems,
          and delivering data-driven insights tailored to the needs of businesses and individuals.
        </p>

        {/* Images Section */}
        <div className="services-images">
          <img src={pic1} alt="Service 1" className="service-pic" />
          <img src={pic2} alt="Service 2" className="service-pic" />
          <img src={pic3} alt="Service 3" className="service-pic" />
          <img src={pic4} alt="Service 4" className="service-pic" />
        </div>

        <div className="links">
          {/* GitHub Link */}
          <div className="link-container">
            <a
              href="https://github.com/Arish7777"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.currentTarget.blur()}
            >
              <img src={Github} alt="Github" className="link" />
            </a>
          </div>

          {/* LinkedIn Link */}
          <div className="link-container">
            <a
              href="https://www.linkedin.com/in/muhammad-arish-248471283/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.currentTarget.blur()}
            >
              <img src={Linkedin} alt="LinkedIn" className="link" />
            </a>
          </div>

          {/* Instagram Link */}
          <div className="link-container">
            <a
              href="https://www.instagram.com/arshi._.x7/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.currentTarget.blur()}
            >
              <img src={Instagram} alt="Instagram" className="link" />
            </a>
          </div>

          {/* Facebook Link */}
          <div className="link-container">
            <a
              href="https://www.facebook.com/muhammad.areesh.180"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.currentTarget.blur()}
            >
              <img src={Facebook} alt="Facebook" className="link" />
            </a>
          </div>
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>

        {/* Error Message Popup */}
        {errorMessage && (
          <div className="error-message animated-popup">
            <h2>{errorMessage}</h2>
          </div>
        )}

        {/* Thank You Message Popup */}
        {thankYouMessage && (
          <div className="thank-you-message animated-popup">
            <h2>{thankYouMessage}</h2>
          </div>
        )}

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
