import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./skills.css";
import CollegePic from "./college.jpg";
import SchoolPic from "./school.jpg";
import FASTUni from "./fast_uni.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  const [expandedEdu, setExpandedEdu] = useState('uni');

  const eduData = {
    uni: {
      name: "FAST National University",
      image: FASTUni,
      details: "Top-tier engineering institute specialising in AI Research and Development."
    },
    college: {
      name: "Govt. Degree Malir Cantt College",
      image: CollegePic,
      details: "Premier institution for pre-engineering and mathematics."
    },
    school: {
      name: "Army Public School",
      image: SchoolPic,
      details: "Strong foundations in science and academic discipline."
    }
  };

  const skillsData = [
    {
      category: "Languages",
      icon: "fa-code",
      items: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      icon: "fa-layer-group",
      items: ["PyTorch", "TensorFlow/Keras", "Hugging Face Transformers", "LangChain", "LangGraph", "scikit-learn", "spaCy", "NLTK", "OpenCV", "NumPy", "Pandas"]
    },
    {
      category: "AI/ML Techniques",
      icon: "fa-brain",
      items: ["RAG Pipelines", "LoRA-QLoRA Fine-Tuning", "Prompt Engineering"]
    },
    {
      category: "Tools & Platforms",
      icon: "fa-tools",
      items: ["Git", "GitHub", "Docker", "VS Code", "AWS EC2", "S3", "FastAPI", "React", "PostgreSQL", "Postman", "Linux (Ubuntu)", "Jupyter Notebook", "PyTest", "Figma", "n8n"]
    },
    {
      category: "Soft Skills",
      icon: "fa-users",
      items: ["Problem Solving", "System Design", "Analytical Thinking", "Technical Communication", "Research-Oriented Mindset", "Ethical AI Awareness", "Leadership", "Time Management"]
    }
  ];

  const hireData = [
    {
      icon: "fa-rocket",
      title: "End-to-End AI Development",
      desc: "From concept to production — I build complete AI solutions including data pipelines, model training, API deployment, and monitoring."
    },
    {
      icon: "fa-brain",
      title: "Deep Learning Expertise",
      desc: "Proficient in CNNs, RNNs, Transformers, and cutting-edge architectures for computer vision, NLP, and generative AI applications."
    },
    {
      icon: "fa-comments",
      title: "LLM & Conversational AI",
      desc: "Experience with RAG pipelines, fine-tuning LLMs (LoRA/QLoRA), prompt engineering, and building intelligent chatbot systems."
    },
    {
      icon: "fa-cogs",
      title: "Automation & Integration",
      desc: "Skilled in workflow automation with n8n, FastAPI backends, Docker deployments, and CI/CD pipelines for ML systems."
    },
    {
      icon: "fa-lightbulb",
      title: "Problem-First Mindset",
      desc: "I don't just write code — I understand business problems, design scalable solutions, and communicate technical concepts clearly."
    },
    {
      icon: "fa-handshake",
      title: "Collaborative & Reliable",
      desc: "Strong communicator with leadership experience, research-oriented mindset, and commitment to ethical AI practices."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
    },
  };


  const cards = [
    {
      key: "education",
      className: "card-education",
      title: "Education",
      quote: "Education is not preparation for life; education is life itself — John Dewey",
    },
    {
      key: "skills",
      className: "card-skills",
      title: "Skills",
      quote: "The expert in anything was once a beginner.",
    },
    {
      key: "whyHire",
      className: "card-hire",
      title: "Why Hire Me?",
      quote: "Strong relationships go a long way!",
    },
  ];

  const getIcon = (key) => {
    const icons = {
      education: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      skills: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      whyHire: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    };
    return icons[key];
  };

  const renderExpandedContent = (cardKey) => {
    if (cardKey === "education") {
      return (
        <div className="expanded-education">
          <div className="education-sidebar">
            <div className="timeline">
              {[
                { key: 'uni', title: 'BS Artificial Intelligence', sub: 'FAST National University (2022–2026)' },
                { key: 'college', title: 'Intermediate', sub: 'Govt. Degree Malir Cantt College (2020–2022)' },
                { key: 'school', title: 'Matriculation', sub: 'Army Public School (2007–2020)' },
              ].map((item) => (
                <motion.div
                  key={item.key}
                  className={`timeline-item ${expandedEdu === item.key ? 'active' : ''}`}
                  onMouseEnter={() => setExpandedEdu(item.key)}
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ x: 4 }}
                >
                  <h5>{item.title}</h5>
                  <p>{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="education-main-view"
              key={expandedEdu}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="edu-hero-box">
                <div className="edu-image-container">
                  <img
                    src={eduData[expandedEdu].image}
                    alt={eduData[expandedEdu].name}
                    className={`edu-big-img img-${expandedEdu}`}
                  />
                  <div className="edu-img-overlay"></div>
                </div>
                <div className="edu-details-floating">
                  <h3>{eduData[expandedEdu].name}</h3>
                  <p>{eduData[expandedEdu].details}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      );
    }

    if (cardKey === "skills") {
      return (
        <div className="expanded-skills">
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.category}
              className="skill-category-expanded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  <i className={`fas ${cat.icon}`}></i>
                </div>
                <h4>{cat.category}</h4>
              </div>
              <div className="skill-tags">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.08 + i * 0.03, duration: 0.3 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (cardKey === "whyHire") {
      return (
        <div className="expanded-hire">
          <div className="hire-grid">
            {hireData.map((item, idx) => (
              <motion.div
                key={item.title}
                className="hire-card"
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="hire-card-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <div className="hire-card-glow"></div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="hire-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="cta-text">
              <i className="fas fa-envelope me-2"></i>
              Ready to collaborate? Scroll down to get in touch!
            </p>
          </motion.div>
        </div>
      );
    }
  };

  return (
    <section id="skills">
      {/* Ambient texture */}
      <div className="skills-grid-texture" />

      <motion.h1
        className="skillTitle"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="skillDesc"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        A skilled and passionate developer with expertise in creating visually
        compelling, user-friendly applications — specialising in solving
        real-world problems with AI.
      </motion.p>

      <div className="container skillsContainer">
        <motion.div
          className="row g-4 justify-content-center skills-3d-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card) => {
            return (
              <motion.div
                key={card.key}
                layout
                className={`col-lg-12 col-md-12 col-sm-12`}
                variants={cardVariants}
                transition={{ layout: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
              >
                <motion.div
                  className={`skillBox ${card.className} expanded`}
                  layout
                  transition={{ layout: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
                >
                  {/* Bottom accent stripe */}
                  <div className="card-stripe" />

                  {/* Card Header - always visible */}
                  <div className="card-header-row">
                    <div className="card-icon-circle">
                      <div className="card-header-svg-icon">
                        {getIcon(card.key)}
                      </div>
                    </div>
                    <div className="card-header-text">
                      <h2 className="card-title">
                        {card.key === 'education' ? 'Academic Journey' : card.title}
                      </h2>
                      <p className="card-quote">{card.quote}</p>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className="expandable-content">
                    <div className="expand-divider" />
                    {renderExpandedContent(card.key)}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;