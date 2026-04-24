import Window from '../components/Window';

interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Operating Systems Simulator',
    description:
      'A comprehensive OS process scheduler simulator supporting FIFO, SJF, and Round Robin algorithms with real-time Gantt chart visualization.',
    techs: ['C++', 'Qt Framework', 'Multithreading'],
    icon: '💾',
  },
  {
    id: 2,
    title: 'Smart Mailbox System (IoT)',
    description:
      'Built a mailbox that’s smarter than your average one! Integrated ESP32 and Arduino to create a real-time monitoring system—because why wait for the mail when your mailbox can just tell you it’s arrived?',
    techs: ['C', 'Ardunio', 'ESP32'],
    icon: '📮',
  },
  {
    id: 3,
    title: 'Healthcare & Patient Data System',
    description:
      'A desktop-based management system developed in TÜBİTAK project format, focusing on digitalizing healthcare records and team coordination.',
    techs: ['Python', 'Tkinter', 'Anaconda'],
    icon: '🏥',
  },
  {
    id: 4,
    title: 'Customer Segmentation for Targeted Marketing',
    description:
      'Developed a customer segmentation model using K-Means clustering to identify high-value groups and transform raw purchasing behavior into actionable marketing insights.',
    techs: ['Python', 'Anaconda', 'Pandas', 'Scikit-Learn'],
    icon: '📊',
  },
  {
    id: 5,
    title: 'Desktop Task Widget',
    description:
      'A sleek, transparent desktop overlay built to keep daily tasks always in sight. Features a custom UI with high-topmost visibility and a minimalist aesthetic.',
    techs: ['Python', 'Tkinter', 'Pillow'],
    icon: '📌',
  },
  {
    id: 6,
    title: 'Telegram Goal Tracker',
    description:
      'A Telegram bot that empowers users to set, track, and achieve personal goals with daily check-ins and progress analytics.',
    techs: ['Python', 'python-telegram-bot', 'SQLite'],
    icon: '🎯',
  },
];

export default function Projects() {
  return (
    <div className="page-layout">
      <div className="page-section">
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Window className="project-card">
      <div className="project-card__icon">{project.icon}</div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__techs">
        {project.techs.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
    </Window>
  );
}
