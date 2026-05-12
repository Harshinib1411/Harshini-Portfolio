import { FiActivity } from 'react-icons/fi'
import { experiences } from '../../data/profile'

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-fuchsia-400 to-cyan-300 md:left-1/2" />
      <div className="grid gap-6">
        {experiences.map((item, index) => {
          const alignLeft = index % 2 === 0
          const card = (
            <div className={`rounded-lg border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/30 ${alignLeft ? 'md:text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                {item.duration} | {item.context}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-slate-300">{item.organization}</p>
              <ul className="mt-4 space-y-2 text-left">
                {item.points.slice(0, 3).map((point) => (
                  <li key={point} className="text-sm leading-6 text-slate-400">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )

          return (
            <div key={`${item.role}-${item.organization}`} className="relative">
              <div className="pl-14 md:hidden">
                <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-lg border border-cyan-200/30 bg-slate-950 text-cyan-100 shadow-[0_0_28px_rgba(168,85,247,0.42)]">
                  <FiActivity />
                </div>
                {card}
              </div>

              <div className="hidden items-start gap-6 md:grid md:grid-cols-[1fr_auto_1fr]">
                <div>{alignLeft ? card : null}</div>
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-200/30 bg-slate-950 text-cyan-100 shadow-[0_0_28px_rgba(168,85,247,0.42)]">
                  <FiActivity />
                </div>
                <div>{alignLeft ? null : card}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
