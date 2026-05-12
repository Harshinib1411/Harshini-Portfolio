import { useState } from 'react'
import type { FormEvent } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [status, setStatus] = useState('Ready when you are.')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = encodeURIComponent(
      `Hi Harshini, I visited your portfolio.\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\nMessage: ${formData.message}`,
    )

    window.open(`https://wa.me/918220813487?text=${message}`, '_blank', 'noreferrer')
    setStatus('Opening WhatsApp with your filled details.')
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
            Name <span className="text-cyan-200">*</span>
          </span>
          <input
            className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-cyan-200/70 focus:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
            Email <span className="text-cyan-200">*</span>
          </span>
          <input
            className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-cyan-200/70 focus:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
            placeholder="Email"
            required
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
          Project type <span className="text-cyan-200">*</span>
        </span>
        <input
          className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-cyan-200/70 focus:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
          placeholder="Project type"
          required
          value={formData.projectType}
          onChange={(event) => setFormData((current) => ({ ...current, projectType: event.target.value }))}
        />
      </label>
      <textarea
        className="min-h-36 w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-cyan-200/70 focus:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
        placeholder="Tell me what you want to build"
        value={formData.message}
        onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
      />
      <button className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300" type="submit">
        Send on WhatsApp <FaWhatsapp />
      </button>
      <p className="text-sm text-slate-400">{status}</p>
    </form>
  )
}
