import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDatabase, FiMapPin, FiRadio } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { useMouseGlow } from '../../hooks/useMouseGlow'
import { BackgroundScene } from '../three/BackgroundScene'
import { GlowButton } from '../ui/GlowButton'
import { GlassCard } from '../ui/GlassCard'
import { FloatingParticles } from './FloatingParticles'
import { HeroStats } from './HeroStats'

const stackPills = ['Python', 'SQL', 'Power BI', 'React', 'n8n', 'Retell AI', 'YOLOv9', 'Canva']

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  useMouseGlow(heroRef)

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12"
    >
      <BackgroundScene />
      <FloatingParticles />
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="luxury-grid absolute inset-x-0 top-0 -z-20 h-[76vh] opacity-60" />
      <span className="orb left-[8%] top-[18%] h-72 w-72 bg-cyan-400/35" />
      <span className="orb right-[8%] top-[12%] h-80 w-80 bg-fuchsia-500/35" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center rounded-lg border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            {profile.currentRole}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-6xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-8xl"
          >
            Harshini builds <span className="text-gradient">AI, automation, data, and creative systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl"
          >
            AI Engineer | Automation Builder | Data Analyst | Creative Technologist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-cyan-100"
          >
            <FiMapPin /> {profile.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <GlowButton href="#projects">
              View Projects <FiArrowUpRight />
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              Hire Harshini
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2"
          >
            {stackPills.map((pill) => (
              <span key={pill} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-slate-200 backdrop-blur">
                {pill}
              </span>
            ))}
          </motion.div>

          <div className="mx-auto mt-10 max-w-4xl">
            <HeroStats />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="relative mx-auto mt-12 max-w-6xl"
        >
          <GlassCard className="gradient-border p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-white/10 bg-slate-950/65 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Digital ID</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{profile.name}</h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{profile.headline}</p>
                  </div>
                  <div className="h-16 w-16 overflow-hidden rounded-lg shadow-[0_0_34px_rgba(168,85,247,0.52)]">
                    <img alt="Harshini logo" className="h-full w-full object-cover" src="/brand-logo.svg" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: FiDatabase, label: 'Analytics', value: '10k+ records' },
                    { icon: FiArrowUpRight, label: 'AI vision', value: '92-95% accuracy' },
                    { icon: FiRadio, label: 'Campaigns', value: 'Brand systems' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left">
                      <item.icon className="mb-3 text-cyan-200" />
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                  <span className="ml-auto rounded-lg bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">Live status: available</span>
                </div>
                <pre className="overflow-hidden text-left text-xs leading-6 text-cyan-100 sm:text-sm">
                  {`const identity = {
  role: "AI & Data Science Engineer",
  builds: ["dashboards", "AI automation", "creative systems"],
  stack: ["Python", "Power BI", "React", "n8n"],
  signal: "technology + creativity + business impact"
}`}
                </pre>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
