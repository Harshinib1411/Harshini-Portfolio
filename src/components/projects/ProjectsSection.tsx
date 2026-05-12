import { useRef, useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionTitle } from '../ui/SectionTitle'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  useScrollAnimation(sectionRef)

  return (
    <section id="projects" ref={sectionRef} className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Interactive systems with AI-startup polish"
          description="Premium project cards across computer vision, analytics dashboards, workflow automation, and creative digital brand systems."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onSelect={setActiveProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
