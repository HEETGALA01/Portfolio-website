import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative bg-white dark:bg-gradient-to-b dark:from-dark-900 dark:to-dark-950 pt-20 pb-8 overflow-hidden">
      {/* Background Effects */}
      <div className="hidden dark:block absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-black dark:bg-gradient-to-br dark:from-primary-500 dark:to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                {personalInfo.name.charAt(0)}
              </div>
              <span className="text-2xl font-display font-bold dark:text-white text-black">
                {personalInfo.name}
              </span>
            </div>
            <p className="dark:text-gray-400 text-neutral-700 mb-4">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-lg dark:text-gray-300 text-black hover:text-black dark:hover:text-primary-400 hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold dark:text-white text-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="dark:text-gray-400 text-neutral-700 hover:text-black dark:hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-black dark:bg-primary-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold dark:text-white text-black mb-6">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="dark:text-gray-400 text-neutral-700 hover:text-black dark:hover:text-primary-400 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="dark:text-gray-400 text-neutral-700 hover:text-black dark:hover:text-primary-400 transition-colors duration-300"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="dark:text-gray-400 text-neutral-700">
                {personalInfo.location}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="dark:text-gray-400 text-neutral-700 text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
            <FaHeart className="inline text-red-500 animate-pulse" /> using React & Three.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 text-sm dark:text-gray-400 text-neutral-700"
          >
            <a href="#" className="hover:text-black dark:hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black dark:hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 p-4 bg-black dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 text-white rounded-full shadow-lg dark:hover-glow z-40 md:flex items-center justify-center hidden"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
