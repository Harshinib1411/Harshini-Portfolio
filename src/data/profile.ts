import type { IconType } from 'react-icons'
import {
  FiBarChart2,
  FiCode,
  FiCpu,
  FiDatabase,
  FiEdit3,
  FiLayers,
  FiPhoneCall,
  FiRadio,
  FiZap,
} from 'react-icons/fi'

export const profile = {
  name: 'Harshini B',
  displayName: 'Harshini',
  initials: 'HB',
  location: 'Bangalore, Karnataka, India',
  email: 'harshinib859@gmail.com',
  phone: '+91 8220813487',
  linkedIn: 'https://linkedin.com/in/harshini-balakrishnan',
  github: 'https://github.com/Harshinib1411',
  headline:
    'AI & Data Science Engineer | Automation Builder | Data Analyst | Creative Digital Marketer',
  shortDescription:
    'I build intelligent systems, AI automations, analytics dashboards, and digital experiences that combine technology, creativity, and business impact.',
  currentRole: 'Database Engineer - MakeMyStay Realty',
  availability: 'Available for Data Analysis, Data Science, Frontend, and AI Projects',
  footer:
    'Building intelligent digital experiences with AI, analytics, automation, and creativity.',
}

export const heroStats = [
  { value: '5+', label: 'Projects completed' },
  { value: '3+', label: 'Internship & startup experiences' },
  { value: '5000+', label: 'AI training images processed' },
  { value: '10,000+', label: 'Data records analyzed' },
]

export const aboutHighlights = [
  'Data Analytics',
  'AI/ML',
  'Dashboard Development',
  'Automation Workflows',
  'Frontend Development',
  'Social Media Branding',
  'Startup Operations',
]

export const education = {
  degree: 'B.Tech in Artificial Intelligence and Data Science',
  institute: 'KIT - Kalaignarkarunanidhi Institute of Technology',
  location: 'Coimbatore',
  score: 'CGPA: 8.7/10',
  duration: '2021 - 2025',
}

export interface Experience {
  role: string
  organization: string
  duration: string
  context: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Database Engineer',
    organization: 'MakeMyStay Realty',
    duration: 'Current',
    context: 'Startup Environment',
    points: [
      'Managing databases and operational workflows across company systems.',
      'Working on frontend and backend learning tasks in a fast-moving startup setup.',
      'Creating social media campaign posters and marketing creatives.',
      'Building AI calling automation systems using n8n and Retell AI.',
      'Supporting automation, campaign execution, and cross-functional startup operations.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    organization: 'Elevate Labs',
    duration: 'Aug 2025 - Sep 2025',
    context: 'Analytics Internship',
    points: [
      'Cleaned and transformed 10,000+ data entries.',
      'Improved dataset accuracy by 25%.',
      'Built Power BI dashboards that reduced reporting effort by 40%.',
      'Developed CO2 emissions analytics dashboards for insight generation.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    organization: 'AidasTech Pvt Ltd',
    duration: 'June 2023 - July 2023',
    context: 'Business Reporting',
    points: [
      'Processed 1,000+ attendance records using Excel and Python.',
      'Built weekly KPI performance reports.',
      'Worked with the analytics team across the reporting lifecycle.',
      'Supported business insights generation through structured data analysis.',
    ],
  },
  {
    role: 'Social Media Manager',
    organization: 'Revanoid',
    duration: 'June 2024 - Feb 2025',
    context: 'Startup Branding',
    points: [
      'Managed Instagram content, engagement, and brand consistency.',
      'Designed posters and promotional creatives using Canva.',
      'Created branding-focused content strategies.',
      'Improved social visibility through consistent campaign design.',
    ],
  },
  {
    role: 'Freelance Graphic Designer',
    organization: 'Independent Clients',
    duration: 'June 2025 - Present',
    context: 'Creative Services',
    points: [
      'Designed logos, banners, posters, and social media creatives.',
      'Worked with startup and freelance clients.',
      'Delivered branding-focused visual assets for digital campaigns.',
    ],
  },
]

export interface Service {
  title: string
  description: string
  icon: IconType
}

export const services: Service[] = [
  {
    title: 'Data Analytics Dashboards',
    description: 'Power BI, SQL, Excel, and KPI dashboards for business decision-making.',
    icon: FiBarChart2,
  },
  {
    title: 'AI Automation Workflows',
    description: 'n8n and Retell AI workflows for calling systems, campaign flows, and operations.',
    icon: FiZap,
  },
  {
    title: 'Frontend Development',
    description: 'Responsive React interfaces with clean UI structure and recruiter-friendly polish.',
    icon: FiCode,
  },
  {
    title: 'Social Media Branding',
    description: 'Instagram content systems, campaign creatives, and brand consistency.',
    icon: FiRadio,
  },
  {
    title: 'Poster & Creative Design',
    description: 'Canva-based posters, banners, logos, and startup promotional assets.',
    icon: FiEdit3,
  },
  {
    title: 'AI-Based Solutions',
    description: 'Computer vision, ML workflows, and automation systems for practical use cases.',
    icon: FiCpu,
  },
]

export const certifications = [
  'Python for Data Science - NPTEL IIT Kharagpur',
  'Artificial Intelligence Foundation - Infosys Springboard',
  'Applied AI with Deep Learning - IBM Coursera',
  'Introduction to Python - Infosys Springboard',
]

export const currentRoleFocus = [
  { label: 'Data', icon: FiDatabase },
  { label: 'Automation', icon: FiZap },
  { label: 'Frontend', icon: FiCode },
  { label: 'Backend', icon: FiLayers },
  { label: 'Marketing', icon: FiRadio },
  { label: 'AI Calling', icon: FiPhoneCall },
]
