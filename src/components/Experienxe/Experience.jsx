import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCertificate, FaTrophy } from 'react-icons/fa';

const experiences = [
  {
    icon: FaGraduationCap,
    title: "Front-End Bootcamp",
    institution: "Coding Front",
    period: "2024 - 2025",
    description: "A results-driven learning journey blending formal education with real-world, hands-on experience in front-end development. Focused on building scalable interfaces, mastering modern frameworks, and collaborating on cross-functional projects that deliver high-impact user experiences.",
    color: "#F96902",
    progress: 100
  },
  {
    icon: FaLaptopCode,
    title: "Product Management ",
    institution: "Reforge",
    period: "2022",
    description: "Developed a product-first mindset by learning to define clear user problems, prioritize features based on impact, and align cross-functional teams toward scalable solutions. Gained practical experience in product strategy, roadmap design, and metrics-driven decision-making.",
    color: "#F96902",
    progress: 100
  },
  {
    icon: FaCertificate,
    title: "UI/UX Design Certification",
    institution: "Rahnama College",
    period: "2021",
    description: "Completed intensive training in user interface design, prototyping, and design systems. Gained hands-on experience with modern UI/UX methodologies, accessibility best practices, and creating intuitive, user-centered digital experiences.",
    color: "#F96902",
    progress: 100
  },
  {
    icon: FaTrophy,
    title: "Law Degree",
    institution: "University of Pardis",
    period: "2020 - 2025",
    description: "Developed strong analytical thinking, research, and communication skills through legal education. This foundation enhances my ability to approach problem-solving critically, navigate complex systems, and collaborate effectively in product and development teams.",
    color: "#F96902",
    progress: 100
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white mb-4">
            <span className="bg-primary px-2 md:px-4 py-2 rounded-lg">Experience</span> & Education
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 px-4">
            My journey in technology and design, from formal education to hands-on experience
          </p>
        </Motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node - Hidden on mobile, visible on md+ */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full shadow-orange z-10 items-center justify-center">
                  <exp.icon className="text-white text-xs" />
                </div>

                {/* Content Card - Full width on mobile, 5/12 on desktop */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-2xl p-4 md:p-6 border border-glass-border shadow-orange hover:shadow-orange/50 transition-all duration-300"
                  >
                    {/* Mobile Icon - Visible only on mobile */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <exp.icon className="text-white text-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        <p className="text-sm text-primary font-semibold">{exp.institution}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-primary">Progress</span>
                        <span className="text-sm text-gray-400">{exp.progress}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <Motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${exp.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-primary h-2 rounded-full shadow-orange"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      {/* Desktop title - hidden on mobile */}
                      <h3 className="hidden md:block text-xl font-bold text-white">{exp.title}</h3>
                      <div className="hidden md:flex items-center gap-2 text-primary font-semibold">
                        <span>{exp.institution}</span>
                      </div>
                      <p className="text-sm text-gray-400 font-medium">{exp.period}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary/30 rounded-full"></div>
                  </Motion.div>
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <Motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-4 h-4 bg-primary rounded-full shadow-orange"
          />
        </div>

        {/* Stats Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { number: "3+", label: "Years Learning", icon: "🎓" },
            { number: "5+", label: "Projects Completed", icon: "💼" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Always Learning", icon: "🚀" }
          ].map((stat, index) => (
            <Motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4 md:p-6 text-center border border-glass-border"
            >
              <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Experience;