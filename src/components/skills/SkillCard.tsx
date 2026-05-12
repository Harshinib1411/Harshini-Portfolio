import type { Skill } from '../../data/skills'
import { GlassCard } from '../ui/GlassCard'
import { ProgressBar } from './ProgressBar'

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon

  return (
    <GlassCard className="group h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/30">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{skill.category}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{skill.name}</h3>
        </div>
        <div className={`rounded-lg bg-gradient-to-br ${skill.accent} p-3 text-slate-950 shadow-[0_0_28px_rgba(168,85,247,0.24)]`}>
          <Icon className="text-xl" />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>Signal strength</span>
        <span>{skill.level}%</span>
      </div>
      <div className="mt-3">
        <ProgressBar value={skill.level} gradient={skill.accent} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {skill.tools.map((tool) => (
          <span key={tool} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-300">
            {tool}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}
