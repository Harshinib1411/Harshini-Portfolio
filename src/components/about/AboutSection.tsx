import { useRef } from 'react'
import { FiCpu, FiLayers, FiZap } from 'react-icons/fi'
import { aboutHighlights, currentRoleFocus, profile } from '../../data/profile'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { ExperienceTimeline } from './ExperienceTimeline'

const pillars = [
  { icon: FiCpu, title: 'AI + data mindset', text: 'B.Tech graduate in AI and Data Science with hands-on analytics, ML, and automation project work.' },
  { icon: FiLayers, title: 'Startup operator range', text: 'Current role spans databases, frontend/backend learning, marketing creatives, and campaign workflows.' },
  { icon: FiZap, title: 'Business impact focus', text: 'Builds dashboards, automations, and digital experiences that connect technical execution to useful outcomes.' },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <section id="about" ref={sectionRef} className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="Built like an AI startup operator"
          description="Harshini blends AI engineering, analytics, automation, frontend learning, and creative marketing into practical business systems."
        />

        <div className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <GlassCard className="p-6 sm:p-8">
            <p className="mb-6 text-sm leading-7 text-slate-300">
              I enjoy building solutions that combine data, AI, creativity, and automation to
              solve real-world business problems. I am passionate about learning modern
              technologies and building impactful digital products.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {aboutHighlights.map((item) => (
                <span key={item} className="rounded-lg border border-cyan-200/15 bg-cyan-200/10 px-3 py-2 text-xs font-medium text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>

            <GlassCard className="p-6">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Current Role</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{profile.currentRole}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    A dynamic startup experience where Harshini supports data, automation, frontend,
                    backend learning, marketing, creative design, and AI calling workflows.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {currentRoleFocus.map((focus) => (
                    <span key={focus.label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-slate-200">
                      <focus.icon className="text-cyan-200" /> {focus.label}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-6 sm:p-8">
            <ExperienceTimeline />
          </GlassCard>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <GlassCard key={pillar.title} className="p-6">
                <pillar.icon className="mb-5 text-3xl text-cyan-200" />
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.text}</p>
              </GlassCard>
            ))}
        </div>
      </div>
    </section>
  )
}
