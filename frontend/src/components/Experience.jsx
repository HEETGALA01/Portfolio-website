import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="experience-section relative py-20 bg-white dark:bg-gradient-to-b dark:from-dark-900 dark:to-dark-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="hidden dark:block absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000" />
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
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-black mt-2 mb-4">
            Work <span className="dark:bg-gradient-to-r dark:from-primary-400 dark:via-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-black">Experience</span>
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 bg-black mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ 
                opacity: 0, 
                y: -100,
                x: index % 2 === 0 ? -50 : 50,
                rotate: index % 2 === 0 ? -10 : 10
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                x: 0,
                rotate: 0
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="experience-card mb-12 relative"
            >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-24 bottom-0 w-0.5 bg-black dark:bg-gradient-to-b dark:from-primary-500 dark:to-transparent transform -translate-x-1/2" />
              )}

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-black dark:bg-primary-500 rounded-full transform -translate-x-1/2 shadow-lg dark:shadow-primary-500/50" />

              {/* Content Card */}
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    rotate: index % 2 === 0 ? -2 : 2
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-black dark:bg-gradient-to-br dark:from-primary-500 dark:to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <div className="relative bg-white dark:bg-dark-900/80 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold dark:text-white text-black mb-2 flex items-center gap-3">
                          <FaBriefcase className="dark:text-primary-400 text-black" />
                          {exp.title}
                        </h3>
                        <p className="text-xl dark:text-primary-300 text-black font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 dark:text-gray-400 text-neutral-700 text-sm">
                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="dark:text-primary-400 text-black" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaCalendar className="dark:text-primary-400 text-black" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="dark:text-gray-300 text-neutral-900 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      <h4 className="dark:text-white text-black font-semibold flex items-center gap-2">
                        <FaCheckCircle className="dark:text-primary-400 text-black" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start gap-3 dark:text-gray-300 text-neutral-900"
                          >
                            <span className="dark:text-primary-400 text-black mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="px-3 py-1 glass rounded-full dark:text-primary-300 text-black text-xs font-medium cursor-default hover:bg-neutral-100 dark:hover:bg-primary-500/20 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
