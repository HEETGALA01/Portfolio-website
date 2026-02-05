import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { FaAward, FaCertificate, FaCalendar, FaBook } from 'react-icons/fa';

const Publications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="relative py-20 bg-neutral-50 dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 overflow-hidden"
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
            Research & Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-black mt-2 mb-4">
            Publications & <span className="dark:bg-gradient-to-r dark:from-primary-400 dark:via-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-black">Certifications</span>
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 bg-black mx-auto rounded-full" />
        </motion.div>

        {/* Publications Grid */}
        <div className="max-w-4xl mx-auto grid gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group cursor-pointer"
              onClick={() => cert.certificate && window.open(cert.certificate, '_blank')}
            >
              <div className="absolute inset-0 bg-black dark:bg-gradient-to-br dark:from-primary-500 dark:to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative bg-white dark:bg-dark-900/80 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                {/* Icon Badge */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-black dark:bg-gradient-to-br dark:from-primary-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg dark:shadow-primary-500/50">
                  <FaAward className="dark:text-white text-black text-2xl" />
                </div>

                {/* Content */}
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold dark:text-white text-black flex items-center gap-3 flex-1">
                      <FaBook className="dark:text-primary-400 text-black flex-shrink-0" />
                      <span>{cert.title}</span>
                    </h3>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 dark:text-primary-300 text-black">
                      <FaCertificate className="flex-shrink-0" />
                      <span className="font-semibold">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 dark:text-gray-400 text-neutral-700">
                      <FaCalendar className="flex-shrink-0" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="flex items-center gap-3 dark:text-gray-400 text-neutral-700 text-sm">
                        <span className="font-medium">Credential:</span>
                        <span className="dark:text-primary-300 text-black">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  <p className="dark:text-gray-300 text-neutral-900 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center gap-2 dark:text-primary-400 text-black text-sm font-medium">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                      <span>{cert.certificate ? 'Click to View Certificate' : 'Research Publication'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="dark:text-gray-400 text-neutral-700 max-w-2xl mx-auto">
            Committed to continuous learning and contributing to the tech community through research and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
