import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import './navbar.css';
import navImg from './navimg.png';
import phone from './phone.png';
import menu from './menu.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Desktop sections (without Contact)
  const desktopSections = [
    { id: 'intro', label: 'Home' },
    { id: 'skills', label: 'About Me' },
    { id: 'works', label: 'My Projects' },
    { id: 'clients', label: 'My Services' },
  ];

  // Mobile sections (with Contact)
  const mobileSections = [
    ...desktopSections,
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections (including Contact)
    mobileSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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
        <Container>
          <BootstrapNavbar.Brand href="#intro" className="p-0">
            <motion.img
              src={navImg}
              alt="logo"
              className="logo"
              whileHover={{ scale: 1.1 }}
            />
          </BootstrapNavbar.Brand>
          
          <BootstrapNavbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="custom-toggler d-lg-none"
            onClick={toggleMenu}
          >
            <motion.img
              src={menu}
              alt="Menu"
              className="mobMenu"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            />
          </BootstrapNavbar.Toggle>
          
          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mx-auto desktopMenu">
              {desktopSections.map((section) => (
                <Nav.Link 
                  key={section.id}
                  className={`desktopMenuListItem mx-3 ${
                    activeSection === section.id ? 'active' : ''
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
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={phone} alt="phone" className="desktopMenuImg" />
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
                className={`listItem btn btn-link ${
                  activeSection === section.id ? 'active' : ''
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