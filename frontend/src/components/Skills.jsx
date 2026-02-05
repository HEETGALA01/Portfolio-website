import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaDocker, FaGithub, FaShopify, FaWordpress, FaHtml5, FaCss3Alt, FaServer } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiPostman, SiGoogleanalytics, SiRender, SiTensorflow, SiStreamlit, SiC } from 'react-icons/si';

const skillsData = {
  frontend: [
    { name: 'React.js', icon: FaReact },
    { name: 'React Native', icon: FaReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'Shopify', icon: FaShopify },
    { name: 'WordPress', icon: FaWordpress },
  ],
  backend: [
    { name: 'Node.js', icon: FaNode },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'SQL', icon: SiMysql },
    { name: 'REST APIs', icon: SiPostman },
    { name: 'Python', icon: FaPython },
  ],
  tools: [
    { name: 'Git/GitHub', icon: FaGithub },
    { name: 'Docker', icon: FaDocker },
    { name: 'SEO', icon: SiGoogleanalytics },
    { name: 'Render', icon: SiRender },
    { name: 'Hostinger', icon: FaServer },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'Streamlit', icon: SiStreamlit },
    { name: 'C Language', icon: SiC },
  ],
};

const SkillCard = ({ skill, isDark }) => {
  const Icon = skill.icon;
  
  return (
    <div className="flex-shrink-0 min-w-[160px] mx-2">
      <div className={`backdrop-blur-xl rounded-xl p-4 transition-all duration-300 border ${
        isDark 
          ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#64ffda]/50' 
          : 'bg-white border-neutral-300 hover:border-black hover:shadow-lg'
      }`}>
        <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${
          isDark ? 'bg-gradient-to-br from-blue-500 to-purple-500' : 'bg-black'
        }`}>
          <Icon className="text-white text-xl" />
        </div>
        <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>
          {skill.name}
        </h3>
      </div>
    </div>
  );
};

const MarqueeRow = ({ skills, speed, isDark }) => {
  const extendedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="relative w-full overflow-hidden py-3">
      <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${
        isDark ? 'bg-gradient-to-r from-[#0f0c29] to-transparent' : 'bg-gradient-to-r from-neutral-50 to-transparent'
      }`} />
      <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${
        isDark ? 'bg-gradient-to-l from-[#0f0c29] to-transparent' : 'bg-gradient-to-l from-neutral-50 to-transparent'
      }`} />
      
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {extendedSkills.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} isDark={isDark} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`relative py-16 overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]' 
          : 'bg-gradient-to-b from-neutral-50 via-white to-neutral-50'
      }`}
    >
      <div className="hidden dark:block absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 px-6"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${
            isDark ? 'text-primary-400' : 'text-neutral-800'
          }`}>
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className={isDark ? 'bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent' : 'text-black'}>
              Technical Arsenal
            </span>
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-gradient-to-r from-primary-500 to-purple-500' : 'bg-black'
          }`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-2"
        >
          <MarqueeRow skills={skillsData.frontend} speed={10} isDark={isDark} />
          <MarqueeRow skills={skillsData.backend} speed={12} isDark={isDark} />
          <MarqueeRow skills={skillsData.tools} speed={14} isDark={isDark} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
