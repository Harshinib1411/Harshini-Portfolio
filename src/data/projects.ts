export interface Project {
  title: string
  category: string
  description: string
  impact: string
  stack: string[]
  highlights: string[]
  gradient: string
  liveUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Fire & Smoke Detection using YOLOv9',
    category: 'Computer Vision + Safety AI',
    description:
      'Custom AI safety detection workflow trained to identify fire and smoke from visual data and trigger emergency alert actions.',
    impact: '92-95% detection accuracy',
    stack: ['YOLOv9', 'OpenCV', 'Python', 'Email Alerts'],
    highlights: [
      'Trained custom YOLOv9 model on 5,000+ images.',
      'Achieved 92-95% detection accuracy.',
      'Built emergency auto-alert email system.',
      'Integrated AI-based safety detection workflows.',
    ],
    gradient: 'from-cyan-400/25 via-slate-100/10 to-fuchsia-400/20',
    liveUrl: '#contact',
    repoUrl: 'https://github.com/Harshinib1411',
  },
  {
    title: 'CO2 Emission Tracker Analysis',
    category: 'Power BI Analytics',
    description:
      'Interactive analytics dashboard for tracking emissions across countries, sectors, and global industrial trends.',
    impact: 'Sector and country insights',
    stack: ['Power BI', 'DAX', 'Data Cleaning', 'Visualization'],
    highlights: [
      'Built interactive analytics dashboard.',
      'Analyzed emissions by sector and country.',
      'Used Power BI visualizations and DAX KPIs.',
      'Compared global industrial trends.',
    ],
    gradient: 'from-emerald-300/25 via-cyan-200/10 to-amber-300/20',
    liveUrl: '#contact',
    repoUrl: 'https://github.com/Harshinib1411',
  },
  {
    title: 'Sales Overview Dashboard',
    category: 'Business Intelligence',
    description:
      'Business reporting dashboard built with SQL-backed analysis, KPI views, trends, and regional performance insights.',
    impact: 'Top region visibility',
    stack: ['Power BI', 'SQL', 'KPIs', 'Excel'],
    highlights: [
      'Created interactive Power BI dashboard.',
      'Performed SQL-based analysis.',
      'Built KPI visualizations and trend analysis.',
      'Identified top-performing business regions.',
    ],
    gradient: 'from-rose-300/25 via-fuchsia-200/10 to-cyan-300/20',
    liveUrl: '#contact',
    repoUrl: 'https://github.com/Harshinib1411',
  },
  {
    title: 'CryptoScape - Cryptocurrency Trend Analysis',
    category: 'Data Analytics Automation',
    description:
      'Crypto trend and volatility analysis system using multi-year market data and automated preprocessing workflows.',
    impact: '60% less analysis time',
    stack: ['Python', 'Pandas', 'Analytics', 'Automation'],
    highlights: [
      'Analyzed 3+ years of crypto data.',
      'Built trend and volatility tracking system.',
      'Automated preprocessing workflows.',
      'Reduced analysis time by 60%.',
    ],
    gradient: 'from-blue-300/25 via-indigo-200/10 to-emerald-300/20',
    liveUrl: '#contact',
    repoUrl: 'https://github.com/Harshinib1411',
  },
  {
    title: 'AI Calling Automation System',
    category: 'Startup Automation',
    description:
      'AI calling workflow built for startup operations using n8n and Retell AI to support automated interaction flows.',
    impact: 'AI-assisted calling operations',
    stack: ['n8n', 'Retell AI', 'Workflow Automation'],
    highlights: [
      'Built workflow automation using n8n and Retell AI.',
      'Automated startup calling operations.',
      'Integrated AI-based interaction flows.',
    ],
    gradient: 'from-lime-300/25 via-cyan-200/10 to-fuchsia-300/20',
    liveUrl: '#contact',
    repoUrl: 'https://github.com/Harshinib1411',
  },
  {
    title: 'Social Media Branding Projects',
    category: 'Creative Marketing',
    description:
      'Startup-focused campaign creatives, Instagram branding systems, posters, and content assets designed for consistent visibility.',
    impact: 'Brand consistency improved',
    stack: ['Canva', 'Branding', 'Instagram', 'Campaign Design'],
    highlights: [
      'Designed startup campaign creatives.',
      'Created Instagram branding systems.',
      'Developed marketing posters and content assets.',
    ],
    gradient: 'from-orange-300/25 via-rose-200/10 to-cyan-300/20',
    liveUrl: '#contact',
    repoUrl: 'https://github.com/Harshinib1411',
  },
]
