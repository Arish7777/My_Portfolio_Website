import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from './img1.jpg';
import pic2 from './img2.jpg';
import pic3 from './img3.jpg';
import pic4 from './img4.jpg';
import pic5 from './IMG-20250827-WA0061.jpg';
import pic6 from './IMG-20250827-WA0062.jpg';
import video1 from './whatsappVideo2025.mp4';
import cvprPdf from './CVPR-Anomaly-Detection.pdf';
import imcPdf from './Image Matching Challenge.pdf';

const SPINE_COLORS = [
  { spine: '#0f2a52', accent: '#4da8ff', glow: 'rgba(77,168,255,0.55)' },
  { spine: '#0a3028', accent: '#4deeea', glow: 'rgba(77,238,234,0.55)' },
  { spine: '#38102a', accent: '#f472b6', glow: 'rgba(244,114,182,0.55)' },
  { spine: '#2e1e06', accent: '#fbbf24', glow: 'rgba(251,191,36,0.55)' },
  { spine: '#1e1038', accent: '#a78bfa', glow: 'rgba(167,139,250,0.55)' },
  { spine: '#1a0a30', accent: '#c084fc', glow: 'rgba(192,132,252,0.55)' },
  { spine: '#0a2030', accent: '#22d3ee', glow: 'rgba(34,211,238,0.55)' },
];

