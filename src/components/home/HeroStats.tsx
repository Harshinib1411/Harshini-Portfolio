import { motion } from 'framer-motion'
import { heroStats } from '../../data/profile'

export function HeroStats() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {heroStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur"
          transition={{ delay: 0.45 + index * 0.12 }}
        >
          <p className="text-2xl font-semibold text-white">{stat.value}</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
