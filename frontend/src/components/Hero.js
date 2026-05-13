import React, { useEffect } from "react";
import Navigation from "./Navigation";
import "./Hero.css";
import { initFitTextClass } from "../utils/fitText";

const Hero = () => {
  useEffect(() => {
    document.body.classList.add("page-loaded");
    const cleanupFit = initFitTextClass({ defaultMin: 24, defaultMax: 180 });
    return () => {
      document.body.classList.remove("page-loaded");
      if (cleanupFit) cleanupFit();
    };
  }, []);

  return (
    <div className="hero-section">
      <Navigation />
      
      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-title-wrapper">
          <div className="hero-greeting">Hello, I'm</div>
          <div className="hero-name">
            <div className="fit-text-container">
              <span
                className="name-text fit-text"
                data-min-font="48"
                data-max-font="180"
                data-multiline="false"
                data-padding="0"
              >
                JOHN DOE
              </span>
            </div>
          </div>
          <div className="hero-title">Full Stack Developer & Creative Designer</div>
          <div className="hero-tagline">
            Crafting beautiful, functional experiences through code and design
          </div>
          
          <div className="hero-cta">
            <a href="#projects" className="cta-button primary">View My Work</a>
            <a href="#contact" className="cta-button secondary">Get In Touch</a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">SCROLL TO EXPLORE</div>
          <div className="scroll-line"></div>
        </div>
      </div>
      
      {/* Infinity Scroller */}
      <div className="hero-scroller-container">
        <div className="infinite-scroller" aria-hidden="true">
          <div className="scroller-track">
            {[...Array(24)].map((_, i) => (
              <div key={`sc-a-${i}`} className="scroller-item">✦</div>
            ))}
            {[...Array(24)].map((_, i) => (
              <div key={`sc-b-${i}`} className="scroller-item">✦</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;