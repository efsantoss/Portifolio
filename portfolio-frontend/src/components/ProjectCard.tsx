import React from 'react'

export function ProjectCards() {
  const featuredProjects = [
    {
      name: "4 Vidas Capstone Project",
      description: "Advanced Full stack platform designed to connect blood donors with collection centers, enabling users to find donation locations, track availability and support health institutions.",
      tech: "Java + Angular + Docker + MongoDb",
      url: "https://github.com/efsantoss/Capstone-Project-II"
    },
    {
      name: "Cloud Image Processor",
      description: "Cloud-native REST API with Python and Flask. Flask API in Docker for image upload, Canny edge detection and SQLite persistence, deployed on AWS EC2.",
      tech: "Python + Flask + SQLite + AWS",
      url: "https://github.com/efsantoss/AWS-Cloud"
    },
    {
      name: "AI Parking Detection",
      description: "Multidisciplinary AI full-stack project focusing on for real time vehicle detection and classification and deployment to a robust database management.",
      tech: "Python + Flask + MySQL + Yolov8",
      url: "https://github.com/efsantoss/ProjetoIntegradorV"
    },
    {
      name: "Salesforce & Java Integrations",
      description: "End-to-end architecture integrating Salesforce (Core & Marketing Cloud) with external Java APIs. Developing custom LWC, Apex controllers, and automated OmniStudio workflows under MVC patterns.",
      tech: "Apex + LWC + Java + Spring Boot",
      url: "https://www.linkedin.com/in/enzo-fischer-/"
    }
  ]

  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          <h2 className="section-title">Active Deployments</h2>
          <div className="portfolio-grid">
            {featuredProjects.map((p, i) => (
              <div className="portfolio-card" key={i}>
                <div className="portfolio-card-glass"></div>
                <div className="portfolio-content">
                  <h3 className="section-subtitle">{p.name}</h3>
                  <p className="section-content">{p.description}</p>
                  <div className="portfolio-footer">
                    <span className="portfolio-tech">{p.tech}</span>
                    <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-accent btn-sm">
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2 className="section-title">Development Lifecycle</h2>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-node">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 18l6-6l-6-6M8 6l-6 6l6 6"></path>
                </svg>
              </div>
              <div className="process-info">
                <h3 className="section-subtitle">Plan</h3>
                <p className="section-content">Architecting system blueprints and user journey maps.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-node">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
              </div>
              <div className="process-info">
                <h3 className="section-subtitle">Build</h3>
                <p className="section-content">Developing clean, modular code with TDD principles.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-node">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2m-15 13v2m0-20v2"></path>
                    <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                    <rect width="8" height="8" x="8" y="8" rx="1"></rect>
                  </g>
                </svg>
              </div>
              <div className="process-info">
                <h3 className="section-subtitle">Scale</h3>
                <p className="section-content">Optimizing performance and deploying to global cloud.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}