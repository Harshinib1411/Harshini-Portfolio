import { FiArrowUpRight } from 'react-icons/fi'
import type { Project } from '../../data/projects'
import { GlassCard } from '../ui/GlassCard'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <GlassCard className="group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-200/35">
      <div className={`mb-5 h-48 overflow-hidden rounded-lg bg-gradient-to-br ${project.gradient} p-4 transition duration-500 group-hover:scale-[1.02]`}>
        <div className="relative h-full overflow-hidden rounded-lg border border-white/15 bg-slate-950/35 p-4">
          <div className="scanline absolute inset-x-0 top-0 h-24 opacity-60" />
          <div className="flex h-full flex-col justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-100">{project.category}</p>
            <p className="text-2xl font-semibold text-white">{project.impact}</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
      <button
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-fuchsia-200"
        type="button"
        onClick={() => onSelect(project)}
      >
        Open case study <FiArrowUpRight />
      </button>
    </GlassCard>
  )
}
