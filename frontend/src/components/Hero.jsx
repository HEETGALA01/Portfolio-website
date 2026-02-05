import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import gsap from 'gsap';

// Animated 3D Sphere Component
const AnimatedSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Particle System
const Particles = () => {
  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#7dd3fc" transparent opacity={0.6} />
    </points>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-gradient-to-br dark:from-dark-950 dark:via-dark-900 dark:to-dark-800"
    >
      {/* Animated Background Gradient - Dark Mode Only */}
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-purple-600/20 animate-gradient-xy" />
      
      {/* 3D Canvas Background - Dark Mode Only */}
      <div className="hidden dark:block absolute inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <Particles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="hero-content mb-6">
            <span className="inline-block px-6 py-2 rounded-full bg-white dark:bg-white/10 border border-neutral-300 dark:border-primary-400/30 dark:text-primary-300 text-neutral-900 text-sm font-medium tracking-wider">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Name with animated gradient */}
          <h1 className="hero-content text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 dark:text-white text-neutral-900">
            Hi, I'm{' '}
            <span className="dark:text-gradient-blue dark:bg-gradient-to-r dark:from-primary-400 dark:via-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent dark:animate-gradient-x text-neutral-900 font-extrabold">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="hero-content text-2xl md:text-4xl dark:text-gray-300 text-neutral-700 mb-8 h-20 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Specialist',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-display"
            />
          </div>

          {/* Tagline */}
          <p className="hero-content text-lg md:text-xl dark:text-gray-400 text-neutral-700 mb-12 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="hero-content flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 dark:bg-gradient-to-r dark:from-primary-600 dark:to-primary-700 bg-neutral-900 text-white rounded-lg font-semibold overflow-hidden dark:hover-glow hover:bg-neutral-800 transition-all duration-300 hover:scale-105 magnetic"
            >
              <span className="relative z-10">View My Work</span>
              <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <a
              href={personalInfo.resume}
              download
              className="group relative px-8 py-4 bg-white dark:bg-white/10 border border-neutral-300 dark:border-white/20 dark:text-white text-neutral-900 rounded-lg font-semibold flex items-center gap-2 dark:hover:bg-white/10 hover:bg-neutral-100 transition-all duration-300 hover:scale-105 magnetic"
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 border-2 dark:border-primary-500 border-neutral-900 dark:text-primary-400 text-neutral-900 rounded-lg font-semibold dark:hover:bg-primary-500/20 hover:bg-neutral-100 transition-all duration-300 hover:scale-105 magnetic"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-content flex gap-6 justify-center">
            {[
              { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
              { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-white/10 border border-neutral-300 dark:border-white/20 rounded-full text-black dark:text-gray-300 hover:text-neutral-900 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-white/10 hover:scale-110 hover:-translate-y-1 transition-all duration-500 ease-out"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
