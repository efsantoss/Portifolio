import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!form.current) return;

    const templateParams = {
      from_name: form.current.from_name.value,
      reply_to: form.current.reply_to.value,
      message: form.current.message.value,
    };

    emailjs.send(
      'service_tipro1j',    
      'template_7vmmm6a',   
      templateParams, 
      'R4Ka-4hijwWAmeGq9'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Message Sent Successfully! 🚀");
        form.current?.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus("Failed to send. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2 className="section-title gradient-text">Initiate Transmission</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-grid">
            <div className="form-group">
              <input 
                name="from_name" 
                type="text" 
                placeholder="Full Name" 
                required 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <input 
                name="reply_to" 
                type="email" 
                placeholder="Your Email Address" 
                required 
                className="form-input" 
              />
            </div>
            <div className="form-group full-width">
              <textarea 
                name="message" 
                placeholder="Your Project Vision or Inquiry" 
                required 
                className="form-textarea"
                rows={5}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="contact-btn">
            {status === "Sending..." ? "Transmitting..." : "Send Message"}
          </button>
          
          {status && (
            <p style={{ 
              marginTop: '1.5rem', 
              color: status.includes("Failed") ? "#ff4d4d" : "#00f2fe",
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '0.9rem'
            }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};