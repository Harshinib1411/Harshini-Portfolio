import { useRef } from 'react'
import { skills } from '../../data/skills'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionTitle } from '../ui/SectionTitle'
import { SkillCard } from './SkillCard'

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <section id="skills" ref={sectionRef} className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="A premium stack for intelligent products"
          description="AI, analytics, automation, frontend systems, and creative growth skills shaped by real startup and internship work."
        />
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
