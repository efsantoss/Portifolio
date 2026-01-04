import React from 'react'

export function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-grid">
        <div className="footer-about">
          <h3 className="gradient-text">Enzo Fischer</h3>
          {}
          <p>Architecting robust solutions at PwC Brasil. Specializing in Full Stack, Salesforce, Cloud, and AI-driven systems.</p>
          <div className="footer-social-links">
            <a href="https://linkedin.com/in/enzo-fischer-/" target="_blank" rel="noreferrer" className="footer-social-btn">LinkedIn</a>
            <a href="https://github.com/efsantoss" target="_blank" rel="noreferrer" className="footer-social-btn">GitHub</a>
          </div>
        </div>

        <div className="footer-nav-section">
          <h4>Navigation</h4>
          <nav className="footer-nav">
            <a href="#">Home</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-nav-section">
          <h4>Status</h4>
          <p style={{ color: 'var(--accent-light)', fontSize: '0.9rem' }}>
            ● Open for collaborations
          </p>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5, fontSize: '0.8rem' }}>
        © 2025 Enzo Fischer. Built with React & Nebula Forge.
      </p>
    </footer>
  );
}