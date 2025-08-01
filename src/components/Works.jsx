import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio-v2",
    description: "Modern React portfolio with realistic 3D VS Code editor, interactive hover effects, and professional orange/dark theme design.",
    image: "/portfolio2-cover.png",
    technologies: ["React 18", "Three.js", "Framer Motion", "Tailwind CSS", "Vite", "Vercel"],
    github: "https://github.com/yourusername/social-app",
    live: "#",
    preview: "/portfolio2-preview.png"
  },
  {
    title: "Portfolio-v1",
    description: " Interactive portfolio featuring 3D VS Code editor, Framer Motion animations, and modern glassmorphism design.",
    image: "/portfolio-cover.png",
    technologies: ["React 18", "Three.js", "Framer Motion", "Tailwind CSS", "Vite", "Vercel"],
    github: "https://github.com/Sepidehpakseresht/Sepideh-portfolio.git",
    live: "https://sepideh-portfolio-n6yfdmywl-sepidehpaksereshts-projects.vercel.app/",
    preview: "/portfolio-preview.png"
  },
  {
    title: "Innergix",
    description: "React-based business website built with Vite for fast development and optimal performance.",
    image: "/innergix-preview.png",
    technologies: ["React", "Vite", "HTML", "CSS"],
    github: "https://github.com/Sepidehpakseresht/innergix.git",
    live: "https://www.innergix.com/",
    preview: "/innergix-cover.png"
  },
  {
    title: "Tech-immigrants Landing Page",
    description: "A storytelling-based landing page for immigrant tech professionals. Clean, modern UI and smooth scroll.",
    image: "/tech-cover.png",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Vercel"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://tech-immigrants.vercel.app/",
    preview: "/tech-preview.png"
  },
  {
    title: "Creative Agency Landing Page",
    description: "Modern, fully responsive agency landing page with smooth animations and professional design.",
    image: "/agancy-cover.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    github: "https://github.com/Sepidehpakseresht/agency-landing-page.git",
    live: "https://agencylandingpage-theta.vercel.app/",
    preview: "/agancy-preview.png"
  },
  {
    title: "Golzarf Factory",
    description: "Developed a responsive, Farsi-first website for Golzarf with interactive 3D visuals and a clean, scalable UI.",
    image: "/question-mark.avif",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Three.js", "Blender"],
    github: "https://github.com/yourusername/ai-chat",
    live: "#",
    preview: "/question-mark.avif"
  }
];

const Works = () => {
  const [hovered, setHovered] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            <span className="bg-primary px-2 md:px-4 py-2 rounded-lg">Featured</span> Projects
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 px-4">
            A showcase of my recent work and creative solutions
          </p>
        </Motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              <Motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl border-2 border-glass-border shadow-orange hover:shadow-orange/50 transition-all duration-300 overflow-hidden cursor-pointer min-h-[520px] flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                   {/* Golzarf badge */}
                  {project.title === "Golzarf Factory" && (
                    <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
                      Coming Soon!
                    </span>
                  )}
                  <Motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <AnimatePresence>
                    {hovered === project.title && (
                      <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <img
                          src={project.preview}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                            Live Preview
                          </span>
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[60px] items-start content-start">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="h-6 px-3 flex items-center bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        <FaGithub className="text-lg" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <Motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300"
                  >
                    <FaTimes className="text-lg" />
                  </button>

                  <img
                    src={selectedProject.preview}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-orange transition-all duration-300"
                      >
                        <FaGithub className="text-lg" />
                        View Code
                      </a>
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;
