import { Monitor, Folder, Mail, Code2, User } from 'lucide-react';

type Page = 'home' | 'projects' | 'skills' | 'contact';

interface TaskbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function Taskbar({ activePage, onNavigate }: TaskbarProps) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const navItems: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <User size={14} /> },
    { id: 'projects', label: 'Projects', icon: <Folder size={14} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={14} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={14} /> },
  ];

  return (
    <div className="taskbar">
      <button className="taskbar__start" title="Start">
        <Monitor size={14} />
      </button>
      <div className="taskbar__nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`taskbar__btn ${activePage === item.id ? 'taskbar__btn--active' : ''}`}
            onClick={() => onNavigate(item.id)}
            title={item.label}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </div>
      <span className="taskbar__clock">{timeStr}</span>
    </div>
  );
}
