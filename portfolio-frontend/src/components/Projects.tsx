import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'

interface Project {
  id: number
  name: string
  description: string
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return (
    <section>
      <h2>Projects</h2>

      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  )
}
