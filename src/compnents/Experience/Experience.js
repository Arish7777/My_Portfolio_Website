import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Certificate PDFs — stored in the Experience directory
const genAICert = require("./Generative AI Concepts-certificate.pdf");
const llmCert = require("./LLMs Concepts-certificate.pdf");
const langchainCert = require("./Dev LLM Apps with LangChain-certificate.pdf");
const smbCert = require("./MUHAMMED CERTIFICATE OF PARTICIPATION.pdf");
const zaysCert = require("./ZAYS LETTERHEAD.pdf");
const offerLetterCert = require("./offer-letter.pdf");
const hackerRankCert = require("./hackerrank.pdf");

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const internships = [
    {
      id: "intern-1",
      role: "AI Software Engineer Intern",
      company: "SMB DigitalZone",
      location: "Dubai, UAE",
      duration: "February 1, 2026 – April 16, 2026",
      icon: "fa-robot",
      color: "#4da8ff",
      certificate: smbCert,
      description:
        "Successfully completed a three-month internship with SMB DigitalZone in the role of AI Software Engineer. Demonstrated punctuality, hard work, and professionalism throughout the internship.",
      highlights: [
        "Contributed positively to assigned projects with care and consistency",
        "Followed guidance from senior team members and adapted well to feedback",
        "Showed a good attitude toward learning, teamwork, and continuous improvement",
        "Maintained a high standard of discipline throughout the internship",
      ],
    },
    {
      id: "intern-2",
      role: "AI Developer Intern",
      company: "Zaysco Business Works",
      duration: "December 1, 2024 – January 31, 2025",
      icon: "fa-brain",
      color: "#4DEEEA",
      certificate: zaysCert,
      description:
        "Successfully completed internship as an AI Developer Intern, actively contributing to various AI-related projects with strong analytical skills, problem-solving abilities, and proficiency in machine learning, deep learning, and data processing.",
      highlights: [
        "Developed and optimized machine learning models for real-world applications",
        "Implemented and fine-tuned deep learning architectures",
        "Conducted data preprocessing, feature engineering, and model evaluation",
        "Collaborated with the development team to integrate AI solutions into business workflows",
        "Researched and implemented state-of-the-art AI techniques to enhance project outcomes",
      ],
    },
    {
      id: "intern-3",
      role: "Machine Learning Intern",
      company: "CodeAlpha",
      duration: "November 5, 2025 – February 5, 2026",
      icon: "fa-code",
      color: "#c084fc",
      certificate: offerLetterCert,
      description:
        "Selected for the Machine Learning Internship at CodeAlpha. Embraced orientation and gave emphasis on learning new skills with a deeper understanding of concepts through hands-on application of knowledge gained as an intern.",
      highlights: [
        "Worked on Machine Learning projects and real-world data analysis",
        "Applied hands-on knowledge of ML concepts through practical projects",
        "Gained deeper understanding through hands-on application of concepts",
      ],
    },
  ];

  const certifications = [
    {
      id: "cert-hr",
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      icon: "fa-trophy",
      color: "#00EA64",
      category: "competitive",
      link: null,
      pdf: hackerRankCert,
    },
    {
      id: "cert-genai",
      title: "Generative AI Concepts",
      issuer: "DataCamp",
      icon: "fa-brain",
      color: "#a78bfa",
      category: "genai",
      pdf: genAICert,
    },
    {
      id: "cert-llm",
      title: "LLMs Concepts",
      issuer: "DataCamp",
      icon: "fa-microchip",
      color: "#a78bfa",
      category: "genai",
      pdf: llmCert,
    },
    {
      id: "cert-langchain",
      title: "Dev LLM Apps with LangChain",
      issuer: "DataCamp",
      icon: "fa-link",
      color: "#a78bfa",
      category: "genai",
      pdf: langchainCert,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section id="experience-section">
      <div className="exp-grid-texture" />

      {/* Section Header */}
      <motion.div
        className="exp-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <h1 className="exp-title">My Experience</h1>
        <p className="exp-subtitle">
          Building expertise through real-world projects, internships, and
          continuous learning in AI & Software Development.
        </p>
      </motion.div>

      {/* Content Area */}
      <div className="container exp-content-container">

        {/* ── Internships Sub-header ── */}
        <motion.div
          className="exp-section-subheader"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <i className="fa-solid fa-briefcase exp-subheader-icon" />
          <h2 className="exp-subheader-title">Internships</h2>
          <span className="exp-subheader-count">{internships.length}</span>
        </motion.div>

        {/* Internship Cards */}
        <motion.div
          className="exp-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {internships.map((intern, idx) => (
            <motion.div
              key={intern.id}
              className="exp-card exp-card-intern"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(intern.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8, scale: 1.01 }}
              style={{ "--accent": intern.color }}
            >
              {/* Glow */}
              <div className="exp-card-glow" />

              {/* Top stripe */}
              <motion.div
                className="exp-card-stripe"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredCard === intern.id ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />

              {/* Header */}
              <div className="exp-card-header">
                <motion.div
                  className="exp-card-icon-circle"
                  animate={{
                    rotateY: hoveredCard === intern.id ? 360 : 0,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <i className={`fa-solid ${intern.icon}`} />
                </motion.div>
                <div className="exp-card-header-text">
                  <h3 className="exp-card-role">{intern.role}</h3>
                  <p className="exp-card-company">
                    <i className="fas fa-building me-2" />
                    {intern.company}
                  </p>
                </div>
                <div className="exp-card-duration">
                  <i className="far fa-calendar-alt me-1" />
                  {intern.duration}
                </div>
              </div>

              {/* Body */}
              <p className="exp-card-desc">{intern.description}</p>

              {/* Highlights */}
              <div className="exp-card-highlights">
                {intern.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="exp-highlight"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + i * 0.08 }}
                  >
                    <span className="exp-highlight-dot" />
                    {h}
                  </motion.div>
                ))}
              </div>

              {/* Footer: Status + Certificate link */}
              <div className="exp-card-footer">
                <div className="exp-status-badge">
                  <i className="fa-solid fa-circle-check me-1" />
                  COMPLETED
                </div>

                {intern.certificate && (
                  <motion.div
                    className="exp-cert-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(intern.certificate, "_blank")}
                  >
                    <i className="fa-solid fa-file-pdf me-1" />
                    VIEW CERTIFICATE
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Certifications Sub-header ── */}
        <motion.div
          className="exp-section-subheader exp-section-subheader--certs"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <i className="fa-solid fa-certificate exp-subheader-icon" />
          <h2 className="exp-subheader-title">Certifications</h2>
          <span className="exp-subheader-count">{certifications.length}</span>
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          className="exp-cert-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className={`exp-cert-card ${cert.category === "genai" ? "genai" : "competitive"}`}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{ "--cert-color": cert.color }}
              onClick={() => {
                if (cert.pdf) {
                  window.open(cert.pdf, "_blank");
                } else if (cert.link) {
                  window.open(cert.link, "_blank");
                }
              }}
            >
              <div className="exp-cert-glow" />

              <motion.div
                className="exp-cert-icon"
                animate={{ rotateZ: [0, -5, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              >
                <i className={`fa-solid ${cert.icon}`} />
              </motion.div>

              <h4 className="exp-cert-title">{cert.title}</h4>
              <p className="exp-cert-issuer">
                <i className="fa-solid fa-award me-1" />
                {cert.issuer}
              </p>

              <div className="exp-cert-badge">
                {cert.category === "genai" ? (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles me-1" />
                    GEN AI
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-code me-1" />
                    COMPETITIVE
                  </>
                )}
              </div>

              <div className="exp-cert-view-hint">
                <i className="fa-solid fa-arrow-up-right-from-square me-1" />
                VIEW CERTIFICATE
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="exp-stats-bar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {[
          { value: "3", label: "Internships", icon: "fa-briefcase" },
          { value: "4", label: "Certifications", icon: "fa-certificate" },
          { value: "3", label: "Gen AI Certs", icon: "fa-brain" },
          { value: "1", label: "HackerRank", icon: "fa-trophy" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="exp-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.08, y: -4 }}
          >
            <div className="exp-stat-icon">
              <i className={`fa-solid ${stat.icon}`} />
            </div>
            <span className="exp-stat-value">{stat.value}</span>
            <span className="exp-stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;

