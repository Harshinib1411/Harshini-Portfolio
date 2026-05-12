import type { IconType } from 'react-icons'
import {
  SiCanva,
  SiN8N,
  SiOpencv,
  SiPython,
  SiReact,
} from 'react-icons/si'
import { FiDatabase } from 'react-icons/fi'

export interface Skill {
  name: string
  category: string
  level: number
  icon: IconType
  accent: string
  tools: string[]
}

export const skills: Skill[] = [
  {
    name: 'AI & Data Science',
    category: 'Analytics + data science',
    level: 92,
    icon: SiPython,
    accent: 'from-cyan-300 to-blue-400',
    tools: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Excel', 'Scikit-learn'],
  },
  {
    name: 'Machine Learning',
    category: 'AI model workflows',
    level: 88,
    icon: SiOpencv,
    accent: 'from-emerald-300 to-teal-400',
    tools: ['YOLOv9', 'OpenCV', 'Machine Learning', 'AI Automation'],
  },
  {
    name: 'Web Development',
    category: 'Frontend + integrations',
    level: 84,
    icon: SiReact,
    accent: 'from-fuchsia-300 to-rose-300',
    tools: ['React', 'HTML', 'CSS', 'Frontend Development', 'Backend Basics', 'API Integrations'],
  },
  {
    name: 'Automation',
    category: 'Workflow systems',
    level: 86,
    icon: SiN8N,
    accent: 'from-yellow-200 to-cyan-300',
    tools: ['n8n', 'Retell AI', 'Google Colab', 'Jupyter Notebook', 'MySQL', 'SQLite'],
  },
  {
    name: 'Branding & Marketing',
    category: 'Creative systems',
    level: 82,
    icon: SiCanva,
    accent: 'from-orange-200 to-amber-400',
    tools: ['Canva', 'Social Media Marketing', 'Poster Design', 'Branding', 'Content Strategy', 'Campaign Design'],
  },
  {
    name: 'Dashboard Analytics',
    category: 'Reporting stack',
    level: 87,
    icon: FiDatabase,
    accent: 'from-blue-300 to-cyan-300',
    tools: ['Power BI', 'SQL', 'DAX KPIs', 'Excel Reports', 'Trend Analysis', 'Data Cleaning'],
  },
]
