import { useState } from 'react';
import AccessGate from './components/AccessGate';
import Hero from './components/Hero';
import StoryLayout from './components/StoryLayout';
import Process from './components/Process';
import FamilyTree from './components/FamilyTree';
import Downloads from './components/Downloads';
import FullVersion from './components/FullVersion';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('christian-recipient-access') === 'granted';
  });

  return (
    <div className="font-sans antialiased text-dark-green bg-white">
      <AccessGate 
        isUnlocked={isUnlocked} 
        onUnlock={() => setIsUnlocked(true)} 
      />
      
      <div 
        className={`transition-opacity duration-1000 ${
          isUnlocked ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
        }`}
      >
        <Hero />
        <StoryLayout />
        <Process />
        <FamilyTree />
        <Downloads />
        <FullVersion />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
