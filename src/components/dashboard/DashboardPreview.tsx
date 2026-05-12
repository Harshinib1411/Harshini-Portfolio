import { useRef } from 'react'
import { FiActivity, FiBarChart2, FiCpu, FiTrendingUp } from 'react-icons/fi'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { AnalyticsCard } from './AnalyticsCard'

const cards = [
  { label: 'Data accuracy', value: '+25%', delta: 'improved during analytics work', icon: FiActivity },
  { label: 'Reporting effort', value: '-40%', delta: 'reduced with Power BI dashboards', icon: FiTrendingUp },
  { label: 'AI dataset', value: '5000+', delta: 'images processed for YOLOv9', icon: FiCpu },
  { label: 'Records analyzed', value: '10,000+', delta: 'cleaned and transformed', icon: FiBarChart2 },
]

const barMetrics = [
  { label: 'Cleaning', value: 42 },
  { label: 'SQL', value: 58 },
  { label: 'Dashboards', value: 74 },
  { label: 'AI Model', value: 92 },
  { label: 'Automation', value: 78 },
]

export function DashboardPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <section id="dashboard" ref={sectionRef} className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Dashboard"
          title="Analytics mindset with measurable outcomes"
          description="A recruiter-friendly preview of Harshini's dashboard, data, and AI automation impact across internships, projects, and startup work."
        />
        <GlassCard className="p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {cards.map((card) => (
              <AnalyticsCard key={card.label} {...card} />
            ))}
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-lg border border-white/10 bg-slate-950/45 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Project impact bars</p>
                <span className="rounded-lg bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  Analytics view
                </span>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-4">
                <div className="flex h-72 items-end gap-4 border-b border-l border-white/10 px-3 pb-4">
                  {barMetrics.map((metric) => (
                    <div key={metric.label} className="flex flex-1 flex-col items-center justify-end gap-3">
                      <span className="text-sm font-semibold text-white">{metric.value}%</span>
                      <div className="flex h-48 w-full items-end rounded-lg bg-white/[0.04] p-1">
                        <div
                          className="w-full rounded-md bg-gradient-to-t from-cyan-300 via-emerald-200 to-fuchsia-300 shadow-[0_0_24px_rgba(103,232,249,0.24)]"
                          style={{ height: `${metric.value}%` }}
                        />
                      </div>
                      <span className="min-h-8 text-center text-xs leading-4 text-slate-400">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {['Power BI dashboards', 'YOLOv9 model accuracy', 'Automation time saved'].map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/45 p-5">
              <p className="text-sm font-semibold text-white">Current startup workstreams</p>
              <div className="mt-5 space-y-4">
                {['Database workflows', 'AI calling automation', 'Social campaign creatives', 'Frontend/backend learning'].map((item) => (
                  <div key={item} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-300">{item}</span>
                    <span className="rounded-lg bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                      active
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus mix</span>
                  <span className="text-xs text-cyan-100">live</span>
                </div>
                <div className="space-y-3">
                  {[
                    ['Data', 86],
                    ['AI Automation', 78],
                    ['Frontend', 64],
                    ['Creative', 72],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs text-slate-300">
                        <span>{label}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
