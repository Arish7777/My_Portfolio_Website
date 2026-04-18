import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';

// Desktop sections (without Contact)
const desktopSections = [
  { id: 'intro', label: 'Home' },
  { id: 'skills', label: 'About Me' },
  { id: 'experience-section', label: 'My Experience' },
  { id: 'works', label: 'Featured Projects' },
  { id: 'services-section', label: 'My Services' },
];

// Mobile sections (with Contact)
const mobileSections = [
  ...desktopSections,
  { id: 'contact-section', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px', // Highlights the section as soon as it reaches the top 30% of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Special handler for the very bottom of the page (Services/Contact)
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10)) {
        setActiveSection('contact-section');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const uniqueSectionIds = [...new Set(mobileSections.map(s => s.id))];
    uniqueSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array as observers are set up once

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    const handleScroll = () => {
      setShowMenu(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="custom-navbar-container"
    >
      <BootstrapNavbar expand="lg" className="navbar py-3" variant="dark" fixed="top">
        <Container fluid className="px-md-5">
          <BootstrapNavbar.Brand href="#intro" className="p-0">
            <div className="logo-container">
              <div className="legacy-logo-wrapper">
                <img 
                  src={`/navimg.png?v=${Date.now()}`}
                  alt="Logo" 
                  className="legacy-logo-img"
                />
              </div>
            </div>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler d-lg-none"
            onClick={toggleMenu}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="mobMenuIconSvg"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </BootstrapNavbar.Toggle>

          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="navbar-collapse-content">
            <Nav className="mx-auto desktopMenu">
              {desktopSections.map((section) => (
                <Nav.Link
                  key={section.id}
                  className={`desktopMenuListItem mx-3 ${activeSection === section.id ? 'active' : ''
                    }`}
                  onClick={() => scrollToSection(section.id)}
                  as={motion.div}
                  whileHover={{ scale: 1.1, color: '#ffdd57' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </Nav.Link>
              ))}
            </Nav>

            <motion.button
              className="desktopMenuBtn btn btn-outline-info"
              onClick={() => scrollToSection('contact-section')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                viewBox="0 0 24 24" 
                className="desktopMenuIconSvg me-2"
                fill="currentColor"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Me
            </motion.button>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="navMenu shadow"
            ref={menuRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {mobileSections.map((section) => (
              <motion.button
                key={section.id}
                className={`listItem btn btn-link ${activeSection === section.id ? 'active' : ''
                  }`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.1, color: '#ffdd57' }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}

            <motion.button
              className="listItem closeBtn btn btn-outline-danger mt-3"
              onClick={() => setShowMenu(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Close &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;