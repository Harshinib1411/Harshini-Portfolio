import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiZap } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <span className="orb -left-24 bottom-12 h-72 w-72 bg-cyan-400/35" />
      <span className="orb right-12 top-28 h-80 w-80 bg-fuchsia-500/35" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build intelligent, creative, data-driven systems"
          description="Reach out for analytics dashboards, AI automations, startup workflows, frontend work, branding systems, or creative campaign support."
        />
        <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <GlassCard className="gradient-border p-6">
            <div className="space-y-5">
              {[
                { icon: FiMail, label: 'Email', value: profile.email },
                { icon: FiPhone, label: 'Phone', value: profile.phone },
                { icon: FiMapPin, label: 'Location', value: profile.location },
                { icon: FiZap, label: 'Availability', value: profile.availability },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
                    <item.icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-slate-500">Profiles</p>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 hover:text-cyan-200" href={profile.linkedIn}>
                  <FiLinkedin /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 hover:text-cyan-200" href={profile.github}>
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </GlassCard>
          <GlassCard className="gradient-border p-6">
            <ContactForm />
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
