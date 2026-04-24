import { Code2, Cpu, Brain } from 'lucide-react';
import Window from '../components/Window';

interface Skill {
  name: string;
  level: number;
}

const technicalSkills: Skill[] = [
  { name: 'Python', level: 90 },
  { name: 'C++', level: 80 },
  { name: 'C', level: 75 },
  { name: 'SQL', level: 70 },
];

const tools = [
  'Git', 'Bash/Terminal', 'Arduino', 'ESP32', 'PlatformIO', 'C', 'C++', 'VS Code', 'PyCharm', 'Jupyter', 'Telegram Bot API',
];

const focuses = [
  'Embedded Systems & IoT Development',
  'Hardware-Software Integration',
  'Microcontroller Interfacing (Arduino/ESP32)',
  'Smart Automation Systems'
];

export default function Skills() {
  return (
    <div className="page-layout">
      <div className="page-section">
        <h1 className="section-title">Skills</h1>
        <div className="skills-grid">
          <div className="skills-column">
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-blue)', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <Code2 size={14} style={{ display: 'inline-block', marginRight: '6px' }} />
              Technical Skills
            </h3>
            {technicalSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>

          <div className="skills-column">
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-blue)', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <Cpu size={14} style={{ display: 'inline-block', marginRight: '6px' }} />
              Tools & Technologies
            </h3>
            <div className="badge-grid">
              {tools.map((tool) => (
                <span key={tool} className="badge">
                  <span className="badge__dot" />
                  {tool}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-blue)', margin: '20px 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <Brain size={14} style={{ display: 'inline-block', marginRight: '6px' }} />
              Current Focus
            </h3>
            <div className="focus-section">
              <div className="focus-list">
                {focuses.map((focus) => (
                  <div key={focus} className="focus-item">
                    <span className="focus-arrow">→</span>
                    {focus}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <Window className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${skill.level}%` }} />
      </div>
    </Window>
  );
}