const servicesData = [
  {
    id: 'ai-solutions', icon: 'fa-brain', title: 'AI Solutions', subtitle: 'Strategic AI',
    desc: 'Custom AI-driven solutions using state-of-the-art Deep Learning and Neural Networks.',
    color: SPINE_COLORS[0],
    pages: [
      { type: 'info', title: 'Neural Architecture', content: 'Designing custom Deep Learning models tailored to complex data patterns.', details: ['CNNs for Image Analysis', 'RNNs for Sequential Data', 'Custom Loss Optimisation'], icon: 'fa-microchip' },
      { type: 'info', title: 'Predictive Power', content: 'Transforming historical data into actionable future insights.', details: ['Time-Series Forecasting', 'Anomaly Detection', 'Risk Probability Mapping'], icon: 'fa-chart-line' },
    ],
  },
  {
    id: 'computer-vision', icon: 'fa-eye', title: 'Computer Vision', subtitle: 'Project Gallery',
    desc: 'Advanced image processing, object detection, and anomaly localisation systems.',
    color: SPINE_COLORS[1],
    pages: [
      { type: 'image', src: pic1 }, { type: 'image', src: pic2 },
      { type: 'image', src: pic3 }, { type: 'image', src: pic4 },
      { type: 'image', src: pic5 }, { type: 'image', src: pic6 },
      { type: 'video', src: video1 },
    ],
  },
  {
    id: 'ai-automation', icon: 'fa-robot', title: 'AI Automation', subtitle: 'Workflow Intelligence',
    desc: 'Streamlining complex workflows with intelligent automation and autonomous agents.',
    color: SPINE_COLORS[2],
    pages: [
      { type: 'info', title: 'Agentic Systems', content: 'Deploying autonomous agents that can reason, plan, and execute multi-step tasks.', details: ['Auto-Reasoning Pipelines', 'Dynamic Task Allocation', 'Self-Correcting Workflows'], icon: 'fa-robot' },
      { type: 'info', title: 'Process Efficiency', content: 'Eliminating manual bottlenecks through intelligent document processing.', details: ['RPA + AI Integration', 'Smart Data Extraction', 'Automated Validation'], icon: 'fa-bolt' },
    ],
  },
  {
    id: 'nlp-llms', icon: 'fa-comments', title: 'NLP & LLMs', subtitle: 'Semantic AI',
    desc: 'Developing sophisticated conversational AI and custom Large Language Model integrations.',
    color: SPINE_COLORS[3],
    pages: [
      { type: 'info', title: 'LLM Fine-Tuning', content: 'Optimising state-of-the-art LLMs for domain-specific accuracy.', details: ['RAG Architecture', 'Prompt Engineering', 'Custom Vocabulary Training'], icon: 'fa-comment-dots' },
      { type: 'info', title: 'Text Analytics', content: 'Extracting deep meaning, sentiment, and intent from unstructured datasets.', details: ['Sentiment Analysis', 'Named Entity Recognition', 'Multilingual Support'], icon: 'fa-search' },
    ],
  },
  {
    id: 'mlops', icon: 'fa-project-diagram', title: 'MLOps & Systems', subtitle: 'Production Ready',
    desc: 'End-to-end ML pipelines from data processing to production deployment.',
    color: SPINE_COLORS[4],
    pages: [
      { type: 'info', title: 'Model Lifecycle', content: 'Governing the transition from research to scalable production environments.', details: ['CI/CD for ML', 'Data Versioning', 'Automated Retraining'], icon: 'fa-sync' },
      { type: 'info', title: 'Monitoring', content: 'Real-time performance tracking and drift detection for deployed AI systems.', details: ['Drift Monitoring', 'Latency Optimisation', 'Resource Orchestration'], icon: 'fa-tachometer-alt' },
    ],
  },
  {
    id: 'research-cvpr', icon: 'fa-file-alt', title: 'CVPR 2025 Paper', subtitle: 'Research Paper',
    desc: 'Prompt-Based Anomaly Detection for Robust Industrial Inspection — VAND 3.0 Challenge (CVPR 2025).',
    color: SPINE_COLORS[5],
    pdfLink: cvprPdf,
    pages: [
      { type: 'info', title: 'Abstract', content: 'Our project addresses the VAND 3.0 Challenge (CVPR 2025) under Category 1 — Adapt & Detect: Robust Anomaly Detection in Real-World Applications. We develop a Prompt-Based Anomaly Detection (PromptAD) system leveraging CLIP\'s vision-language embeddings to identify defects in industrial images.', details: ['85.4% image-level AUC', '83.2% pixel-level AUC', 'Unsupervised approach on MVTec AD'], icon: 'fa-scroll' },
      { type: 'info', title: 'Introduction', content: 'Visual anomaly detection is critical for industrial quality control. Traditional methods struggle with distribution shifts such as changes in lighting or camera angles. PromptAD trains on normal images and evaluates on both seen and unseen test conditions.', details: ['Leverages CLIP vision-language capabilities', 'Prompt engineering for one-class learning', 'Robustness to real-world distribution shifts'], icon: 'fa-lightbulb' },
      { type: 'info', title: 'Background Study', content: 'Classical approaches like HOG and SIFT rely on handcrafted features. Deep learning models including autoencoders and GANs improve accuracy but require labeled data. Vision-language models like CLIP excel in zero-shot and few-shot learning.', details: ['CLIP-based models for unsupervised detection', 'Prompt-based methods bridge research & deployment', 'Literature review of anomaly detection methods'], icon: 'fa-book' },
      { type: 'info', title: 'Methodology', content: 'PromptAD uses CLIP\'s vision-language framework for anomaly detection on the MVTec AD dataset. Images resized to 224×224 pixels and normalized using ImageNet statistics. Training uses only normal images with augmentations for robustness.', details: ['Frozen CLIP backbone with learned prompts', 'Anomaly localization head', 'Data augmentation: flips, rotations, color jitter'], icon: 'fa-cogs' },
    ],
  },
  {
    id: 'research-imc', icon: 'fa-file-alt', title: 'IMC 2025 Paper', subtitle: 'Research Paper',
    desc: 'Image Matching Challenge 2025 — Scene Clustering and 3D Reconstruction using MAST3R.',
    color: SPINE_COLORS[6],
    pdfLink: imcPdf,
    pages: [
      { type: 'info', title: 'Abstract', content: 'The Image Matching Challenge (IMC) 2025 presents a complex computer vision problem centered on "Doppelgangers" — visually similar but distinct scenes that confuse traditional Structure-from-Motion (SfM) pipelines. Our project leverages MAST3R for dense 3D reconstruction.', details: ['Vision Transformer architecture', 'Sparse Global Alignment backend', 'Accurate scene clustering & outlier rejection'], icon: 'fa-scroll' },
      { type: 'info', title: 'Introduction & Background', content: 'Traditional SfM pipelines like COLMAP fail under repetitive structures and wide baselines. Transformer-based matchers like LoFTR improve wide-baseline matching but still rely on 2D features. MAST3R predicts dense 3D points and confidence maps per pixel.', details: ['Feature Extraction (SIFT, SuperPoint)', 'Geometric Verification (RANSAC)', 'Triangulation & Bundle Adjustment'], icon: 'fa-lightbulb' },
      { type: 'info', title: 'MAST3R Architecture', content: 'AsymmetricMASt3R uses a Siamese ViT encoder with cross-attention decoder to produce 3D point predictions, confidence scores, and local features for retrieval and reciprocal matching.', details: ['3D Point Head — predicts (x, y, z) per pixel', 'Confidence Head — assigns reliability scores', 'Descriptor Head — local features for matching'], icon: 'fa-cubes' },
      { type: 'info', title: 'Pipeline & Innovations', content: 'Full system pipeline includes dataset ingestion, preprocessing, pairwise image matching, graph construction, scene clustering, and Sparse Global Alignment (SparseGA) for final submission.', details: ['SparseGA optimizes 3D points & camera poses', 'Robust gamma loss for outlier tolerance', 'Low-Rank Depth Approximation (LoRA)'], icon: 'fa-cogs' },
    ],
  },
];

