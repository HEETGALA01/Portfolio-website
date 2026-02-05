import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { about, personalInfo } from '../data/portfolioData';
import { FaCode, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaRocket, FaHeart } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section relative py-20 bg-white dark:bg-gradient-to-b dark:from-dark-900 dark:to-dark-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="hidden dark:block absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000" />
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
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-black mt-2 mb-4">
            About <span className="dark:bg-gradient-to-r dark:from-primary-400 dark:via-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-black">Me</span>
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 bg-black mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image Card with Flip Effect */}
          <motion.div
            className="about-card"
          >
            <div className="relative">
              <div className="relative">
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="relative glass-dark rounded-2xl p-8 backdrop-blur-xl">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary-600/20 to-purple-600/20 flex items-center justify-center">
                        <img 
                          src="/heetimage.jpg" 
                          alt={personalInfo.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <div
            className="about-card space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FaRocket className="dark:text-primary-400 text-black text-2xl" />
                Nice to meet you!
              </h3>
              {about.description.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="dark:text-gray-300 text-neutral-900 leading-relaxed mb-4"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Skills Highlight */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Three.js', 'Tailwind'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full dark:text-primary-300 text-neutral-900 text-sm font-medium cursor-default hover:bg-neutral-100 dark:hover:bg-primary-500/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
        >
          {about.stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative glass-dark rounded-xl p-6 text-center backdrop-blur-xl">
                <div className="text-4xl font-bold dark:text-gradient-blue dark:bg-gradient-to-r dark:from-primary-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent text-black mb-2">
                  {stat.value}
                </div>
                <div className="dark:text-gray-400 text-neutral-700 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
