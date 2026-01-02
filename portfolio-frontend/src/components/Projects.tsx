import { useEffect, useState } from "react";
import { fetchProjects } from "../services/projectService";

type Project = {
  title: string;
  description: string;
  technologies: string;
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span>{project.technologies}</span>
        </div>
      ))}
    </section>
  );
}
