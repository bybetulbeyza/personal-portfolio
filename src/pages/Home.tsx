import { Github, Linkedin } from 'lucide-react';
import Window from '../components/Window';
import profilePic from '../profile_pic.png';

export default function Home() {
  return (
    <div className="page-layout">
      <Window className="card">
        <div className="hero-card">
          <div className="hero-avatar">
            <img
              src={profilePic}
              alt="Profile"
            />
          </div>
          <div className="hero-content">
            <h1>Betül Beyza Demirel</h1>
            <p style={{ fontSize: '18px', color: '#0047ba', fontWeight: 600 }}>Computer Engineering Student</p>
            <p className="bio-text">
              Hello! I'm a Computer Engineering student focused on building practical systems. I'm particularly interested in embedded systems and IoT, and I enjoy developing solutions that integrate software and hardware. I like working on projects where I can design and implement systems end-to-end, turning ideas into functional products.
            </p>

            <div className="hero-stats">
              <div className="stat-box">
                <div className="stat-box__number">3+</div>
                <div className="stat-box__label">Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-box__number">5+</div>
                <div className="stat-box__label">Technologies</div>
              </div>
              <div className="stat-box">
                <div className="stat-box__number">100%</div>
                <div className="stat-box__label">Passion</div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/bybetulbeyza" target="_blank" rel="noreferrer" className="social-link">
                <Github size={16} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/betul-beyza-demirel/" target="_blank" rel="noreferrer" className="social-link">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Window>

      <div className="page-section">
        <h2 className="section-title">About Me</h2>
        <Window className="card">
          <p style={{ fontSize: '15px', lineHeight: '1.8', margin: '0 0 16px' }}>
            I'm Betül Beyza, a Computer Engineering student with a thing for systems that actually do something in the real world. I enjoy writing code that talks to hardware, building projects that go beyond the screen, and figuring out how pieces fit together — whether that's a circuit, a dataset, or a design.           </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            When I'm not debugging, I'm drawing or modeling something that doesn't exist yet. I like making things, in whatever form that takes.
          </p>
        </Window>
      </div>
    </div>
  );
}
