import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { sectionFade } from "../animations/variants";

interface AnimatedSectionProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

const AnimatedSection = ({ children, index = 0, className = "" }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={sectionFade}
      custom={index}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 