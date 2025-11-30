import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealCardProps {
  children: ReactNode;
  className?: string;
  delay?: number; // NEW: optional delay prop
}

const RevealCard = ({ children, className, delay = 0 }: RevealCardProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealCard;