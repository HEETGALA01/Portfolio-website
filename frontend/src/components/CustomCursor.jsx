import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
    };

    // Animate cursor with smooth following
    const animateCursor = () => {
      const speed = 0.15;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    // Handle hover effects on interactive elements
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (cursor) {
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('magnetic')) {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursor.style.borderColor = '#0ea5e9';
          cursor.style.backgroundColor = 'rgba(14, 165, 233, 0.1)';
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        cursor.style.backgroundColor = 'transparent';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .magnetic');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide custom cursor on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-white/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          transition: 'transform 0.2s ease-out, border-color 0.2s ease-out, background-color 0.2s ease-out',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Cursor Dot */}
      <motion.div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-primary-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </>
  );
};

export default CustomCursor;
