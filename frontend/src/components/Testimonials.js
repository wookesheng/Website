import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Working with John was an absolute pleasure. His technical expertise and attention to detail transformed our vision into a robust, scalable platform. Highly recommended!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, Digital Solutions",
      content: "John's ability to understand complex requirements and deliver elegant solutions is exceptional. He consistently exceeded our expectations and delivered ahead of schedule.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, InnovateCo",
      content: "An outstanding developer who combines technical prowess with excellent communication skills. John was instrumental in launching our product successfully.",
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        <div className={`testimonials-label ${isVisible ? 'visible' : ''}`}>TESTIMONIALS</div>
        
        <h2 className={`testimonials-title ${isVisible ? 'visible' : ''}`}>
          What People Say
        </h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="quote-mark">“</div>
              
              <p className="testimonial-content">{testimonial.content}</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;