import { useEffect } from 'react'
import Lenis from 'lenis'
import { AboutSection } from '../components/about/AboutSection'
import { AIChatbot } from '../components/chatbot/AIChatbot'
import { ContactSection } from '../components/contact/ContactSection'
import { CredentialsSection } from '../components/credentials/CredentialsSection'
import { DashboardPreview } from '../components/dashboard/DashboardPreview'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { HeroSection } from '../components/home/HeroSection'
import { ProjectsSection } from '../components/projects/ProjectsSection'
import { ServicesSection } from '../components/services/ServicesSection'
import { SkillsSection } from '../components/skills/SkillsSection'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    let frame = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="luxury-shell relative min-h-screen overflow-hidden text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <DashboardPreview />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  )
}
