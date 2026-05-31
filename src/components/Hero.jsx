import { useEffect, useState } from "react";
import profilePhoto from '../assets/profile2.png'

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`hero ${visible ? "visible" : ""}`}>
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-blob blob1"></div>
        <div className="hero-blob blob2"></div>
        <div className="hero-blob blob3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">Mechanical Engineering</div>
        <h1 className="hero-title">
          <span className="hero-name">Aditya</span>
          <span className="hero-name accent">Badgujar</span>
        </h1>
        <p className="hero-subtitle">
          Graduate Student · University of Michigan
        </p>
        <p className="hero-description">
          Specializing in <strong>Structural</strong> and{" "}
          <strong>Computational Mechanics</strong> — transforming complex
          engineering challenges into precise, simulation-driven solutions.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={scrollToWork}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <a
            href="mailto:adityasbadgujar03@gmail.com"
            className="btn-secondary"
          >
            Get In Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">13+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">FEA</span>
            <span className="stat-label">Specialist</span>
          </div>
        </div>
      </div>

      <div className="hero-photo-frame">
        <img src={profilePhoto} alt="Aditya Badgujar" />
        <div className="photo-placeholder">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <p>Profile Photo</p>
        </div>
        <div className="photo-ring"></div>
        <div className="photo-dot dot1"></div>
        <div className="photo-dot dot2"></div>
      </div>

      <button className="scroll-indicator" onClick={scrollToWork} aria-label="Scroll down">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </button>
    </section>
  );
}
