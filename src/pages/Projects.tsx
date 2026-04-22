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
    title: 'Task Management App',
    description:
      'A modern web application with Kanban boards, priority tagging, deadline reminders, and seamless user authentication.',
    techs: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    icon: '📋',
  },
  {
    id: 4,
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
