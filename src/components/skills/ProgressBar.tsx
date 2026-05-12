import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
  gradient: string
}

export function ProgressBar({ value, gradient }: ProgressBarProps) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  )
}
