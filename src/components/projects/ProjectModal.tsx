import { FiX } from 'react-icons/fi'
import type { Project } from '../../data/projects'
import { GlowButton } from '../ui/GlowButton'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 px-5 backdrop-blur-md">
      <div className="glass-border w-full max-w-2xl rounded-lg bg-slate-950 p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">{project.category}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <button
            aria-label="Close project modal"
            className="rounded-lg border border-white/10 p-2 text-slate-200"
            type="button"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>
        <p className="leading-7 text-slate-300">{project.description}</p>
        <p className="mt-5 rounded-lg border border-emerald-200/20 bg-emerald-200/10 p-4 text-sm font-medium text-emerald-100">
          {project.impact}
        </p>
        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <GlowButton href={project.liveUrl}>Discuss this work</GlowButton>
          <GlowButton href={project.repoUrl} variant="secondary">
            GitHub profile
          </GlowButton>
        </div>
      </div>
    </div>
  )
}
