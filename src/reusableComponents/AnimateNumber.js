import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateNumber = (target) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < target && inView) {
        setCount(count + 1);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [count, inView, target]);

  return (
    <motion.span 
    ref={ref} 
    animate={{ scale: inView ? 1.2 : 1 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
      {count}
    </motion.span>
  );
};

export default AnimateNumber;