/* ─── BookModal ──────────────────────────────────────────────────────────── */
const BookModal = ({ service, onClose, bookRef, tilt }) => {
  const [activePage, setActivePage] = useState(0);
  const [coverOpen, setCoverOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [flyBack, setFlyBack] = useState(false);
  const c = service.color;
  const total = service.pages.length;
  const page = service.pages[activePage];

  // Get book's position for fly-back animation
  const getBookRect = () => {
    if (bookRef && bookRef.current) {
      return bookRef.current.getBoundingClientRect();
    }
    return null;
  };

  const handleClose = () => {
    setClosing(true);
    setCoverOpen(false);
  };

  // After cover closes, fly the book back
  const handleCoverAnimationComplete = () => {
    if (closing && !flyBack) {
      setFlyBack(true);
    }
    if (!closing && !coverOpen) {
      setCoverOpen(true);
    }
  };

  const handleFlyBackComplete = () => {
    if (flyBack) {
      onClose();
    }
  };

  const rect = getBookRect();
  const flyX = rect ? rect.left + rect.width / 2 - window.innerWidth / 2 : 0;
  const flyY = rect ? rect.top + rect.height / 2 - window.innerHeight / 2 : 0;
  const flyRotateY = rect ? (tilt || 0) : 0;

  return (
    <motion.div
      className="book-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: flyBack ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: flyBack ? 0 : 0 }}
      onClick={!flyBack ? handleClose : undefined}
    >
      <motion.div
        className="book-3d-scene"
        initial={{ opacity: 0, scale: 0.15, x: flyX, y: flyY, rotateY: flyRotateY, z: -100 }}
        animate={
          flyBack
            ? { 
                opacity: [1, 1, 1, 0], 
                scale: [1, 0.5, 0.08], 
                x: [0, flyX * 0.45, flyX], 
                y: [0, flyY * 0.45, flyY], 
                rotateY: [0, -90, (tilt || 0)], // Clear turn showing side-profile
                z: [0, 150, -200],              // Lift then slot in
                transition: { 
                  duration: 1.4, 
                  times: [0, 0.45, 0.9, 1],
                  ease: "easeInOut"
                }
              }
            : closing
            ? { 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                y: 0, 
                rotateY: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.3 }
              }
            : { 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                y: 0, 
                rotateY: 0,
                filter: 'blur(0px)',
                transition: { 
                  duration: 0.65, 
                  ease: [0.23, 0.85, 0.32, 1.05],
                  delay: 0.1
                }
              }
        }
        onAnimationComplete={() => {
          if (flyBack) handleFlyBackComplete();
          if (!closing && !coverOpen && !flyBack) setCoverOpen(true);
        }}
        onClick={(e) => !flyBack && e.stopPropagation()}
        style={{ '--book-spine': c.spine, '--book-accent': c.accent, '--book-glow': c.glow }}
      >
        {/* ── 3D book wrapper ── */}
        <div className="book-3d-body">

          {/* SPINE (left side, always visible) */}
          <div className="book-spine-3d" style={{ background: `linear-gradient(180deg, ${c.spine} 0%, #050a14 100%)`, borderRight: `2px solid ${c.accent}44` }}>
            <i className={`fas ${service.icon}`} style={{ color: c.accent }} />
            <span className="spine-label" style={{ color: c.accent }}>{service.title}</span>
          </div>

          {/* BACK COVER + thickness */}
          <div className="book-back-3d" style={{ background: c.spine }}>
            <div className="book-thickness-3d" style={{ background: `linear-gradient(90deg, ${c.spine}, #080f1e)` }} />
          </div>

          {/* PAGES BLOCK (content area) - No scroll */}
          <div className="book-pages-block">
            <div className="page-lines-texture" />
            <div className="page-content-fixed">

              {/* Close button */}
              <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
                <i className="fas fa-times" />
              </button>

              {/* Header */}
              <div className="modal-service-header">
                <div className="modal-header-icon" style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}33` }}>
                  <i className={`fas ${service.icon}`} style={{ color: c.accent }} />
                </div>
                <h2 style={{ color: c.accent }}>{service.title}</h2>
                <span className="modal-tag" style={{ background: `${c.accent}18`, color: c.accent, border: `1px solid ${c.accent}33` }}>
                  {service.subtitle}
                </span>
                <p>{service.desc}</p>
                {service.pdfLink && (
                  <a href={service.pdfLink} target="_blank" rel="noopener noreferrer" className="modal-pdf-btn" style={{ '--acc': c.accent }}>
                    <i className="fas fa-external-link-alt" /> View Full PDF
                  </a>
                )}
              </div>

              <div className="modal-divider" style={{ background: `linear-gradient(90deg, ${c.accent}44, transparent)` }} />

              {/* Page content */}
              <div className="modal-page-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePage}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3 }}
                  >
                    {page.type === 'video' ? (
                      <video src={page.src} muted loop autoPlay playsInline className="modal-media" />
                    ) : page.type === 'image' ? (
                      <img src={page.src} alt="" className="modal-media" />
                    ) : (
                      <div className="modal-info-page" style={{ borderLeft: `3px solid ${c.accent}` }}>
                        <div className="modal-info-icon" style={{ background: `${c.accent}18`, color: c.accent }}>
                          <i className={`fas ${page.icon}`} />
                        </div>
                        <h3 style={{ color: c.accent }}>{page.title}</h3>
                        <p>{page.content}</p>
                        <ul>
                          {page.details.map((d, i) => (
                            <li key={i}><i className="fas fa-check-circle" style={{ color: c.accent }} /> {d}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Navigation - moved to the right side after heading */}
          {total > 1 && (
            <div className="modal-nav-right">
              <button className="modal-nav-btn-up" onClick={() => setActivePage(p => Math.max(0, p - 1))} disabled={activePage === 0} style={{ '--acc': c.accent }}>
                <i className="fas fa-chevron-up" />
              </button>
              <div className="modal-page-indicator">
                <span style={{ color: c.accent }}>{activePage + 1}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}> / {total}</span>
              </div>
              <button className="modal-nav-btn-down" onClick={() => setActivePage(p => Math.min(total - 1, p + 1))} disabled={activePage === total - 1} style={{ '--acc': c.accent }}>
                <i className="fas fa-chevron-down" />
              </button>
            </div>
          )}

          {/* FRONT COVER (swings open/close with realistic physics) */}
          <motion.div
            className="book-cover-3d"
            style={{ 
              background: `linear-gradient(145deg, ${c.spine} 0%, #050e1f 100%)`, 
              transformOrigin: 'left center',
              boxShadow: coverOpen ? 'none' : '0 0 0 1px rgba(255,255,255,0.05)'
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: coverOpen && !closing && !flyBack ? -168 : 0 }}
            transition={{ 
              duration: 0.9, 
              ease: [0.645, 0.045, 0.355, 1],
              delay: closing ? 0 : 0.08
            }}
            onAnimationComplete={handleCoverAnimationComplete}
          >
            {/* Outer cover face */}
            <div className="cover-outer-face">
              {/* Gold foil frame */}
              <div className="cover-gold-frame" style={{ borderColor: `${c.accent}55` }} />
              {/* Embossed icon */}
              <div className="cover-emblem" style={{ border: `2px solid ${c.accent}44`, boxShadow: `0 0 30px ${c.glow}` }}>
                <i className={`fas ${service.icon}`} style={{ color: c.accent, fontSize: '2.2rem' }} />
              </div>
              <h3 className="cover-title" style={{ color: c.accent }}>{service.title}</h3>
              <p className="cover-subtitle" style={{ color: `${c.accent}99` }}>{service.subtitle}</p>
              {/* Page-edge stripe on right */}
              <div className="cover-page-edge" />
              {/* Shine */}
              <div className="cover-shine" />
              {/* Cover texture for realism */}
              <div className="cover-texture" />
            </div>
            {/* Inner cover face (visible when open) */}
            <div className="cover-inner-face" style={{ background: `linear-gradient(135deg, #060d1e, ${c.spine}88)` }}>
              <div className="inner-cover-pattern" />
              <div className="inner-cover-text">
                <i className={`fas ${service.icon}`} style={{ color: `${c.accent}66`, fontSize: '2rem' }} />
                <p style={{ color: `${c.accent}aa`, fontSize: '0.7rem', marginTop: '1rem', letterSpacing: '2px' }}>OPEN TO READ</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Drop shadow under the book with animation */}
        <motion.div 
          className="book-floor-shadow" 
          style={{ background: `radial-gradient(ellipse, ${c.glow} 0%, transparent 70%)` }}
          animate={{ 
            opacity: flyBack ? 0 : 0.8,
            scale: flyBack ? 0.5 : 1
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

/* ─── Book on Shelf ──────────────────────────────────────────────────────── */
const Book = ({ service, index, onOpen, anyOpen, isOpened }) => {
  const [hovered, setHovered] = useState(false);
  const bookRef = useRef(null);
  const c = service.color;
  const tilt = (index % 2 === 0 ? 1 : -1) * (1 + (index % 3));

  const handleClick = () => {
    onOpen(service, bookRef, tilt);
  };

  return (
    <motion.div
      ref={bookRef}
      className="shelf-book"
      style={{ '--spine-bg': c.spine, '--spine-accent': c.accent, '--spine-glow': c.glow }}
      initial={{ y: 80, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: isOpened ? 0 : 1,
        visibility: isOpened ? 'hidden' : 'visible'
      }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      whileHover={!anyOpen && !isOpened ? {
        y: -44,
        scale: 1.06,
        transition: { type: 'spring', stiffness: 340, damping: 16 },
      } : {}}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={!isOpened ? handleClick : undefined}
    >
      <div className="book-body" style={{ '--tilt': `${tilt}deg` }}>

        {/* Left spine strip */}
        <div className="book-spine-strip" style={{ background: `linear-gradient(180deg, ${c.accent}55 0%, ${c.spine} 100%)` }}>
          <span className="book-spine-text" style={{ color: `${c.accent}cc` }}>{service.title}</span>
        </div>

        {/* Front cover */}
        <div className="book-front-face">
          <div className="book-face-shine" />
          <div className="book-face-top-band" style={{ background: `linear-gradient(90deg, ${c.accent}, ${c.accent}88)` }} />
          <div className="book-face-bottom-band" style={{ background: `linear-gradient(90deg, ${c.accent}55, transparent)` }} />

          <div className="book-face-icon" style={{ color: c.accent, filter: `drop-shadow(0 0 12px ${c.glow})` }}>
            <i className={`fas ${service.icon}`} />
          </div>
          <div className="book-face-title" style={{ color: c.accent }}>{service.title}</div>
          <div className="book-face-tag" style={{ borderColor: `${c.accent}44`, color: `${c.accent}bb`, background: `${c.accent}10` }}>
            {service.subtitle}
          </div>

          {/* Page edges on right */}
          <div className="book-page-edges" />
          {/* Embossed corner ornament */}
          <div className="book-corner-tl" style={{ borderColor: `${c.accent}44` }} />
          <div className="book-corner-br" style={{ borderColor: `${c.accent}44` }} />
        </div>

        {/* Cast shadow to right */}
        <div className="book-cast-shadow" />
        {/* Bottom ledge */}
        <div className="book-bottom-ledge" style={{ background: `linear-gradient(90deg, ${c.spine}, #0c1a2e)` }} />
      </div>

      {/* Hover glow */}
      {hovered && !anyOpen && (
        <div className="book-hover-glow" style={{ background: `radial-gradient(ellipse at 50% 100%, ${c.glow} 0%, transparent 70%)` }} />
      )}

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && !anyOpen && (
          <motion.div
            className="book-tooltip"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ borderColor: `${c.accent}55`, color: c.accent, background: `rgba(6,11,24,0.95)` }}
          >
            <i className="fas fa-book-open" style={{ marginRight: '5px', fontSize: '0.6rem' }} />
            Open Book
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Main Services Component ────────────────────────────────────────────── */
const Services = () => {
  const [openedService, setOpenedService] = useState(null);
  const [openedBookRef, setOpenedBookRef] = useState(null);
  const [openedTilt, setOpenedTilt] = useState(0);
  const [thudActive, setThudActive] = useState(false);

  const handleOpen = (service, ref, tilt) => {
    setOpenedService(service);
    setOpenedBookRef(ref);
    setOpenedTilt(tilt);
  };

  const handleClose = () => {
    setOpenedService(null);
    setOpenedBookRef(null);
    setOpenedTilt(0);
    // Trigger thud animation on shelf
    setThudActive(true);
    setTimeout(() => setThudActive(false), 500);
  };

  return (
    <>
      {/* Blur the navbar when modal is open */}
      <AnimatePresence>
        {openedService && (
          <motion.div
            className="navbar-blur-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <motion.section
        id="services-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="services-grid-texture" />

        <Container fluid className="services-container text-center" style={{ position: 'relative', zIndex: 2 }}>

          <motion.h1
            className="servicesPageTitle"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            My Services
          </motion.h1>
          <motion.p
            className="servicesDesc"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            As an AI developer, I specialise in creating intelligent solutions — ML models,
            conversational AI, and automation tailored to your needs.
          </motion.p>

          {/* ── Bookshelf (Desktop: single shelf) ── */}
          <div className={`bookshelf-scene desktop-shelf ${thudActive ? 'book-thud-animation' : ''}`}>
            <div className="shelf-unit">
              <div className="shelf-back-wall" />
              <div className="shelf-inner-glow" />
              <div className="shelf-side-panel shelf-side-left" />
              <div className="shelf-side-panel shelf-side-right" />
              <div className="shelf-top-rail" />

              <div className="shelf-books-row">
                {servicesData.map((s, i) => (
                  <Book
                    key={s.id}
                    service={s}
                    index={i}
                    onOpen={handleOpen}
                    anyOpen={!!openedService}
                    isOpened={openedService?.id === s.id}
                  />
                ))}
                <div className="shelf-bookend">
                  <div className="bookend-inner" />
                </div>
              </div>

              <div className="shelf-board">
                <div className="shelf-board-top" />
                <div className="shelf-board-face" />
                <div className="shelf-board-underbevel" />
                <div className="shelf-board-shadow" />
              </div>
            </div>
            <div className="shelf-ambient-left" />
            <div className="shelf-ambient-right" />
          </div>

          {/* ── Bookshelf (Mobile: two shelves, 3+2) ── */}
          <div className={`bookshelf-scene mobile-shelf ${thudActive ? 'book-thud-animation' : ''}`}>
            {/* Top shelf: first 3 books */}
            <div className="shelf-unit">
              <div className="shelf-back-wall" />
              <div className="shelf-inner-glow" />
              <div className="shelf-side-panel shelf-side-left" />
              <div className="shelf-side-panel shelf-side-right" />
              <div className="shelf-top-rail" />

              <div className="shelf-books-row">
                {servicesData.slice(0, 3).map((s, i) => (
                  <Book
                    key={s.id}
                    service={s}
                    index={i}
                    onOpen={handleOpen}
                    anyOpen={!!openedService}
                    isOpened={openedService?.id === s.id}
                  />
                ))}
                <div className="shelf-bookend">
                  <div className="bookend-inner" />
                </div>
              </div>

              <div className="shelf-board">
                <div className="shelf-board-top" />
                <div className="shelf-board-face" />
                <div className="shelf-board-underbevel" />
                <div className="shelf-board-shadow" />
              </div>
            </div>

            {/* Middle shelf: next 3 books */}
            <div className="shelf-unit" style={{ marginTop: '2rem' }}>
              <div className="shelf-back-wall" />
              <div className="shelf-inner-glow" />
              <div className="shelf-side-panel shelf-side-left" />
              <div className="shelf-side-panel shelf-side-right" />
              <div className="shelf-top-rail" />

              <div className="shelf-books-row">
                {servicesData.slice(3, 6).map((s, i) => (
                  <Book
                    key={s.id}
                    service={s}
                    index={i + 3}
                    onOpen={handleOpen}
                    anyOpen={!!openedService}
                    isOpened={openedService?.id === s.id}
                  />
                ))}
                <div className="shelf-bookend">
                  <div className="bookend-inner" />
                </div>
              </div>

              <div className="shelf-board">
                <div className="shelf-board-top" />
                <div className="shelf-board-face" />
                <div className="shelf-board-underbevel" />
                <div className="shelf-board-shadow" />
              </div>
            </div>

            {/* Bottom shelf: remaining books */}
            <div className="shelf-unit" style={{ marginTop: '2rem' }}>
              <div className="shelf-back-wall" />
              <div className="shelf-inner-glow" />
              <div className="shelf-side-panel shelf-side-left" />
              <div className="shelf-side-panel shelf-side-right" />
              <div className="shelf-top-rail" />

              <div className="shelf-books-row">
                {servicesData.slice(6).map((s, i) => (
                  <Book
                    key={s.id}
                    service={s}
                    index={i + 6}
                    onOpen={handleOpen}
                    anyOpen={!!openedService}
                    isOpened={openedService?.id === s.id}
                  />
                ))}
                <div className="shelf-bookend">
                  <div className="bookend-inner" />
                </div>
              </div>

              <div className="shelf-board">
                <div className="shelf-board-top" />
                <div className="shelf-board-face" />
                <div className="shelf-board-underbevel" />
                <div className="shelf-board-shadow" />
              </div>
            </div>

            <div className="shelf-ambient-left" />
            <div className="shelf-ambient-right" />
          </div>

        </Container>
      </motion.section>

      {/* ── Book Modal (rendered outside section, above everything) ── */}
      <AnimatePresence>
        {openedService && (
          <BookModal
            service={openedService}
            onClose={handleClose}
            bookRef={openedBookRef}
            tilt={openedTilt}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;