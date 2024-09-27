"use client"; // Add this line at the top

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (top <= windowHeight && top >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Fade in and move up
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;