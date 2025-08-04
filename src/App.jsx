import React, { Suspense } from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/About-Me';
import Skills from './components/Skills';
import Works from './components/Works';
import Experience from './components/Experienxe/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load Hero
const Hero = React.lazy(() => import('./components/Hero'));

function App() {
  return (
    <div className="bg-background text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Suspense fallback={<div className="text-white text-center">🚀 Launching...</div>}>
          <Hero />
        </Suspense>
        <AboutMe />
        <Skills />
        <Works />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
