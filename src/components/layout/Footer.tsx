import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            alt="Built by Harshini logo"
            className="h-10 w-10 rounded-lg object-cover shadow-[0_0_22px_rgba(168,85,247,0.35)]"
            src="/brand-logo.svg"
          />
          <p>© 2026 {profile.name}. {profile.footer}</p>
        </div>
        <div className="flex gap-3">
          <a className="rounded-lg border border-white/10 p-3 text-slate-200 hover:text-cyan-200" href={profile.github} aria-label="GitHub">
            <FiGithub />
          </a>
          <a className="rounded-lg border border-white/10 p-3 text-slate-200 hover:text-cyan-200" href={profile.linkedIn} aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a className="rounded-lg border border-white/10 p-3 text-slate-200 hover:text-cyan-200" href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
