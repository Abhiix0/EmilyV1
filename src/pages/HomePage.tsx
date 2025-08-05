import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import HeroSection from '../components/HeroSection';
import WhoEmily from '../components/WhoEmily';
import WhatEmily from '../components/WhatEmily';
import EmilysStyle from '../components/EmilysStyle';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatedSection index={0}>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection index={1}>
        <WhoEmily />
      </AnimatedSection>
      <AnimatedSection index={2}>
        <WhatEmily />
      </AnimatedSection>
      <AnimatedSection index={3}>
        <EmilysStyle />
      </AnimatedSection>
      <AnimatedSection index={4}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection index={5}>
        <CTASection />
      </AnimatedSection>
    </motion.div>
  );
};

export default HomePage;