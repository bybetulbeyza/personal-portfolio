import { useState, useEffect } from 'react';
import Taskbar from './components/Taskbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

type Page = 'home' | 'projects' | 'skills' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
    }
  };

  return (
    <div className="desktop">
      <div className="desktop__wallpaper" />
      <main className="desktop__main">
        {renderPage()}
      </main>
      <Taskbar activePage={activePage} onNavigate={setActivePage} />
    </div>
  );
}
