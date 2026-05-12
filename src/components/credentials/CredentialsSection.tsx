import { useRef } from 'react'
import { FiAward, FiBookOpen } from 'react-icons/fi'
import { certifications, education } from '../../data/profile'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

export function CredentialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <section id="credentials" ref={sectionRef} className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education & Certifications"
          title="AI foundation with continuous learning"
          description="A formal AI and Data Science degree backed by focused certifications in Python, AI foundations, and deep learning."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="p-6">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
              <FiBookOpen />
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">{education.duration}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {education.institute}, {education.location}
            </p>
            <p className="mt-4 inline-flex rounded-lg border border-emerald-200/20 bg-emerald-200/10 px-3 py-2 text-sm font-semibold text-emerald-100">
              {education.score}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-fuchsia-300/10 text-fuchsia-100">
              <FiAward />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((certification) => (
                <div key={certification} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200">
                  {certification}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
