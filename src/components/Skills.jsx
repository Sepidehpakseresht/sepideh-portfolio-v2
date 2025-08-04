import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';

const skills = [
  {
    name: 'React',
    icon: FaReact,
    description: 'Building interactive UIs with modern React patterns and hooks',
    level: 'Intermediate',
    projects: '3+ projects',
    snippet: `function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">React App</span>
      </div>
    )
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    description: 'Modern ES6+ JavaScript with async/await and functional programming',
    level: 'Advanced',
    projects: '5+ projects',
    snippet: `const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">JavaScript</span>
      </div>
    )
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    description: 'Utility-first CSS framework for rapid UI development',
    level: 'Advanced',
    projects: '3+ projects',
    snippet: `<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
  <div className="text-white text-center">
    <h1 className="text-4xl font-bold mb-4">Hello World</h1>
  </div>
</div>`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">Tailwind UI</span>
      </div>
    )
  },
  {
    name: 'Figma',
    icon: SiFigma,
    description: 'Design and prototyping with modern UI/UX principles',
    level: 'Intermediate',
    projects: '3+ projects',
    snippet: `const Button = ({ variant, children }) => {
  const styles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-200 text-gray-800'
  };
  return <button className={styles[variant]}>{children}</button>;
};`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">Figma Design</span>
      </div>
    )
  },
  {
    name: 'HTML5',
    icon: FaHtml5,
    description: 'Semantic HTML5 markup with accessibility best practices',
    level: 'Advanced',
    projects: '10+ projects',
    snippet: `<main>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
</main>`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">HTML5</span>
      </div>
    )
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    description: 'Modern CSS with Flexbox, Grid, and custom properties',
    level: 'Advanced',
    projects: '10+ projects',
    snippet: `.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
}`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">CSS3</span>
      </div>
    )
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            <span className="bg-primary px-2 md:px-4 py-2 rounded-lg">Skills</span> & Tech
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 px-4">
            Technologies I use to bring ideas to life
          </p>
        </Motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              onClick={() => {
                if (isMobile) {
                  setActiveSkill(activeSkill === skill.name ? null : skill.name);
                }
              }}
              className="relative group"
            >
              {/* Card */}
              <Motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-2xl h-full flex flex-col justify-between p-6 border border-glass-border shadow-orange/20 hover:shadow-orange/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <Motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <skill.icon className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{skill.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{skill.projects}</span>
                    <span className="text-primary font-medium">
                      {isMobile ? 'Tap for details' : 'Hover for details'}
                    </span>
                  </div>
                </div>
              </Motion.div>

              {/* Details */}
              <AnimatePresence>
                {(hoveredSkill === skill.name || activeSkill === skill.name) && (
                  <Motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-20"
                  >
                    <div className="glass rounded-2xl p-6 border border-glass-border shadow-orange/50 h-full">
                      <div className="h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                            <skill.icon className="text-xl text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                            <p className="text-xs text-gray-400">{skill.level} • {skill.projects}</p>
                          </div>
                        </div>
                        <div className="mb-4">{skill.preview}</div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-400 mb-2">Code Example:</p>
                          <pre className="text-xs bg-background/80 text-primary p-3 rounded-lg overflow-auto max-h-24 border border-primary/20">
                            {skill.snippet}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          ))}
        </div>

        {/* Summary */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'TypeScript', 'Three.js', 'Node.js', 'Testing', 'CI/CD'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
