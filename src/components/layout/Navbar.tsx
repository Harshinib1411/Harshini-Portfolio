import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { GlowButton } from '../ui/GlowButton'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3">
          <img
            alt="Built by Harshini logo"
            className="h-10 w-10 rounded-lg object-cover shadow-[0_0_22px_rgba(168,85,247,0.45)]"
            src="/brand-logo.svg"
          />
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Built by Harshini
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <GlowButton href="#contact" className="min-h-10 px-4 py-2">
            Hire Harshini
          </GlowButton>
        </div>

        <button
          aria-label="Toggle navigation"
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 px-4 py-3 text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
