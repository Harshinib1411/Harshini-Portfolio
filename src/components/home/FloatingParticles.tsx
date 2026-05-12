import { motion } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 7) * 0.35,
  size: 3 + (index % 4),
}))

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{ opacity: [0.15, 0.75, 0.15], y: [-12, 18, -12] }}
          className="absolute rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,0.75)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          transition={{
            duration: 4.5 + particle.id * 0.1,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
