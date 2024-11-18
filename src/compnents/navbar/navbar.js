import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
import './navbar.css';
import navImg from './navimg.png';
import phone from './phone.png';
import menu from './menu.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home'); // Tracks the active section
  const [showMenu, setShowMenu] = useState(false); // Mobile menu toggle state
  const menuRef = useRef(null); // Reference for detecting clicks outside the menu

  const sections = [
    { id: 'intro', label: 'Home' },
    { id: 'skills', label: 'About Me' },
    { id: 'works', label: 'My Projects' },
    { id: 'clients', label: 'My Services' },
  ];

  // Intersection Observer to track active sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // At least 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [sections]);

  // Add event listeners to close menu on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false); // Close menu if clicked outside
      }
    };

    const handleScroll = () => {
      setShowMenu(false); // Close menu on manual scrolling
    };

    // Add listeners
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup listeners on unmount
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu on burger icon click
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Smooth scroll to a section and close menu after navigation
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false); // Close menu
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }} // Start animation
      animate={{ opacity: 1, y: 0 }} // End animation
      transition={{ duration: 0.8 }} // Animation duration
    >
      {/* Logo */}
      <motion.img
        src={navImg}
        alt="logo"
        className="logo"
        whileHover={{ scale: 1.1 }} // Animation on hover
      />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            className={`desktopMenuListItem ${
              activeSection === section.id ? 'active' : ''
            }`}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.1, color: '#ffdd57' }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation on click
          >
            {section.label}
          </motion.button>
        ))}
      </div>

      {/* Desktop Contact Button */}
      <motion.button
        className="desktopMenuBtn"
        onClick={() => scrollToSection('contact')}
        whileHover={{ scale: 1.1, backgroundColor: '#f0f0f0' }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={phone} alt="phone" className="desktopMenuImg" />
        Contact Me
      </motion.button>

      {/* Mobile Menu Icon */}
      <motion.img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={toggleMenu} // Toggle menu on click
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="navMenu"
            ref={menuRef} // Attach ref to detect clicks outside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }} // Exit animation for closing
            transition={{ duration: 0.5 }}
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                className={`listItem ${
                  activeSection === section.id ? 'active' : ''
                }`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.1, color: '#ffdd57' }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}

            {/* Close Button */}
            <motion.button
              className="listItem closeBtn"
              onClick={() => setShowMenu(false)}
              whileHover={{ scale: 1.1, color: '#ff0000' }}
              whileTap={{ scale: 0.9 }}
            >
              Close &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
