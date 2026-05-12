import { useRef } from 'react'
import type { HTMLAttributes } from 'react'
import { useMouseGlow } from '../../hooks/useMouseGlow'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean
}

export function GlassCard({ children, className = '', glow = true, ...props }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  useMouseGlow(cardRef)

  return (
    <div
      ref={cardRef}
      className={`glass-border relative overflow-hidden rounded-lg bg-white/[0.06] backdrop-blur-xl ${className}`}
      {...props}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.18), rgba(34, 211, 238, 0.09), transparent 44%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
