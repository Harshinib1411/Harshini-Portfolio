import { useRef } from 'react'
import { services } from '../../data/profile'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <section id="services" ref={sectionRef} className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Services"
          title="Practical services for data-driven digital growth"
          description="Harshini brings together analytics, automation, frontend development, and creative marketing to support startups and growing teams."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <GlassCard key={service.title} className="group p-5 transition duration-300 hover:-translate-y-1">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/10 text-xl text-cyan-200">
                <service.icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
