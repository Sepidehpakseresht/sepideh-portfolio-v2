import { useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function VSCode3D() {
  const group = useRef();
  const cursorRef = useRef();
  
  useFrame((state) => {
    if (group.current) {
      // Gentle rotation
      group.current.rotation.y += 0.002;
    }
    if (cursorRef.current) {
      // Blinking cursor effect
      cursorRef.current.material.opacity = Math.sin(state.clock.elapsedTime * 3) > 0 ? 1 : 0;
    }
  });
  
  return (
    <group ref={group}>
      {/* Main VS Code Window */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 3, 0.2]} />
        <meshPhysicalMaterial
          color="#1e1e1e"
          roughness={0.3}
          metalness={0.2}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
        />
      </mesh>
      
      {/* VS Code Background */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[3.8, 2.8]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>
      
      {/* Activity Bar (Left Sidebar) */}
      <mesh position={[-1.6, 0, 0.12]}>
        <planeGeometry args={[0.4, 2.6]} />
        <meshBasicMaterial color="#333333" />
      </mesh>
      
      {/* Activity Bar Icons */}
      {[
        { pos: [-1.6, 1, 0.13], color: "#007acc" }, // Explorer
        { pos: [-1.6, 0.6, 0.13], color: "#6c6c6c" }, // Search
        { pos: [-1.6, 0.2, 0.13], color: "#6c6c6c" }, // Source Control
        { pos: [-1.6, -0.2, 0.13], color: "#6c6c6c" }, // Run
        { pos: [-1.6, -0.6, 0.13], color: "#6c6c6c" }, // Extensions
      ].map((icon, i) => (
        <mesh key={i} position={icon.pos}>
          <boxGeometry args={[0.25, 0.25, 0.01]} />
          <meshBasicMaterial color={icon.color} />
        </mesh>
      ))}
      
      {/* Sidebar */}
      <mesh position={[-1.2, 0, 0.12]}>
        <planeGeometry args={[0.8, 2.6]} />
        <meshBasicMaterial color="#252526" />
      </mesh>
      
      {/* Sidebar Content - File Explorer */}
      <mesh position={[-1.2, 1, 0.13]}>
        <planeGeometry args={[0.7, 0.3]} />
        <meshBasicMaterial color="#3c3c3c" />
      </mesh>
      
      {/* File Tree */}
      {[
        { pos: [-1.2, 0.6, 0.13], color: "#cccccc" }, // src/
        { pos: [-1.2, 0.4, 0.13], color: "#cccccc" }, // ├── components/
        { pos: [-1.2, 0.2, 0.13], color: "#cccccc" }, // ├── pages/
        { pos: [-1.2, 0, 0.13], color: "#cccccc" }, // └── utils/
      ].map((item, i) => (
        <mesh key={i} position={item.pos}>
          <planeGeometry args={[0.6, 0.15]} />
          <meshBasicMaterial color={item.color} />
        </mesh>
      ))}
      
      {/* Main Editor Area */}
      <mesh position={[0.4, 0, 0.12]}>
        <planeGeometry args={[2.8, 2.6]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>
      
      {/* Editor Tabs */}
      <mesh position={[0.4, 1.1, 0.13]}>
        <planeGeometry args={[2.8, 0.2]} />
        <meshBasicMaterial color="#2d2d30" />
      </mesh>
      
      {/* Active Tab */}
      <mesh position={[0.4, 1.1, 0.14]}>
        <planeGeometry args={[1.2, 0.18]} />
        <meshBasicMaterial color="#1e1e1e" />
      </mesh>
      
      {/* Tab Text */}
      <mesh position={[0.4, 1.1, 0.15]}>
        <planeGeometry args={[1, 0.1]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
      
      {/* Line Numbers */}
      {[...Array(8)].map((_, i) => (
        <mesh key={`line-${i}`} position={[0.4, 0.6 - i * 0.2, 0.13]}>
          <planeGeometry args={[0.3, 0.02]} />
          <meshBasicMaterial color="#858585" />
        </mesh>
      ))}
      
      {/* Code Content */}
      {[
        { text: "import", color: "#569cd6", pos: [0.6, 0.6, 0.13] },
        { text: "React", color: "#4ec9b0", pos: [0.6, 0.4, 0.13] },
        { text: "from", color: "#569cd6", pos: [0.6, 0.2, 0.13] },
        { text: "'react'", color: "#ce9178", pos: [0.6, 0, 0.13] },
        { text: "", color: "#ffffff", pos: [0.6, -0.2, 0.13] },
        { text: "function", color: "#569cd6", pos: [0.6, -0.4, 0.13] },
        { text: "Portfolio", color: "#4ec9b0", pos: [0.6, -0.6, 0.13] },
        { text: "() {", color: "#569cd6", pos: [0.6, -0.8, 0.13] }
      ].map((line, i) => (
        <mesh key={`code-${i}`} position={line.pos}>
          <planeGeometry args={[2.2, 0.02]} />
          <meshBasicMaterial color={line.color} />
        </mesh>
      ))}
      
      {/* Cursor */}
      <mesh ref={cursorRef} position={[0.6, -0.4, 0.14]}>
        <planeGeometry args={[0.02, 0.15]} />
        <meshBasicMaterial color="#f96902" />
      </mesh>
      
      {/* Status Bar */}
      <mesh position={[0, -1.2, 0.12]}>
        <planeGeometry args={[3.8, 0.2]} />
        <meshBasicMaterial color="#007acc" />
      </mesh>
      
      {/* Status Bar Items */}
      {[
        { pos: [-1.5, -1.2, 0.13], color: "#ffffff" }, // Git branch
        { pos: [0, -1.2, 0.13], color: "#ffffff" }, // Language
        { pos: [1.5, -1.2, 0.13], color: "#ffffff" }, // Line/Col
      ].map((item, i) => (
        <mesh key={i} position={item.pos}>
          <planeGeometry args={[0.8, 0.15]} />
          <meshBasicMaterial color={item.color} />
        </mesh>
      ))}
      
      {/* Window Title Bar */}
      <mesh position={[0, 1.4, 0.12]}>
        <planeGeometry args={[3.8, 0.2]} />
        <meshBasicMaterial color="#3c3c3c" />
      </mesh>
      
      {/* Window Controls */}
      {[
        { pos: [-1.6, 1.4, 0.13], color: "#ff5f56" },
        { pos: [-1.4, 1.4, 0.13], color: "#ffbd2e" },
        { pos: [-1.2, 1.4, 0.13], color: "#27ca3f" }
      ].map((control, i) => (
        <mesh key={i} position={control.pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color={control.color} />
        </mesh>
      ))}
      
      {/* Floating Code Particles */}
      {[...Array(15)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * Math.PI / 8) * 3,
            Math.sin(i * Math.PI / 8) * 2,
            Math.sin(i * Math.PI / 8) * 1.5
          ]}
        >
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshPhysicalMaterial
            color="#f96902"
            roughness={0.2}
            metalness={0.6}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
      
      {/* Subtle shadow */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 min-h-[70vh] flex flex-col lg:flex-row items-center justify-between"
      style={{ background: '#0B0E13' }}
    >
      {/* Left: Modern Intro */}
      <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start justify-center max-w-xl">
        <Motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-2 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-primary">Sepideh</span>
        </Motion.h1>
        <Motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/80 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Front-End Developer & UI Engineer
        </Motion.h2>
        <Motion.p
          className="text-gray-400 text-base md:text-lg mb-6 max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I create modern, interactive, and visually stunning web experiences using React, Three.js, and the latest UI trends.
        </Motion.p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Motion.a
            href="#works"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex-1 flex items-center justify-center gap-3 px-6 md:px-7 py-3 glass rounded-full text-white font-semibold text-base md:text-lg shadow-orange hover:shadow-orange transition-all duration-300 bg-primary/90 touch-manipulation"
          >
            <span>View My Work</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Motion.a>
          <Motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex-1 flex items-center justify-center gap-3 px-6 md:px-7 py-3 glass rounded-full text-primary font-semibold text-base md:text-lg border-2 border-primary bg-white/90 hover:bg-primary hover:text-white hover:shadow-orange transition-all duration-300 touch-manipulation"
          >
            <FaDownload className="text-xl" />
            <span>Download Resume</span>
          </Motion.a>
        </div>
        <div className="flex gap-3 mt-6">
          {[
            { icon: FaGithub, href: "https://github.com/Sepidehpakseresht", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/sepideh-pakseresht-1b3967239", label: "LinkedIn" },
            { icon: FaEnvelope, href: "mailto:sepiidehpakseresht@gmail.com", label: "Email" }
          ].map((social) => (
            <Motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: "0 0 8px #F96902" }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300 touch-manipulation"
            >
              <social.icon className="text-lg" />
            </Motion.a>
          ))}
        </div>
      </div>
      {/* Right: 3D VS Code */}
      <div className="flex-1 flex items-center justify-center w-full h-64 sm:h-72 lg:h-96 mt-8 lg:mt-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ width: '100%', height: '100%' }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 4, 2]} intensity={0.8} color="#F96902" castShadow />
          <pointLight position={[-2, 2, 2]} intensity={0.4} color="#F96902" />
          <pointLight position={[0, -2, 2]} intensity={0.3} color="#F96902" />
          <pointLight position={[0, 0, 3]} intensity={0.2} color="#fff" />
          <VSCode3D />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.2}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;