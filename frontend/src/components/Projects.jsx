import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 3D Tilt Card Component
const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      className="relative group perspective-1000 cursor-pointer"
      onClick={() => onClick(project)}
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="preserve-3d relative"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-black dark:bg-gradient-to-r dark:from-primary-500 dark:via-purple-500 dark:to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
        
        {/* Card Content */}
        <div className="relative bg-white dark:bg-dark-900/80 border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl h-[580px] flex flex-col">
          {/* Image Container */}
          <div className="relative h-64 flex-shrink-0 overflow-hidden bg-neutral-100 dark:bg-gradient-to-br dark:from-primary-900/50 dark:to-purple-900/50">
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain bg-white dark:bg-transparent p-4"
              loading="lazy"
              style={{ imageRendering: 'high-quality' }}
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
              >
                <FaGithub size={24} />
              </motion.a>
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
                >
                  <FaExternalLinkAlt size={24} />
                </motion.a>
              )}
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-4 py-1.5 bg-black dark:bg-primary-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold dark:text-white text-black mb-3 dark:group-hover:text-primary-400 group-hover:text-neutral-900 transition-colors line-clamp-2 min-h-[56px]">
              {project.title}
            </h3>
            <p className="dark:text-gray-400 text-neutral-700 mb-4 line-clamp-2 min-h-[48px]">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-200 dark:bg-primary-500/10 text-black dark:text-primary-300 text-xs rounded-full border border-neutral-300 dark:border-primary-500/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200 dark:border-white/10 mt-auto">
              {Object.entries(project.stats).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="dark:text-primary-400 text-black font-bold text-sm">{value}</div>
                  <div className="dark:text-gray-500 text-neutral-600 text-xs capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Project Modal
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-900/95 border border-neutral-200 dark:border-white/10 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
        >
          <FaTimes size={20} />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-black dark:bg-primary-500/20 text-white dark:text-primary-300 text-sm font-semibold rounded-full mb-4">
              {project.category}
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
            <p className="dark:text-gray-300 text-neutral-900 text-lg">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-neutral-800 dark:bg-gradient-to-r dark:from-primary-500/20 dark:to-purple-500/20 text-white dark:text-primary-300 rounded-lg border border-neutral-700 dark:border-primary-500/30 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 dark:text-gray-300 text-neutral-900"
                >
                  <span className="dark:text-primary-400 text-black mt-1">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Project Stats</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.stats).map(([key, value], index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl text-center"
                >
                  <div className="text-3xl font-bold dark:text-gradient-blue dark:bg-gradient-to-r dark:from-primary-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent text-black mb-1">
                    {value}
                  </div>
                  <div className="dark:text-gray-400 text-neutral-700 text-sm capitalize">{key}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all"
            >
              <FaGithub size={20} />
              View Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 text-white rounded-lg font-semibold transition-all hover-glow"
            >
              <FaExternalLinkAlt size={18} />
              Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 bg-neutral-50 dark:bg-gradient-to-b dark:from-dark-900 dark:to-dark-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="hidden dark:block absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="dark:text-primary-400 text-neutral-800 text-sm font-semibold tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-black mt-2 mb-4">
            Featured <span className="dark:bg-gradient-to-r dark:from-primary-400 dark:via-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-black">Projects</span>
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 bg-black mx-auto rounded-full" />
          <p className="dark:text-gray-400 text-neutral-700 mt-6 max-w-2xl mx-auto">
            Explore some of my recent work and side projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/50'
                  : 'glass dark:text-gray-300 text-neutral-900 hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 md:px-8 md:py-4 glass dark:text-primary-300 text-neutral-900 rounded-lg font-semibold dark:hover:bg-white/10 hover:bg-neutral-200 transition-all duration-300 dark:hover-glow text-sm md:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
