export function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header">
            <h2 className="section-title gradient-text">Initiate Transmission</h2>
            <p className="section-content">
              Ready to build something extraordinary? Send a message to the forge.
            </p>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <div className="form-group">
                <input type="text" placeholder="Full Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required className="form-input" />
              </div>
              <div className="form-group full-width">
                <textarea 
                  placeholder="Your Project Vision" 
                  required 
                  minLength={10} 
                  className="form-textarea"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer-simple">
      <p>© {new Date().getFullYear()} Enzo Fischer. Built with React & Java Stack.</p>
    </footer>
  );
}