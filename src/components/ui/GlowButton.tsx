import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface GlowButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function GlowButton({
  children,
  className = '',
  variant = 'primary',
  ...props
}: GlowButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-cyan-300 text-slate-950 shadow-[0_0_32px_rgba(103,232,249,0.35)] hover:bg-cyan-200'
      : 'border border-white/15 bg-white/5 text-slate-100 hover:border-cyan-200/60 hover:bg-white/10'

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-300 ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
