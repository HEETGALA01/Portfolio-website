import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaShopify, FaWordpress, FaNode, FaPython, 
  FaGithub, FaDocker, FaServer 
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiMongodb, SiMysql, SiPostman, SiGoogleanalytics, 
  SiRender, SiTensorflow, SiStreamlit, SiC 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping
const iconMap = {
  FaReact: FaReact,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaShopify: FaShopify,
  FaWordpress: FaWordpress,
  FaNode: FaNode,
  FaPython: FaPython,
  FaGithub: FaGithub,
  FaDocker: FaDocker,
  FaServer: FaServer,
  SiJavascript: SiJavascript,
  SiExpress: SiExpress,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  SiPostman: SiPostman,
  SiGoogleanalytics: SiGoogleanalytics,
  SiRender: SiRender,
  SiTensorflow: SiTensorflow,
  SiStreamlit: SiStreamlit,
  SiC: SiC,
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-category', {
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="skills-section relative py-20 bg-neutral-50 dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="hidden dark:block absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      {/* Particle Effect */}
        <div className="hidden dark:block absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
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
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-black mt-2 mb-4">
            Skills & <span className="dark:bg-gradient-to-r dark:from-primary-400 dark:via-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-black">Technologies</span>
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 bg-black mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {skills.technical.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-black dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 text-white shadow-lg dark:shadow-primary-500/50'
                  : 'glass dark:text-gray-300 text-neutral-900 hover:bg-white/10'
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skills.technical[activeCategory].items.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="skill-item relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-black dark:bg-gradient-to-br dark:from-primary-500 dark:to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative glass-dark rounded-xl p-6 backdrop-blur-xl h-full">
                  {/* Icon */}
                  <div className="text-5xl mb-4 dark:text-primary-400 text-black transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {IconComponent && <IconComponent />}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-white font-semibold mb-3 text-lg">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm dark:text-gray-400 text-neutral-700">
                      <span>Proficiency</span>
                      <span className="dark:text-primary-400 text-black">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                        className="h-full bg-black dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ['0%', '100%'] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-dark-700"
                      />
                      <motion.circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 20}`}
                        strokeDashoffset={`${2 * Math.PI * 20 * (1 - skill.level / 100)}`}
                        strokeLinecap="round"
                        className="dark:text-primary-500 text-black"
                        initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                        animate={
                          isInView
                            ? { strokeDashoffset: 2 * Math.PI * 20 * (1 - skill.level / 100) }
                            : {}
                        }
                        transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
