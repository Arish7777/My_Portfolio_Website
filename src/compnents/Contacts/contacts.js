import React, { useRef, useState, useEffect } from 'react';
import './contacts.css';
import pic1 from './img1.jpg';
import pic2 from './img2.jpg';
import pic3 from './img3.jpg';
import pic4 from './img4.jpg';
import pic5 from './IMG-20250827-WA0061.jpg';
import pic6 from './IMG-20250827-WA0062.jpg';
import pic7 from './IMG-20250827-WA0063.jpg';
import pic9 from './IMG-20250827-WA0065.jpg';
import pic10 from './IMG-20250827-WA0066.jpg';
import video1 from './whatsappVideo2025.mp4';
import Github from './github.png';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Facebook from './facebook.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Slideshow media data - you can add more images/videos here
  const slideMedia = [
    { type: 'image', src: pic1, alt: 'CVPR 2025 - PROMPT-AD - OUR ACHIEVEMENT', title: 'CVPR 2025 - PROMPT-AD - OUR ACHIEVEMENT' },
    { type: 'image', src: pic2, alt: 'MVTEC AD2 Dataset Paper', title: 'MVTEC AD2 Dataset Paper' },
    { type: 'image', src: pic3, alt: 'CLIP-Paper Review', title: 'CLIP-Paper Review' },
    { type: 'image', src: pic4, alt: 'CLIP-Paper Review', title: 'CLIP-Paper Review' },
    { type: 'image', src: pic5, alt: 'MVTEC AD2 Dataset Preprocessing', title: 'MVTEC AD2 Dataset Preprocessing' },
    { type: 'image', src: pic6, alt: 'CLIP_MODEL in our PROMPT-AD', title: 'CLIP_MODEL in our PROMPT-AD' },
    { type: 'image', src: pic7, alt: 'RESULTS OF PROMPT-AD', title: 'RESULTS OF PROMPT-AD' },
    { type: 'image', src: pic9, alt: 'RESULTS - HEATMAP', title: 'RESULTS - HEATMAP' },
    { type: 'image', src: pic10, alt: 'RESULTS - HEATMAP', title: 'RESULTS - HEATMAP' },
    // Video with audio support
    { type: 'video', src: video1, alt: 'AI Services Demo', title: 'AI Services Demo' },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = (prev + 1) % slideMedia.length;
          // Reset video playing state when changing slides
          setVideoPlaying(false);
          return nextSlide;
        });
      }, 3000); // 3 second interval
      
      return () => clearInterval(interval);
    }
  }, [isPaused, slideMedia.length]);

  // Reset video playing state when slide changes
  useEffect(() => {
    setVideoPlaying(false);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setVideoPlaying(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideMedia.length) % slideMedia.length);
    setVideoPlaying(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideMedia.length);
    setVideoPlaying(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNextSlide();
    }
    if (isRightSwipe) {
      goToPrevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
    setIsPaused(true); // Pause slideshow when video is playing
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.from_email.value;

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

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

        {/* Enhanced Slideshow Section */}
        <div className="slideshow-wrapper-container">
          <div 
            className="slideshow-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="slideshow-wrapper">
              {slideMedia.map((media, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  {media.type === 'image' ? (
                    <img src={media.src} alt={media.alt} className="slide-media" />
                  ) : (
                    <div className="video-container">
                      <video
                        src={media.src}
                        className="slide-media"
                        controls={videoPlaying}
                        muted={!videoPlaying}
                        loop
                        playsInline
                        autoPlay={videoPlaying}
                        preload="metadata"
                        onEnded={() => setIsPaused(false)} // Resume slideshow when video ends
                      />
                      {!videoPlaying && index === currentSlide && (
                        <button 
                          className="video-play-btn"
                          onClick={handleVideoPlay}
                        >
                          ▶️ Play with Audio
                        </button>
                      )}
                    </div>
                  )}
                  <div className="slide-overlay">
                    <h3 className="slide-title">{media.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="slide-nav prev" onClick={goToPrevSlide}>
              &#10094;
            </button>
            <button className="slide-nav next" onClick={goToNextSlide}>
              &#10095;
            </button>

            {/* Dot Indicators */}
            <div className="slide-indicators">
              {slideMedia.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Progress Bar - only show when slideshow is not paused */}
            {!isPaused && (
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  key={currentSlide} // Reset animation on slide change
                />
              </div>
            )}
          </div>
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
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
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