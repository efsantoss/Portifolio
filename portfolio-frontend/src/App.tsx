import heroPhoto from "/src/assets/hero-photo.jpg"
import { ProjectCards } from "./components/ProjectCard"
import { Skills } from "./components/Skills"
import { ContactForm } from "./components/ContactForm"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="app-container">
      <section className="hero-section">
        <div className="hero-content">
          
          <img src={heroPhoto} alt="Enzo Fischer" className="hero-photo" />
          <h1 className="hero-title gradient-text">Enzo Fischer</h1>
          <p className="hero-subtitle">
            Software Engineer at @PwC Brasil | Full Stack Developer | Salesforce & Cloud Solutions | AI & Data | Java & Spring Boot
          </p>

          <div className="about-container">
            <p>
              Software Engineer with a global mindset and extensive experience in <strong>Full Stack Development and Java/Apex Backend Engineering</strong>. 
              Currently at <strong>PwC Brasil</strong>, I specialize in <strong>Salesforce Data Cloud and AI-driven solutions</strong>, designing architectures that support complex digital transformations.
            </p>
            <p>
              My academic journey spans from an <strong>Associate Degree in ICT from Pacific Link College (Canada)</strong> to a <strong>Bachelor's in Information Systems at PUC-Campinas</strong>. 
              I am further specializing through an <strong>MBA in AI, Data Science, and Big Data at PUC-RS</strong> to build the next generation of intelligent software.
            </p>
            <p>
              Expertise in building scalable microservices with <strong>Java/Spring Boot</strong> and enterprise integrations using <strong>Salesforce, AWS, and modern DevOps pipelines</strong>.
            </p>
          </div>

          <Skills />
          <ProjectCards />
          <ContactForm />
          <Footer />

        </div>
      </section>
    </div>
  );
}