import React from 'react'

export const Skills = () => {
  const skills = [
    { name: "Java", icon: "java" },
    { name: "Spring", icon: "spring" },
    { name: "Python", icon: "py" },
    { name: "Flask", icon: "flask" },
    { name: "AWS", icon: "aws" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "React", icon: "react" },
    { name: "TS", icon: "ts" },
    { name: "Angular", icon: "angular" },
    { name: "AI/ML", icon: "ai" },
    { name: "Git", icon: "git" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h3>Technical Expertise</h3>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt={skill.name} />
          </div>
        ))}
        {/* Salesforce e Jira */}
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce"/>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" />
        </div>
      </div>
    </section>
  )
}