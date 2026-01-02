import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <span className="footer-brand-name gradient-text">Enzo Fischer</span>
            <p className="footer-bio">
              Software Engineer specialized in Full Stack Development, Java/Python Backend, Salesforce & Cloud Integrations and AI solutions.
            </p>
            <div className="footer-social-links">
              <a href="https://github.com/efsantoss" target="_blank" rel="noreferrer" className="footer-social-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/enzo-fischer-/" target="_blank" rel="noreferrer" className="footer-social-btn">LinkedIn</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Navigation</h3>
            <nav className="footer-nav">
              <a href="#">Home</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Contact</h3>
            <div className="footer-contact-info">
              <p>enzo_fischer10@hotmail.com</p>
              <p>São Paulo, Brazil</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">© {new Date().getFullYear()} Enzo Fischer. Built with cosmic precision.</p>
        </div>
      </div>
    </footer>
  )
}