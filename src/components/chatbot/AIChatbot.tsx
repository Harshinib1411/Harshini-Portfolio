import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiExternalLink, FiMessageCircle, FiSend, FiX } from 'react-icons/fi'
import { projects } from '../../data/projects'
import { profile } from '../../data/profile'

interface Message {
  role: 'user' | 'assistant'
  text: string
  links?: ChatLink[]
}

interface ChatLink {
  label: string
  href: string
}

const pageLinks = {
  skills: { label: 'View skills', href: '#skills' },
  projects: { label: 'View projects', href: '#projects' },
  services: { label: 'View services', href: '#services' },
  experience: { label: 'View experience', href: '#about' },
  contact: { label: 'Contact Harshini', href: '#contact' },
}

function createAssistantReply(question: string): Message {
  const lower = question.toLowerCase()
  const hasAny = (terms: string[]) => terms.some((term) => lower.includes(term))

  if (hasAny(['contact', 'email', 'phone', 'hire', 'reach'])) {
    return {
      role: 'assistant',
      text: `You can contact Harshini at ${profile.email} or ${profile.phone}. She is based in ${profile.location}.`,
      links: [pageLinks.contact],
    }
  }

  if (hasAny(['data analysis project', 'analytics project', 'dashboard project', 'power bi', 'sql project'])) {
    const dataProjects = projects.filter((project) =>
      ['CO2 Emission Tracker Analysis', 'Sales Overview Dashboard', 'CryptoScape - Cryptocurrency Trend Analysis'].includes(project.title),
    )

    return {
      role: 'assistant',
      text: `For data analysis, Harshini has worked on ${dataProjects.map((project) => project.title).join(', ')}. These cover Power BI dashboards, SQL analysis, KPI visuals, emissions analytics, crypto trends, and automated preprocessing.`,
      links: [pageLinks.projects, pageLinks.skills, pageLinks.contact],
    }
  }

  if (hasAny(['ai project', 'machine learning', 'computer vision', 'yolo', 'automation project'])) {
    return {
      role: 'assistant',
      text: 'Her AI-focused work includes Fire & Smoke Detection using YOLOv9 and an AI Calling Automation System using n8n and Retell AI.',
      links: [pageLinks.projects, pageLinks.services],
    }
  }

  if (hasAny(['frontend', 'react', 'website', 'web development'])) {
    return {
      role: 'assistant',
      text: 'Harshini works with React, HTML, CSS, frontend development, backend basics, and API integrations. She is available for frontend projects that need clean UI and practical product thinking.',
      links: [pageLinks.skills, pageLinks.services, pageLinks.contact],
    }
  }

  if (hasAny(['skill', 'tools', 'tech stack'])) {
    return {
      role: 'assistant',
      text: 'Her skill set includes Python, SQL, Power BI, Tableau, Excel, Pandas, NumPy, Scikit-learn, YOLOv9, OpenCV, React, n8n, Retell AI, Canva, branding, and campaign design.',
      links: [pageLinks.skills],
    }
  }

  if (hasAny(['experience', 'current role', 'makemystay', 'internship', 'startup'])) {
    return {
      role: 'assistant',
      text: 'Harshini is currently a Database Engineer at MakeMyStay Realty, working across databases, AI calling automation, frontend/backend learning, marketing creatives, and startup operations. She also has data analyst internships and social media startup experience.',
      links: [pageLinks.experience],
    }
  }

  if (hasAny(['service', 'available', 'availability', 'work with'])) {
    return {
      role: 'assistant',
      text: profile.availability,
      links: [pageLinks.services, pageLinks.contact],
    }
  }

  if (hasAny(['project'])) {
    return {
      role: 'assistant',
      text: 'Harshini has projects across AI safety detection, CO2 emissions analytics, sales dashboards, crypto trend analysis, AI calling automation, and social media branding. Ask for “data analysis project” or “AI project” for a focused answer.',
      links: [pageLinks.projects],
    }
  }

  return {
    role: 'assistant',
    text: 'Harshini is an AI & Data Science Engineer, automation builder, data analyst, and creative digital marketer. You can ask me about her data analysis projects, AI projects, frontend work, experience, services, or contact details.',
    links: [pageLinks.projects, pageLinks.services, pageLinks.contact],
  }
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Hi, I am Harshini\'s portfolio assistant. Ask me about her data analysis projects, AI projects, skills, services, experience, or contact details.',
      links: [pageLinks.projects, pageLinks.skills, pageLinks.contact],
    },
  ])
  const [input, setInput] = useState('')
  const whatsappUrl = `https://wa.me/918220813487?text=${encodeURIComponent('Hi Harshini, I visited your portfolio and would like to discuss a project.')}`

  useEffect(() => {
    const messagesElement = messagesRef.current
    if (!messagesElement) {
      return
    }

    messagesElement.scrollTo({
      top: messagesElement.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isOpen])

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) {
      return
    }

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmed },
      createAssistantReply(trimmed),
    ])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] max-w-md rounded-lg border border-white/15 bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Portfolio AI</p>
              <h2 className="mt-1 text-base font-semibold text-white">Ask Harshini's assistant</h2>
            </div>
            <button
              aria-label="Close chatbot"
              className="rounded-lg border border-white/10 p-2 text-slate-200 hover:text-cyan-200"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>
          </div>

          <div
            ref={messagesRef}
            className="chat-scroll h-80 space-y-4 overflow-y-auto overscroll-contain rounded-lg border border-white/10 bg-slate-950/60 p-3 pr-2"
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <p
                  className={`max-w-[82%] rounded-lg px-4 py-3 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'bg-cyan-300 text-slate-950'
                      : 'border border-white/10 bg-white/[0.06] text-slate-200'
                  }`}
                >
                  {message.text}
                </p>
                {message.links && message.role === 'assistant' && (
                  <div className="mt-2 flex max-w-[82%] flex-wrap gap-2">
                    {message.links.map((link) => (
                      <a
                        key={`${message.text}-${link.href}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 text-xs font-medium text-cyan-100 hover:bg-cyan-200/20"
                        href={link.href}
                      >
                        {link.label} <FiExternalLink />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <input
              className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60"
              placeholder="Ask the portfolio AI..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  sendMessage()
                }
              }}
            />
            <button
              aria-label="Send message"
              className="rounded-lg bg-cyan-300 px-4 text-slate-950 transition hover:bg-cyan-200"
              type="button"
              onClick={sendMessage}
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-end gap-3">
        <a
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-2xl text-slate-950 shadow-[0_0_34px_rgba(52,211,153,0.42)] transition hover:bg-emerald-300"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
        <button
          aria-label="Toggle portfolio chatbot"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-2xl text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.45)] transition hover:bg-cyan-200"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX /> : <FiMessageCircle />}
        </button>
      </div>
    </div>
  )
}
