import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobeAmericas } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 bg-white dark:bg-gradient-to-b dark:from-dark-950 dark:to-dark-900 overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Sphere args={[1, 100, 200]} scale={3} position={[-3, 0, 0]}>
            <MeshDistortMaterial
              color="#000000"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={0.4}
            />
          </Sphere>
          <Sphere args={[1, 100, 200]} scale={2} position={[3, 0, 0]}>
            <MeshDistortMaterial
              color="#000000"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.4}
            />
          </Sphere>
        </Canvas>
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-black mt-2 mb-4">
            Let's <span className="dark:bg-gradient-to-r dark:from-primary-400 dark:via-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent text-black">Connect</span>
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 bg-black mx-auto rounded-full" />
          <p className="dark:text-gray-400 text-neutral-700 mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}  
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold dark:text-white text-black mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-4 glass-dark rounded-xl hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="p-3 bg-black dark:bg-gradient-to-br dark:from-primary-500 dark:to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <div className="dark:text-gray-400 text-neutral-700 text-sm">{info.label}</div>
                          <div className="dark:text-white text-black font-medium">{info.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 glass-dark rounded-xl">
                        <div className="p-3 bg-black dark:bg-gradient-to-br dark:from-primary-500 dark:to-purple-500 rounded-lg">
                          <info.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <div className="dark:text-gray-400 text-neutral-700 text-sm">{info.label}</div>
                          <div className="dark:text-white text-black font-medium">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold dark:text-white text-black mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 glass-dark rounded-xl dark:text-gray-300 text-neutral-900 hover:text-black dark:hover:text-primary-400 hover:bg-white/10 transition-all duration-300 hover-glow"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Globe/Location indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="relative p-8 glass-dark rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10" />
              <div className="relative text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-6xl mb-4 flex justify-center"
                >
                  <FaGlobeAmericas className="dark:text-primary-400 text-black" size={64} />
                </motion.div>
                <p className="dark:text-gray-300 text-neutral-900">
                  Available for remote work worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block dark:text-gray-300 text-neutral-900 mb-2 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-primary-500 focus:ring-2 focus:ring-black/50 dark:focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block dark:text-gray-300 text-neutral-900 mb-2 font-medium">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-primary-500 focus:ring-2 focus:ring-black/50 dark:focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Subject Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="subject" className="block dark:text-gray-300 text-neutral-900 mb-2 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-primary-500 focus:ring-2 focus:ring-black/50 dark:focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="block dark:text-gray-300 text-neutral-900 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-primary-500 focus:ring-2 focus:ring-black/50 dark:focus:ring-primary-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-black dark:bg-gradient-to-r dark:from-primary-500 dark:to-purple-500 text-white rounded-lg font-semibold dark:hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="loader-small" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </span>
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>

              {/* Status Message */}
              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
