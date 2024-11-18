import React, { useState } from "react";
import { motion } from "framer-motion";
import "./works.css";
import pic1 from "./blank.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";

// Projects data
const projects = [
  {
    image: pic1,
    title: "Book Recommender System",
    description: "This project recommends books to people on basis of popularity, similar description and similar ratings.",
    githubLink: "https://github.com/zayamziamalik/Book-Recommender-System.git",
  },
  {
    image: pic2,
    title: "Scheduling Flights using CSP",
    description: "A creative Web Application designed to Schedule the Flights.",
    githubLink: "https://github.com/Arish7777/Airport-Scheduling-Problem-master",
  },
  {
    image: pic3,
    title: "Processes Comparison Operating System",
    description: "This is an Operating System project that helps us to determine which algorithms work efficiently.",
    githubLink: "https://github.com/Arish7777/Comparison-between-Multiprocessing-and-Multithreading--Operating-system",
  },
  {
    image: pic4,
    title: "Bank Management System",
    description: "A Bank Management System based on OOP Concepts that streamlines and automates banking operations such as account management and transactions.",
    githubLink: "https://github.com/Arish7777/Bank-Management-System",
  },
];

const Works = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle "See More" click
  const handleSeeMore = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects.length); // Loop through images
  };

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="worksTitle"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <motion.p
        className="worksDesc"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        The development of projects involves creating innovative solutions by designing, 
        coding, and implementing applications to meet specific user needs while ensuring 
        functionality, efficiency, and scalability. It combines creativity, technical expertise, 
        and problem-solving to bring ideas to life.
      </motion.p>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <motion.div
            className="worksImgCard"
            key={index}
            style={{
              display: currentImageIndex === index ? "block" : "none",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="worksImg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <div className="worksCardContent">
              <motion.h3
                className="worksCardTitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="worksCardDesc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="worksBtn"
        onClick={handleSeeMore}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        See More <span className="arrow">&gt;</span>
      </motion.button>
    </motion.section>
  );
};

export default Works;
