import type { IconType } from 'react-icons'

interface AnalyticsCardProps {
  label: string
  value: string
  delta: string
  icon: IconType
}

export function AnalyticsCard({ label, value, delta, icon: Icon }: AnalyticsCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
        <Icon className="text-cyan-200" />
      </div>
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-emerald-200">{delta}</p>
    </div>
  )
}
