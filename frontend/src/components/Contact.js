import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      label: "Email",
      value: "john.doe@example.com",
      link: "mailto:john.doe@example.com",
      icon: "✉"
    },
    {
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      icon: "☎"
    },
    {
      label: "Location",
      value: "San Francisco, CA",
      link: null,
      icon: "⌖"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "in" },
    { name: "GitHub", url: "https://github.com", icon: "gh" },
    { name: "Twitter", url: "https://twitter.com", icon: "tw" },
    { name: "Dribbble", url: "https://dribbble.com", icon: "dr" }
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-container">
        <div className={`contact-label ${isVisible ? 'visible' : ''}`}>GET IN TOUCH</div>
        
        <h2 className={`contact-title ${isVisible ? 'visible' : ''}`}>
          Let's Work Together
        </h2>
        
        <p className={`contact-subtitle ${isVisible ? 'visible' : ''}`}>
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>
        
        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`contact-info-item ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <div className="info-label">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="info-value link">{info.value}</a>
                  ) : (
                    <div className="info-value">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className={`social-links ${isVisible ? 'visible' : ''}`}>
            <div className="social-label">Follow Me</div>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;