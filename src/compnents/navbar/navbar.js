import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={navImg}
        alt="logo"
        className="logo"
        whileHover={{ scale: 1.1 }}
      />

      <div className="desktopMenu">
        {desktopSections.map((section) => (
          <motion.button
            key={section.id}
            className={`desktopMenuListItem ${
              activeSection === section.id ? 'active' : ''
            }`}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.1, color: '#ffdd57' }}
            whileTap={{ scale: 0.95 }}
          >
            {section.label}
          </motion.button>
        ))}
      </div>

      <motion.button
        className="desktopMenuBtn"
        onClick={() => scrollToSection('contact')}
        whileHover={{ scale: 1.1, backgroundColor: '#f0f0f0' }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={phone} alt="phone" className="desktopMenuImg" />
        Contact Me
      </motion.button>

      <motion.img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={toggleMenu}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      />

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="navMenu"
            ref={menuRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {mobileSections.map((section) => (
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